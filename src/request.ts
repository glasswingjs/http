import {IncomingMessage} from 'http'
import http2, {Http2ServerRequest, ServerHttp2Stream} from 'http2'
import {Socket} from 'net'
import SetCookieParser from 'set-cookie-parser'
import {ReadableOptions} from 'stream'
import {parse} from 'url'

import {CookieObject, Version} from './_types'

interface IStringTMap<T> {
  [key: string]: T
}

export declare type HttpParams = IStringTMap<any>

export declare type HttpCookieParams = IStringTMap<CookieObject>

export class RequestV1 extends IncomingMessage {
  // public bodyParams?: HttpParams
  public cookieParams?: HttpCookieParams
  public routeParams?: HttpParams
  public queryParams?: HttpParams

  /**
   * Constructor
   * @param socket
   * @param routeParams
   */
  constructor(socket: Socket, routeParams?: HttpParams) {
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
}

export class RequestV2 extends Http2ServerRequest {
  public cookieParams?: HttpCookieParams
  public routeParams?: HttpParams
  public queryParams?: HttpParams

  /**
   * Constructor
   * @param stream
   * @param headers
   * @param options
   * @param rawHeaders
   * @param routeParams
   */
  constructor(
    stream: ServerHttp2Stream,
    headers: http2.IncomingHttpHeaders,
    options: ReadableOptions,
    rawHeaders: string[],
    routeParams: HttpParams,
  ) {
    super(stream, headers, options, rawHeaders)

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
}

/**
 * HTTP Request Type
 */
export declare type Request<V extends Version = Version.V1> = V extends Version.V1 ? RequestV1 : RequestV2
