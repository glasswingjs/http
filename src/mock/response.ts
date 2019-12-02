import {IncomingMessage, ServerResponse} from 'http'

import {Response, ResponseCode, ResponseMessage} from '../_types'

import {mockReq} from './request'

export interface MockResponseOptions {
  statusCode: number
  statusMessage: string
  writableFinished: boolean
}

export class MockResponse extends ServerResponse {
  constructor(req: IncomingMessage, mock?: MockResponseOptions) {
    super(req)

    this.statusCode = mock ? mock.statusCode : ResponseCode.OK
    this.statusMessage = mock ? mock.statusMessage : ResponseMessage.OK
    this.writableFinished = mock ? mock.writableFinished : true
  }
}

export const mockRes = (data: object): Response => new MockResponse(mockReq(data) as IncomingMessage)
