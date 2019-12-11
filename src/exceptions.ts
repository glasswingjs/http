import {HttpResponseCode, HttpResponseMessage} from './response'

export interface HttpExceptionBody {
  message?: object | string
  error?: string
  code?: number
}

/**
 * @link https://github.com/nestjs/nest/blob/master/packages/common/exceptions/http.exception.ts
 */
export class HttpException extends Error {
  /**
   * Convert a HTTP Exception into a HTTP body to respond with.
   * @param message
   * @param error
   * @param code
   */
  public static createBody(message: object | string, error?: string, code?: number): HttpExceptionBody {
    if (typeof message !== 'string' && !Array.isArray(message)) {
      return message
    }
    const theMessage: object = message
      ? {
          code,
          error,
          message,
        }
      : {
          code,
          error,
        }
    return theMessage
  }

  public readonly message: any

  constructor(protected readonly response: object | string, protected readonly code: number) {
    super()
    this.message = response
    this.code = code
  }

  /**
   * Overwrite Error.toString()
   */
  public toString(): string {
    return `Error(${this.code}): ${typeof this.message === 'string' ? this.message : JSON.stringify(this.message)}`
  }
}

/**
 * 401 Unauthorized Exception
 */
export class UnauthorizedException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.UNAUTHORIZED) {
    super(HttpException.createBody(message, error, HttpResponseCode.UNAUTHORIZED), HttpResponseCode.UNAUTHORIZED)
  }
}

/**
 * 402 Payment Required Exception
 */
export class PaymentRequiredException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.PAYMENT_REQUIRED) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.PAYMENT_REQUIRED),
      HttpResponseCode.PAYMENT_REQUIRED,
    )
  }
}

/**
 * 403 Forbidden Exception
 */
export class ForbiddenException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.FORBIDDEN) {
    super(HttpException.createBody(message, error, HttpResponseCode.FORBIDDEN), HttpResponseCode.FORBIDDEN)
  }
}

/**
 * 404 Not Found Exception
 */
export class NotFoundException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.NOT_FOUND) {
    super(HttpException.createBody(message, error, HttpResponseCode.NOT_FOUND), HttpResponseCode.NOT_FOUND)
  }
}

/**
 * 405 Method Not Allowed Exception
 */
export class MethodNotAllowedException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.METHOD_NOT_ALLOWED) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.METHOD_NOT_ALLOWED),
      HttpResponseCode.METHOD_NOT_ALLOWED,
    )
  }
}

/**
 * 406 Not Acceptable Exception
 */
export class NotAcceptableException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.NOT_ACCEPTABLE) {
    super(HttpException.createBody(message, error, HttpResponseCode.NOT_ACCEPTABLE), HttpResponseCode.NOT_ACCEPTABLE)
  }
}

/**
 * 407 Proxy Authentication Required Exception
 */
export class ProxyAuthenticationRequiredException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.PROXY_AUTHENTICATION_REQUIRED) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.PROXY_AUTHENTICATION_REQUIRED),
      HttpResponseCode.PROXY_AUTHENTICATION_REQUIRED,
    )
  }
}

/**
 * 408 Request Timeout Exception
 */
export class RequestTimeoutException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.REQUEST_TIMEOUT) {
    super(HttpException.createBody(message, error, HttpResponseCode.REQUEST_TIMEOUT), HttpResponseCode.REQUEST_TIMEOUT)
  }
}

/**
 * 409 Conflict Exception
 */
export class ConflictException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.CONFLICT) {
    super(HttpException.createBody(message, error, HttpResponseCode.CONFLICT), HttpResponseCode.CONFLICT)
  }
}

/**
 * 410 Gone Exception
 */
export class GoneException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.GONE) {
    super(HttpException.createBody(message, error, HttpResponseCode.GONE), HttpResponseCode.GONE)
  }
}

/**
 * 411 Length Required Exception
 */
export class LengthRequiredException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.LENGTH_REQUIRED) {
    super(HttpException.createBody(message, error, HttpResponseCode.LENGTH_REQUIRED), HttpResponseCode.LENGTH_REQUIRED)
  }
}

/**
 * 412 Precondition Failed Exception
 */
export class PreconditionFailedException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.PRECONDITION_FAILED) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.PRECONDITION_FAILED),
      HttpResponseCode.PRECONDITION_FAILED,
    )
  }
}

/**
 * 413 Payload Too Large Exception
 */
export class PayloadTooLargeException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.PAYLOAD_TOO_LARGE) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.PAYLOAD_TOO_LARGE),
      HttpResponseCode.PAYLOAD_TOO_LARGE,
    )
  }
}

/**
 * 414 URI Too Long Exception
 */
export class URITooLongException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.URI_TOO_LONG) {
    super(HttpException.createBody(message, error, HttpResponseCode.URI_TOO_LONG), HttpResponseCode.URI_TOO_LONG)
  }
}

/**
 * 415 Unsupported Media Type Exception
 */
export class UnsupportedMediaTypeException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.UNSUPPORTED_MEDIA_TYPE) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.UNSUPPORTED_MEDIA_TYPE),
      HttpResponseCode.UNSUPPORTED_MEDIA_TYPE,
    )
  }
}

/**
 * 416 Range Not Satisfiable Exception
 */
export class RangeNotSatisfiableException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.RANGE_NOT_SATISFIABLE) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.RANGE_NOT_SATISFIABLE),
      HttpResponseCode.RANGE_NOT_SATISFIABLE,
    )
  }
}

/**
 * 417 Expectation Failed Exception
 */
export class ExpectationFailedException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.EXPECTATION_FAILED) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.EXPECTATION_FAILED),
      HttpResponseCode.EXPECTATION_FAILED,
    )
  }
}

/**
 * 418 I'm a teapot Exception
 */
export class ImateapotException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.I_AM_A_TEAPOT) {
    super(HttpException.createBody(message, error, HttpResponseCode.I_AM_A_TEAPOT), HttpResponseCode.I_AM_A_TEAPOT)
  }
}

/**
 * 422 Unprocessable Entity Exception
 */
export class UnprocessableEntityException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.UNPROCESSABLE_ENTITY) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.UNPROCESSABLE_ENTITY),
      HttpResponseCode.UNPROCESSABLE_ENTITY,
    )
  }
}

/**
 * 425 Too Early Exception
 */
export class TooEarlyException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.TOO_EARLY) {
    super(HttpException.createBody(message, error, HttpResponseCode.TOO_EARLY), HttpResponseCode.TOO_EARLY)
  }
}

/**
 * 426 Upgrade Required Exception
 */
export class UpgradeRequiredException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.UPGRADE_REQUIRED) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.UPGRADE_REQUIRED),
      HttpResponseCode.UPGRADE_REQUIRED,
    )
  }
}

/**
 * 428 Precondition Required Exception
 */
export class PreconditionRequiredException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.PRECONDITION_REQUIRED) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.PRECONDITION_REQUIRED),
      HttpResponseCode.PRECONDITION_REQUIRED,
    )
  }
}

/**
 * 429 Too Many Requests Exception
 */
export class TooManyRequestsException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.TOO_MANY_REQUESTS) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.TOO_MANY_REQUESTS),
      HttpResponseCode.TOO_MANY_REQUESTS,
    )
  }
}

/**
 * 431 Request Header Fields Too Large Exception
 */
export class RequestHeaderFieldsTooLargeException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.REQUEST_HEADER_FIELDS_TOO_LARGE) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE),
      HttpResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE,
    )
  }
}

/**
 * 451 Unavailable For Legal Reasons Exception
 */
export class UnavailableForLegalReasonsException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.UNAVAILABLE_FOR_LEGAL_REASONS) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS),
      HttpResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS,
    )
  }
}

/**
 * 500 Internal Server Error Exception
 */
export class InternalServerErrorException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.INTERNAL_SERVER_ERROR) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.INTERNAL_SERVER_ERROR),
      HttpResponseCode.INTERNAL_SERVER_ERROR,
    )
  }
}

/**
 * 501 Not Implemented Exception
 */
export class NotImplementedException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.NOT_IMPLEMENTED) {
    super(HttpException.createBody(message, error, HttpResponseCode.NOT_IMPLEMENTED), HttpResponseCode.NOT_IMPLEMENTED)
  }
}

/**
 * 502 Bad Gateway Exception
 */
export class BadGatewayException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.BAD_GATEWAY) {
    super(HttpException.createBody(message, error, HttpResponseCode.BAD_GATEWAY), HttpResponseCode.BAD_GATEWAY)
  }
}

/**
 * 503 Service Unavailable Exception
 */
export class ServiceUnavailableException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.SERVICE_UNAVAILABLE) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.SERVICE_UNAVAILABLE),
      HttpResponseCode.SERVICE_UNAVAILABLE,
    )
  }
}

/**
 * 504 Gateway Timeout Exception
 */
export class GatewayTimeoutException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.GATEWAY_TIMEOUT) {
    super(HttpException.createBody(message, error, HttpResponseCode.GATEWAY_TIMEOUT), HttpResponseCode.GATEWAY_TIMEOUT)
  }
}

/**
 * 505 HTTP Version Not Supported Exception
 */
export class HTTPVersionNotSupportedException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.HTTP_VERSION_NOT_SUPPORTED) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.HTTP_VERSION_NOT_SUPPORTED),
      HttpResponseCode.HTTP_VERSION_NOT_SUPPORTED,
    )
  }
}

/**
 * 506 Variant Also Negotiates Exception
 */
export class VariantAlsoNegotiatesException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.VARIANT_ALSO_NEGOTIATES) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.VARIANT_ALSO_NEGOTIATES),
      HttpResponseCode.VARIANT_ALSO_NEGOTIATES,
    )
  }
}

/**
 * 507 Insufficient Storage Exception
 */
export class InsufficientStorageException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.INSUFFICIENT_STORAGE) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.INSUFFICIENT_STORAGE),
      HttpResponseCode.INSUFFICIENT_STORAGE,
    )
  }
}

/**
 * 508 Loop Detected Exception
 */
export class LoopDetectedException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.LOOP_DETECTED) {
    super(HttpException.createBody(message, error, HttpResponseCode.LOOP_DETECTED), HttpResponseCode.LOOP_DETECTED)
  }
}

/**
 * 511 Network Authentication Required Exception
 */
export class NetworkAuthenticationRequiredException extends HttpException {
  constructor(message: string | object, error: string = HttpResponseMessage.NETWORK_AUTHENTICATION_REQUIRED) {
    super(
      HttpException.createBody(message, error, HttpResponseCode.NETWORK_AUTHENTICATION_REQUIRED),
      HttpResponseCode.NETWORK_AUTHENTICATION_REQUIRED,
    )
  }
}
