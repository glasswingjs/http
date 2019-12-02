import 'reflect-metadata'
import {expect} from 'chai'

import {HttpException, ResponseCode, ResponseMessage, UnauthorizedException} from '../src'

describe('src/exception => HttpException', () => {
  it('::createBody(string) to return { message: string, error: undefined, code: undefined }', () => {
    let body = HttpException.createBody('test')

    expect(body.message).to.be.a('string')
    expect(body.message).to.equal('test')

    expect(body.code).to.be.a('undefined')
    expect(body.error).to.be.a('undefined')
  })

  it('::createBody(string, string, number) to return { message: string, error: string, code: number }', () => {
    let body = HttpException.createBody('message', 'error', 200)

    expect(body.message).to.be.a('string')
    expect(body.message).to.equal('message')

    expect(body.error).to.be.a('string')
    expect(body.error).to.equal('error')

    expect(body.code).to.be.a('number')
    expect(body.code).to.equal(200)
  })

  it('::createBody(object) to return object', () => {
    const body = HttpException.createBody({
      test: 'test',
    })

    expect(body).to.be.a('object')
    expect(body.code).to.be.a('undefined')
    expect(body.error).to.be.a('undefined')
  })

  it('::toString()', () => {
    try {
      throw new HttpException('This is an exception', 200)
    } catch (ex) {
      expect(ex.toString()).to.equal('Error(200): This is an exception')
    }
  })
})

describe('src/exception => X extends HttpException', () => {
  it('::toString()', () => {
    try {
      throw new UnauthorizedException('This is an exception')
    } catch (ex) {
      expect(ex.code).to.equal(ResponseCode.UNAUTHORIZED)
      expect(ex.message.code).to.equal(ResponseCode.UNAUTHORIZED)
      expect(ex.message.error).to.equal(ResponseMessage.UNAUTHORIZED)
      expect(ex.message.message).to.equal('This is an exception')
      expect(ex.toString()).to.equal(
        'Error(401): {"code":401,"error":"401 Unauthorized","message":"This is an exception"}',
      )
    }
  })
})
