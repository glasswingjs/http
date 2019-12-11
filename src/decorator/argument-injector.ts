import 'reflect-metadata'

import {Http2Request, HttpRequest, HttpRequestBodyDecoder, HttpRequestHeader} from '../request'
import {Http2Response, HttpResponse} from '../response'

/**
 * Sources for Http Arguments
 */
export enum HttpArgumentSource {
  REQUEST = 'request',
  RESPONSE = 'response',
}

/**
 * Method definition for extracting argument from Http?Request / Http?Response
 */
export type HttpArgumentExtractor = (entity: any) => any

/**
 * Method definition for extracting argument from Http Body (see POST requests)
 */
export interface HttpBodyArgumentExtractor extends HttpArgumentExtractor {
  (req: Request): Promise<any>
}

export interface ParameterDescriptor {
  callable: HttpArgumentExtractor
  source: HttpArgumentSource
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
export const Body = (key?: string, decoder: HttpRequestBodyDecoder = JSON.parse): ParameterDecorator => {
  return (target: any, methodKey: string | symbol, parameterIndex: number) => {
    const mapper = (data: any) => (key ? data[key] : data)

    appendParameterMapper(
      target,
      methodKey,
      parameterIndex,
      (req: HttpRequest | Http2Request): Promise<any> =>
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
    appendParameterMapper(target, methodKey, parameterIndex, (req: HttpRequest | Http2Request) => {
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
    appendParameterMapper(target, methodKey, parameterIndex, (req: HttpRequest | Http2Request) => {
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
      (req: HttpRequest | Http2Request): any => req.headers[HttpRequestHeader.X_FORWARDED_FOR.toLowerCase()],
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
    appendParameterMapper(target, methodKey, parameterIndex, (req: HttpRequest | Http2Request): any =>
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
    appendParameterMapper(target, methodKey, parameterIndex, (req: HttpRequest | Http2Request): any =>
      key ? (req.queryParams as any)[key] : req.queryParams,
    )
  }
}

/**
 * @Req()
 */
export const Req = (): ParameterDecorator => {
  return (target: any, methodKey: string | symbol, parameterIndex: number) => {
    appendParameterMapper(
      target,
      methodKey,
      parameterIndex,
      (req: HttpRequest | Http2Request): HttpRequest | Http2Request => req,
    )
  }
}

/**
 * @Res()
 */
export const Res = (): ParameterDecorator => {
  return (target: any, methodKey: string | symbol, parameterIndex: number) => {
    appendParameterMapper(
      target,
      methodKey,
      parameterIndex,
      (res: HttpResponse | Http2Response): HttpResponse | Http2Response => res,
      HttpArgumentSource.RESPONSE,
    )
  }
}

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
const readRequestBody = async (req: HttpRequest | Http2Request): Promise<string> =>
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
  callable: HttpArgumentExtractor,
  source: HttpArgumentSource = HttpArgumentSource.REQUEST,
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
