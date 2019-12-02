import {IncomingHttpHeaders, IncomingMessage} from 'http'
import {Socket} from 'net'
import YAML from 'yaml'

import {Request, RequestHeader} from '../_types'

export interface MockRequestOptions {
  complete: boolean
  connection: Socket
  headers: IncomingHttpHeaders
  httpVersion: string
  httpVersionMajor: number
  httpVersionMinor: number
  method?: string
  url?: string
}

export class MockRequest extends IncomingMessage {
  constructor(mock: MockRequestOptions, body?: string) {
    super(new Socket())

    this.headers = mock.headers
    this.method = mock.method
    this.url = mock.url

    if (body) {
      this.push(body)
      this.push(null)
    }
  }
}

export const mockReq = (data: object): Request =>
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
  )

export const mockReqYaml = (data: object): Request =>
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
  )
