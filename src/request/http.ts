import * as http from 'http'
import * as net from 'net'
import SetCookieParser, {Cookie} from 'set-cookie-parser'
import {parse} from 'url'

export declare type CookieObject = Cookie

interface IStringTMap<T> {
  [key: string]: T
}

export declare type HttpParams = IStringTMap<any>

export declare type HttpCookieParams = IStringTMap<CookieObject>

export interface HttpRequestInterface {
  parseCookieParams(cookies?: string): HttpCookieParams
  parseQueryParams(url?: string): HttpParams
  toHttpRequest(): http.IncomingMessage
}

export class HttpRequest extends http.IncomingMessage {
  /**
   *
   * @param im
   * @param routeParams
   */
  public static fromIncommingMessage(im: http.IncomingMessage, routeParams?: HttpParams): HttpRequest {
    const request = im as HttpRequest
    request.cookieParams = request.parseCookieParams()
    request.routeParams = routeParams
    request.queryParams = request.parseQueryParams()
    return request
  }

  // public bodyParams?: HttpParams
  public cookieParams?: HttpCookieParams
  public routeParams?: HttpParams
  public queryParams?: HttpParams

  /**
   * Constructor
   * @param socket
   * @param routeParams
   */
  constructor(socket: net.Socket, routeParams?: HttpParams) {
    super(socket)

    this.cookieParams = this.parseCookieParams()
    this.routeParams = routeParams
    this.queryParams = this.parseQueryParams()
  }

  /**
   * Parse Cookie string
   * @param cookies
   */
  public parseCookieParams(cookies?: string): HttpCookieParams {
    const cookiesString: string = cookies ? cookies : (this.headers || {}).cookie || ''
    return SetCookieParser.parse(cookiesString.split('; '), {
      decodeValues: true,
      map: true,
    }) as HttpCookieParams
  }

  /**
   * Parse url string
   * @param url
   */
  public parseQueryParams(url?: string): HttpParams {
    const urlString = url ? url : this.url || ''
    return parse(urlString, true).query as HttpParams
  }

  /**
   *
   */
  public toHttpRequest(): http.IncomingMessage {
    return this as http.IncomingMessage
  }
}
