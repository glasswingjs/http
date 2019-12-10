import http from 'http'
import {Socket} from 'net'
import YAML from 'yaml'

import {RequestHeader} from '../_types'

import {HttpParams, RequestV1} from '../request'

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

export class MockRequest extends RequestV1 {
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

export const mockReq = (data: object, params?: object): RequestV1 =>
  new MockRequest(
    {
      complete: true,
      connection: new Socket(),
      headers: {
        [RequestHeader.COOKIE.toLowerCase()]: 'test=testValue; test2=testValue2',
        [RequestHeader.X_FORWARDED_FOR.toLowerCase()]: '8.8.8.8',
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

export const mockReqYaml = (data: object, params?: object): RequestV1 =>
  new MockRequest(
    {
      complete: true,
      connection: new Socket(),
      headers: {
        [RequestHeader.COOKIE.toLowerCase()]: 'test=testValue; test2=testValue2',
        [RequestHeader.X_FORWARDED_FOR.toLowerCase()]: '8.8.8.8',
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
