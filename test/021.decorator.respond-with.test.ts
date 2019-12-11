import 'reflect-metadata'
import {expect} from 'chai'
import YAML from 'yaml'

import {RespondWith, RespondWithJson, RespondWithRaw, RespondWithYaml} from '../src'

export interface RespondObject {
  test: string
}

export const respondObject: RespondObject = {
  test: 'test-data',
}

export class RespondWithController {
  @RespondWith((data: RespondObject) => data.test || '')
  public custom(): RespondObject {
    return respondObject
  }

  @RespondWithJson()
  public json(): RespondObject {
    return respondObject
  }

  @RespondWithJson()
  public jsonAsync(): Promise<RespondObject> {
    return new Promise(resolve => {
      setTimeout(() => resolve(respondObject), 200)
    })
  }

  @RespondWithRaw()
  public raw(): RespondObject {
    return respondObject
  }

  @RespondWithYaml()
  public yaml(): RespondObject {
    return respondObject
  }
}

describe('lib/controller/decorator/respond-with => *', () => {
  let controller: RespondWithController

  beforeEach(() => {
    controller = new RespondWithController()
  })

  it('@RespondWith(custom) => Should add a @RespondWith decorator on method', () => {
    expect(controller.custom()).to.equal(respondObject.test)
  })

  it('@RespondWithJson() => Should add a @RespondWithJson decorator on method', () => {
    expect(controller.json()).to.equal(JSON.stringify(respondObject))
  })

  it('@RespondWithJson() => Should add a @RespondWithJson decorator on method', done => {
    controller
      .jsonAsync()
      .then(result => expect(result).to.equal(JSON.stringify(respondObject)))
      .then(() => done())
  })

  it('@RespondWithRaw() => Should add a @RespondWithRaw decorator on method', () => {
    expect(controller.raw().test).to.equal(respondObject.test)
  })

  it('@RespondWithYaml() => Should add a @RespondWithYaml decorator on method', () => {
    expect(controller.yaml()).to.equal(YAML.stringify(respondObject))
  })
})
