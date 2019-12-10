import 'reflect-metadata'

import {RequestBodyDecoder, RequestHeader, Response} from '../_types'

import {Request} from '../request'

export enum ArgumentSource {
  REQUEST = 'request',
  RESPONSE = 'response',
}

export type ArgumentMapperCallable = (entity: any) => any

export interface BodyArgumentMapperCallable extends ArgumentMapperCallable {
  (req: Request): Promise<any>
}

export interface ParameterDescriptor {
  callable: ArgumentMapperCallable
  source: ArgumentSource
}

/******************************************************************************
 *
 * Helpers
 *
 *****************************************************************************/

/**
 * @Body(key:? string, decoder?: RequestBodyDecoder)
 *
 * If key is not mentioned or `null`, will return the entire decoded body.
 * If key is mentioned and not null, will return a certain property of the body, defined by the key's value.
 */
export const Body = (key?: string, decoder: RequestBodyDecoder = JSON.parse): ParameterDecorator => {
  return (target: any, methodKey: string | symbol, parameterIndex: number) => {
    const mapper = (data: any) => (key ? data[key] : data)

    appendParameterMapper(
      target,
      methodKey,
      parameterIndex,
      (req: Request): Promise<any> =>
        readRequestBody(req)
          .then(decoder)
          .then(mapper),
    )
  }
}

/**
 * Cookie(key?: string, value?: any)
 * If key is not mentioned or `null`, will return the entire cookies object.
 * If key is mentioned and not null, will return a certain property of the cookies object, defined by the key's
 * value.
 */
export const Cookie = (key?: string, value?: any): ParameterDecorator => {
  return (target: any, methodKey: string | symbol, parameterIndex: number) => {
    appendParameterMapper(target, methodKey, parameterIndex, (req: Request) => {
      if (!req.cookieParams) {
        return null
      }
      return key ? req.cookieParams[key] : req.cookieParams
    })
  }
}

/**
 * Header(key?: string)
 * If key is not mentioned or `null`, will return the entire headers object.
 * If key is mentioned and not null, will return a certain property of the headers object, defined by the key's
 * value.
 */
export const Header = (key?: string): ParameterDecorator => {
  return (target: any, methodKey: string | symbol, parameterIndex: number) => {
    appendParameterMapper(target, methodKey, parameterIndex, (req: Request) => {
      return key ? req.headers[key] : req.headers
    })
  }
}

/**
 * @Ip()
 */
export const Ip = (): ParameterDecorator => {
  return (target: any, methodKey: string | symbol, parameterIndex: number) => {
    appendParameterMapper(
      target,
      methodKey,
      parameterIndex,
      (req: Request): any => req.headers[RequestHeader.X_FORWARDED_FOR.toLowerCase()],
    )
  }
}

/**
 * @Param(key:? string)
 * If key is not mentioned or `null`, will return the entire decoded parameters object.
 * If key is mentioned and not null, will return a certain property of the parameters object, defined by the key's
 * value.
 */
export const Param = (key?: string): ParameterDecorator => {
  return (target: any, methodKey: string | symbol, parameterIndex: number) => {
    appendParameterMapper(target, methodKey, parameterIndex, (req: Request): any =>
      key ? (req.routeParams as any)[key] : req.routeParams,
    )
  }
}

/**
 * @Query(key:? string)
 * If key is not mentioned or `null`, will return the entire query object.
 * If key is mentioned and not null, will return a certain property of the query object, defined by the key's value.
 */
export const Query = (key?: string): ParameterDecorator => {
  return (target: any, methodKey: string | symbol, parameterIndex: number) => {
    appendParameterMapper(target, methodKey, parameterIndex, (req: Request): any =>
      key ? (req.queryParams as any)[key] : req.queryParams,
    )
  }
}

/**
 * @Req()
 */
export const Req = (): ParameterDecorator => {
  return (target: any, methodKey: string | symbol, parameterIndex: number) => {
    appendParameterMapper(target, methodKey, parameterIndex, (req: Request): Request => req)
  }
}

/**
 * @Res()
 */
export const Res = (): ParameterDecorator => {
  return (target: any, methodKey: string | symbol, parameterIndex: number) => {
    appendParameterMapper(target, methodKey, parameterIndex, (res: Response): Response => res, ArgumentSource.RESPONSE)
  }
}

// /**
//  * @Redirect(url: string, code: number = 301)
//  */

/******************************************************************************
 *
 * Helpers
 *
 *****************************************************************************/

/**
 *
 * @param methodName
 */
export const methodArgumentsDescriptor = (methodName: string | symbol): string =>
  `${typeof methodName === 'string' ? methodName : methodName.toString()}__Arguments`

/**
 *
 * @link https://nodejs.org/es/docs/guides/anatomy-of-an-http-transaction/
 * @param req
 */
const readRequestBody = async (req: Request): Promise<string> =>
  new Promise((resolve, reject) => {
    const body: Uint8Array[] = []
    req
      .on('error', err => reject(err))
      .on('data', chunk => body.push(chunk))
      .on('end', () => {
        const str: string = Buffer.concat(body).toString()
        resolve(str)
      })
  })

/**
 *
 * @param target
 * @param methodName
 * @param parameterIndex
 * @param callable
 * @param source
 */
const appendParameterMapper = (
  target: any,
  methodName: string | symbol,
  parameterIndex: number,
  callable: ArgumentMapperCallable,
  source: ArgumentSource = ArgumentSource.REQUEST,
): void => {
  // calculate method (name) descriptor
  const methodDescriptor: string = methodArgumentsDescriptor(methodName)

  // can't set ParameterDescriptor[] type due to creation of an array of zeros
  const metadata: any[] = Array(parameterIndex + 1)

  // copy already discovered parameters into the new array
  if (Reflect.hasMetadata(methodDescriptor, target)) {
    const oldMetadata: ParameterDescriptor[] =
      (Reflect.getMetadata(methodDescriptor, target) as ParameterDescriptor[]) || []
    oldMetadata.forEach((data, index) => {
      metadata[index] = data
    })
  }

  // add the new discovered parameter descriptor to the array
  metadata[parameterIndex] = {
    callable,
    source,
  }

  // set the data back
  Reflect.defineMetadata(methodDescriptor, metadata, target)
}
