import * as http2 from 'http2'
import SetCookieParser from 'set-cookie-parser'
import * as stream_module from 'stream'
import {parse} from 'url'

import {HttpCookieParams, HttpParams} from './http'

export class Http2Request extends http2.Http2ServerRequest {
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
    stream: http2.ServerHttp2Stream,
    headers: http2.IncomingHttpHeaders,
    options: stream_module.ReadableOptions,
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

  /**
   *
   */
  public toHttpRequest(): http2.Http2ServerRequest {
    return this as http2.Http2ServerRequest
  }
}
