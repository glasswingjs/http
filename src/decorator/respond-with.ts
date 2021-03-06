import {ClassMethod, extendClassMethod} from '@glasswing/common'
import YAML from 'yaml'

import {HttpResponseBodyEncoder} from '../response'

/**
 * Comment
 *
 * @returns {MethodDecorator}
 */
export const RespondWith = (
  bodyEncoder: HttpResponseBodyEncoder = (data: any) => data,
  ...other: any[]
): MethodDecorator => (
  target: any,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor,
): PropertyDescriptor => {
  const handler = (oldMethod: ClassMethod) => {
    return (...args: any[]) => {
      const result = oldMethod(...args)
      return result instanceof Promise
        ? result.then((data: any) => bodyEncoder(data, ...other))
        : bodyEncoder(result, ...other)
    }
  }
  return extendClassMethod(descriptor, handler)
}

/**
 * Wrap controller respond with raw data
 *
 * @param args
 */
export const RespondWithRaw = (...args: any[]): MethodDecorator => RespondWith((data: any) => data, ...args)

/**
 * Wrap controller action to encode response into a JSON string
 *
 * @param args
 */
export const RespondWithJson = (...args: any[]): MethodDecorator => RespondWith(JSON.stringify, ...args)

/**
 * Wrap controller action to encode response into a YAML string
 *
 * @param args
 */
export const RespondWithYaml = (...args: any[]): MethodDecorator => RespondWith(YAML.stringify, ...args)
