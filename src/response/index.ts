export * from './http'
export * from './http2'

export type HttpResponseBodyEncoder = (val: any, ...args: any[]) => any

/**
 * List of HTTP Resonse Codes as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * @link https://github.com/symfony/http-foundation/blob/master/Response.php
 */
export enum HttpResponseCode {
  CONTINUE = 100,
  SWITCHING_PROTOCOLS = 101,
  PROCESSING = 102, // RFC2518
  EARLY_HINTS = 103, // RFC8297
  OK = 200,
  CREATED = 201,
  ACCEPTED = 202,
  NON_AUTHORITATIVE_INFORMATION = 203,
  NO_CONTENT = 204,
  RESET_CONTENT = 205,
  PARTIAL_CONTENT = 206,
  MULTI_STATUS = 207, // RFC4918
  ALREADY_REPORTED = 208, // RFC5842
  IM_USED = 226, // RFC3229
  MULTIPLE_CHOICES = 300,
  MOVED_PERMANENTLY = 301,
  FOUND = 302,
  SEE_OTHER = 303,
  NOT_MODIFIED = 304,
  USE_PROXY = 305,
  RESERVED = 306,
  TEMPORARY_REDIRECT = 307,
  PERMANENTLY_REDIRECT = 308, // RFC7238
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  PAYMENT_REQUIRED = 402,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  METHOD_NOT_ALLOWED = 405,
  NOT_ACCEPTABLE = 406,
  PROXY_AUTHENTICATION_REQUIRED = 407,
  REQUEST_TIMEOUT = 408,
  CONFLICT = 409,
  GONE = 410,
  LENGTH_REQUIRED = 411,
  PRECONDITION_FAILED = 412,
  PAYLOAD_TOO_LARGE = 413,
  URI_TOO_LONG = 414,
  UNSUPPORTED_MEDIA_TYPE = 415,
  RANGE_NOT_SATISFIABLE = 416,
  EXPECTATION_FAILED = 417,
  I_AM_A_TEAPOT = 418, // RFC2324
  MISDIRECTED_REQUEST = 421, // RFC7540
  UNPROCESSABLE_ENTITY = 422, // RFC4918
  LOCKED = 423, // RFC4918
  FAILED_DEPENDENCY = 424, // RFC4918
  TOO_EARLY = 425, // RFC-ietf-httpbis-replay-04
  UPGRADE_REQUIRED = 426, // RFC2817
  PRECONDITION_REQUIRED = 428, // RFC6585
  TOO_MANY_REQUESTS = 429, // RFC6585
  REQUEST_HEADER_FIELDS_TOO_LARGE = 431, // RFC6585
  UNAVAILABLE_FOR_LEGAL_REASONS = 451,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  BAD_GATEWAY = 502,
  SERVICE_UNAVAILABLE = 503,
  GATEWAY_TIMEOUT = 504,
  HTTP_VERSION_NOT_SUPPORTED = 505,
  VARIANT_ALSO_NEGOTIATES = 506, // RFC2295
  INSUFFICIENT_STORAGE = 507, // RFC4918
  LOOP_DETECTED = 508, // RFC5842
  NOT_EXTENDED = 510, // RFC2774
  NETWORK_AUTHENTICATION_REQUIRED = 511, // RFC6585
}

/**
 * List of HTTP Resonse Messages as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
export enum HttpResponseMessage {
  CONTINUE = '100 Continue',
  SWITCHING_PROTOCOLS = '101 Switching Protocols',
  PROCESSING = '102 Processing',
  EARLY_HINTS = '103 Early Hints',
  OK = '200 OK',
  CREATED = '201 Created',
  ACCEPTED = '202 Accepted',
  NON_AUTHORITATIVE_INFORMATION = '203 Non-Authoritative Information',
  NO_CONTENT = '204 No Content',
  RESET_CONTENT = '205 Reset Content',
  PARTIAL_CONTENT = '206 Partial Content',
  MULTI_STATUS = '207 Multi-Status',
  IM_USED = '226 IM Used',
  ALREADY_REPORTED = '208 Already Reported',
  MULTIPLE_CHOICES = '300 Multiple Choices',
  MOVED_PERMANENTLY = '301 Moved Permanently',
  FOUND = '302 Found',
  SEE_OTHER = '303 See Other',
  NOT_MODIFIED = '304 Not Modified',
  USE_PROXY = '305 Use Proxy',
  RESERVED = '306 unused',
  TEMPORARY_REDIRECT = '307 Temporary Redirect',
  PERMANENT_REDIRECT = '308 Permanent Redirect',
  BAD_REQUEST = '400 Bad Request',
  UNAUTHORIZED = '401 Unauthorized',
  PAYMENT_REQUIRED = '402 Payment Required',
  FORBIDDEN = '403 Forbidden',
  NOT_FOUND = '404 Not Found',
  METHOD_NOT_ALLOWED = '405 Method Not Allowed',
  NOT_ACCEPTABLE = '406 Not Acceptable',
  PROXY_AUTHENTICATION_REQUIRED = '407 Proxy Authentication Required',
  REQUEST_TIMEOUT = '408 Request Timeout',
  CONFLICT = '409 Conflict',
  GONE = '410 Gone',
  LENGTH_REQUIRED = '411 Length Required',
  PRECONDITION_FAILED = '412 Precondition Failed',
  PAYLOAD_TOO_LARGE = '413 Payload Too Large',
  URI_TOO_LONG = '414 URI Too Long',
  UNSUPPORTED_MEDIA_TYPE = '415 Unsupported Media Type',
  RANGE_NOT_SATISFIABLE = '416 Range Not Satisfiable',
  EXPECTATION_FAILED = '417 Expectation Failed',
  I_AM_A_TEAPOT = "418 I'm a teapot", // tslint:disable-line quotemark
  MISDIRECTED_REQUEST = '421 Misdirected Request',
  UNPROCESSABLE_ENTITY = '422 Unprocessable Entity',
  LOCKED = '423 Locked',
  FAILED_DEPENDENCY = '424 Failed Dependency',
  TOO_EARLY = '425 Too Early',
  UPGRADE_REQUIRED = '426 Upgrade Required',
  PRECONDITION_REQUIRED = '428 Precondition Required',
  TOO_MANY_REQUESTS = '429 Too Many Requests',
  REQUEST_HEADER_FIELDS_TOO_LARGE = '431 Request Header Fields Too Large',
  UNAVAILABLE_FOR_LEGAL_REASONS = '451 Unavailable For Legal Reasons',
  INTERNAL_SERVER_ERROR = '500 Internal Server Error',
  NOT_IMPLEMENTED = '501 Not Implemented',
  BAD_GATEWAY = '502 Bad Gateway',
  SERVICE_UNAVAILABLE = '503 Service Unavailable',
  GATEWAY_TIMEOUT = '504 Gateway Timeout',
  HTTP_VERSION_NOT_SUPPORTED = '505 HTTP Version Not Supported',
  VARIANT_ALSO_NEGOTIATES = '506 Variant Also Negotiates',
  INSUFFICIENT_STORAGE = '507 Insufficient Storage',
  LOOP_DETECTED = '508 Loop Detected',
  NOT_EXTENDED = '510 Not Extended',
  NETWORK_AUTHENTICATION_REQUIRED = '511 Network Authentication Required',
}
