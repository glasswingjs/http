import http from 'http'
import {Socket} from 'net'
import YAML from 'yaml'

import {HttpParams, HttpRequest, HttpRequestHeader} from '../request'
import {HttpResponse, HttpResponseCode, HttpResponseMessage} from '../response'

export interface MockRequestOptions {
  complete: boolean
  connection: Socket
  headers: http.IncomingHttpHeaders
  httpVersion: string
  httpVersionMajor: number
  httpVersionMinor: number
  method?: string
  url?: string
}

export interface MockResponseOptions {
  statusCode: number
  statusMessage: string
  //  writableFinished: boolean
}

export class MockRequest extends HttpRequest {
  constructor(mock: MockRequestOptions, body?: string, routeParams?: HttpParams) {
    super(new Socket(), routeParams)

    this.headers = mock.headers
    this.method = mock.method
    this.url = mock.url

    if (body) {
      this.push(body)
      this.push(null)
    }

    this.cookieParams = this.parseCookieParams()
    this.queryParams = this.parseQueryParams()
  }
}

export class MockResponse extends HttpResponse {
  constructor(req: HttpRequest, mock?: MockResponseOptions) {
    super(req)

    this.statusCode = mock ? mock.statusCode : HttpResponseCode.OK
    this.statusMessage = mock ? mock.statusMessage : HttpResponseMessage.OK
    //    this.writableFinished = mock ? mock.writableFinished : true
  }
}

export const mockReq = (data: object, params?: object): HttpRequest =>
  new MockRequest(
    {
      complete: true,
      connection: new Socket(),
      headers: {
        [HttpRequestHeader.COOKIE.toLowerCase()]: 'test=testValue; test2=testValue2',
        [HttpRequestHeader.X_FORWARDED_FOR.toLowerCase()]: '8.8.8.8',
        test: 'testValue',
        test2: 'testValue2',
      },
      httpVersion: '1.1',
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      method: 'GET',
      url: '/test?test=testValue&test2=testValue2',
    },
    JSON.stringify(data),
    params,
  )

export const mockReqYaml = (data: object, params?: object): HttpRequest =>
  new MockRequest(
    {
      complete: true,
      connection: new Socket(),
      headers: {
        [HttpRequestHeader.COOKIE.toLowerCase()]: 'test=testValue; test2=testValue2',
        [HttpRequestHeader.X_FORWARDED_FOR.toLowerCase()]: '8.8.8.8',
        test: 'testValue',
        test2: 'testValue2',
      },
      httpVersion: '1.1',
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      method: 'GET',
      url: '/test?test=testValue&test2=testValue2',
    },
    YAML.stringify(data),
    params,
  )

export const mockRes = (data: object): HttpResponse => new MockResponse(mockReq(data) as HttpRequest)
