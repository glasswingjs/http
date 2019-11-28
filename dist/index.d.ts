/// <reference types="node" />

import { IncomingMessage, ServerResponse } from 'http';
import { Http2ServerRequest, Http2ServerResponse } from 'http2';

export interface HttpExceptionBody {
	message?: object | string;
	error?: string;
	code?: number;
}
export declare type Request = IncomingMessage | Http2ServerRequest;
export declare type Response = ServerResponse | Http2ServerResponse;
export declare type RequestHandler = (req: Request, res: Response, params: any) => void;
export declare type RequestBodyDecoder = (val: string) => any;
export declare type ResponseBodyEncoder = (val: any, ...args: any[]) => any;
/**
 * List of HTTP headers, as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 */
export declare enum RequestHeader {
	ACCEPT = "Accept",
	ACCEPT_CH = "Accept-CH",
	ACCEPT_CH_LIFETIME = "Accept-CH-Lifetime",
	ACCEPT_CHARSET = "Accept-Charset",
	ACCEPT_ENCODING = "Accept-Encoding",
	ACCEPT_LANGUAGE = "Accept-Language",
	ACCEPT_PATCH = "Accept-Patch",
	ACCEPT_RANGES = "Accept-Ranges",
	ACCESS_CONTROL_ALLOW_CREDENTIALS = "Access-Control-Allow-Credentials",
	ACCESS_CONTROL_ALLOW_HEADERS = "Access-Control-Allow-Headers",
	ACCESS_CONTROL_ALLOW_METHODS = "Access-Control-Allow-Methods",
	ACCESS_CONTROL_ALLOW_ORIGIN = "Access-Control-Allow-Origin",
	ACCESS_CONTROL_EXPOSE_HEADERS = "Access-Control-Expose-Headers",
	ACCESS_CONTROL_MAX_AGE = "Access-Control-Max-Age",
	ACCESS_CONTROL_REQUEST_HEADERS = "Access-Control-Request-Headers",
	ACCESS_CONTROL_REQUEST_METHOD = "Access-Control-Request-Method",
	AGE = "Age",
	ALLOW = "Allow",
	ALT_SVC = "Alt-Svc",
	AUTHORIZATION = "Authorization",
	CACHE_CONTROL = "Cache-Control",
	CLEAR_SITE_DATA = "Clear-Site-Data",
	CONNECTION = "Connection",
	CONTENT_DISPOSITION = "Content-Disposition",
	CONTENT_ENCODING = "Content-Encoding",
	CONTENT_LANGUAGE = "Content-Language",
	CONTENT_LENGTH = "Content-Length",
	CONTENT_LOCATION = "Content-Location",
	CONTENT_RANGE = "Content-Range",
	CONTENT_SECURITY_POLICY = "Content-Security-Policy",
	CONTENT_SECURITY_POLICY_REPORT_ONLY = "Content-Security-Policy-Report-Only",
	CONTENT_TYPE = "Content-Type",
	COOKIE = "Cookie",
	COOKIE2 = "Cookie2",
	CROSS_ORIGIN_RESOURCE_POLICY = "Cross-Origin-Resource-Policy",
	DNT = "DNT",
	DPR = "DPR",
	DATE = "Date",
	DEVICE_MEMORY = "Device-Memory",
	DIGEST = "Digest",
	ETAG = "ETag",
	EARLY_DATA = "Early-Data",
	EXPECT = "Expect",
	EXPECT_CT = "Expect-CT",
	EXPIRES = "Expires",
	FEATURE_POLICY = "Feature-Policy",
	FORWARDED = "Forwarded",
	FROM = "From",
	HOST = "Host",
	IF_MATCH = "If-Match",
	IF_MODIFIED_SINCE = "If-Modified-Since",
	IF_NONE_MATCH = "If-None-Match",
	IF_RANGE = "If-Range",
	IF_UNMODIFIED_SINCE = "If-Unmodified-Since",
	INDEX = "Index",
	KEEP_ALIVE = "Keep-Alive",
	LARGE_ALLOCATION = "Large-Allocation",
	LAST_MODIFIED = "Last-Modified",
	LINK = "Link",
	LOCATION = "Location",
	ORIGIN = "Origin",
	PRAGMA = "Pragma",
	PROXY_AUTHENTICATE = "Proxy-Authenticate",
	PROXY_AUTHORIZATION = "Proxy-Authorization",
	PUBLIC_KEY_PINS = "Public-Key-Pins",
	PUBLIC_KEY_PINS_REPORT_ONLY = "Public-Key-Pins-Report-Only",
	RANGE = "Range",
	REFERER = "Referer",
	REFERRER_POLICY = "Referrer-Policy",
	RETRY_AFTER = "Retry-After",
	SAVE_DATA = "Save-Data",
	SEC_WEBSOCKET_ACCEPT = "Sec-WebSocket-Accept",
	SERVER = "Server",
	SERVER_TIMING = "Server-Timing",
	SET_COOKIE = "Set-Cookie",
	SET_COOKIE2 = "Set-Cookie2",
	SOURCEMAP = "SourceMap",
	STRICT_TRANSPORT_SECURITY = "Strict-Transport-Security",
	TE = "TE",
	TIMING_ALLOW_ORIGIN = "Timing-Allow-Origin",
	TK = "Tk",
	TRAILER = "Trailer",
	TRANSFER_ENCODING = "Transfer-Encoding",
	UPGRADE_INSECURE_REQUESTS = "Upgrade-Insecure-Requests",
	USER_AGENT = "User-Agent",
	VARY = "Vary",
	VIA = "Via",
	WWW_AUTHENTICATE = "WWW-Authenticate",
	WANT_DIGEST = "Want-Digest",
	WARNING = "Warning",
	X_CONTENT_TYPE_OPTIONS = "X-Content-Type-Options",
	X_DNS_PREFETCH_CONTROL = "X-DNS-Prefetch-Control",
	X_FORWARDED_FOR = "X-Forwarded-For",
	X_FORWARDED_HOST = "X-Forwarded-Host",
	X_FORWARDED_PROTO = "X-Forwarded-Proto",
	X_FRAME_OPTIONS = "X-Frame-Options",
	X_XSS_PROTECTION = "X-XSS-Protection"
}
/**
 * List of HTTP Resonse Codes as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * @link https://github.com/symfony/http-foundation/blob/master/Response.php
 */
export declare enum ResponseCode {
	CONTINUE = 100,
	SWITCHING_PROTOCOLS = 101,
	PROCESSING = 102,
	EARLY_HINTS = 103,
	OK = 200,
	CREATED = 201,
	ACCEPTED = 202,
	NON_AUTHORITATIVE_INFORMATION = 203,
	NO_CONTENT = 204,
	RESET_CONTENT = 205,
	PARTIAL_CONTENT = 206,
	MULTI_STATUS = 207,
	ALREADY_REPORTED = 208,
	IM_USED = 226,
	MULTIPLE_CHOICES = 300,
	MOVED_PERMANENTLY = 301,
	FOUND = 302,
	SEE_OTHER = 303,
	NOT_MODIFIED = 304,
	USE_PROXY = 305,
	RESERVED = 306,
	TEMPORARY_REDIRECT = 307,
	PERMANENTLY_REDIRECT = 308,
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
	I_AM_A_TEAPOT = 418,
	MISDIRECTED_REQUEST = 421,
	UNPROCESSABLE_ENTITY = 422,
	LOCKED = 423,
	FAILED_DEPENDENCY = 424,
	TOO_EARLY = 425,
	UPGRADE_REQUIRED = 426,
	PRECONDITION_REQUIRED = 428,
	TOO_MANY_REQUESTS = 429,
	REQUEST_HEADER_FIELDS_TOO_LARGE = 431,
	UNAVAILABLE_FOR_LEGAL_REASONS = 451,
	INTERNAL_SERVER_ERROR = 500,
	NOT_IMPLEMENTED = 501,
	BAD_GATEWAY = 502,
	SERVICE_UNAVAILABLE = 503,
	GATEWAY_TIMEOUT = 504,
	HTTP_VERSION_NOT_SUPPORTED = 505,
	VARIANT_ALSO_NEGOTIATES = 506,
	INSUFFICIENT_STORAGE = 507,
	LOOP_DETECTED = 508,
	NOT_EXTENDED = 510,
	NETWORK_AUTHENTICATION_REQUIRED = 511
}
/**
 * List of HTTP Resonse Messages as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
export declare enum ResponseMessage {
	CONTINUE = "100 Continue",
	SWITCHING_PROTOCOLS = "101 Switching Protocols",
	PROCESSING = "102 Processing",
	EARLY_HINTS = "103 Early Hints",
	OK = "200 OK",
	CREATED = "201 Created",
	ACCEPTED = "202 Accepted",
	NON_AUTHORITATIVE_INFORMATION = "203 Non-Authoritative Information",
	NO_CONTENT = "204 No Content",
	RESET_CONTENT = "205 Reset Content",
	PARTIAL_CONTENT = "206 Partial Content",
	MULTI_STATUS = "207 Multi-Status",
	IM_USED = "226 IM Used",
	ALREADY_REPORTED = "208 Already Reported",
	MULTIPLE_CHOICES = "300 Multiple Choices",
	MOVED_PERMANENTLY = "301 Moved Permanently",
	FOUND = "302 Found",
	SEE_OTHER = "303 See Other",
	NOT_MODIFIED = "304 Not Modified",
	USE_PROXY = "305 Use Proxy",
	RESERVED = "306 unused",
	TEMPORARY_REDIRECT = "307 Temporary Redirect",
	PERMANENT_REDIRECT = "308 Permanent Redirect",
	BAD_REQUEST = "400 Bad Request",
	UNAUTHORIZED = "401 Unauthorized",
	PAYMENT_REQUIRED = "402 Payment Required",
	FORBIDDEN = "403 Forbidden",
	NOT_FOUND = "404 Not Found",
	METHOD_NOT_ALLOWED = "405 Method Not Allowed",
	NOT_ACCEPTABLE = "406 Not Acceptable",
	PROXY_AUTHENTICATION_REQUIRED = "407 Proxy Authentication Required",
	REQUEST_TIMEOUT = "408 Request Timeout",
	CONFLICT = "409 Conflict",
	GONE = "410 Gone",
	LENGTH_REQUIRED = "411 Length Required",
	PRECONDITION_FAILED = "412 Precondition Failed",
	PAYLOAD_TOO_LARGE = "413 Payload Too Large",
	URI_TOO_LONG = "414 URI Too Long",
	UNSUPPORTED_MEDIA_TYPE = "415 Unsupported Media Type",
	RANGE_NOT_SATISFIABLE = "416 Range Not Satisfiable",
	EXPECTATION_FAILED = "417 Expectation Failed",
	I_AM_A_TEAPOT = "418 I'm a teapot",
	MISDIRECTED_REQUEST = "421 Misdirected Request",
	UNPROCESSABLE_ENTITY = "422 Unprocessable Entity",
	LOCKED = "423 Locked",
	FAILED_DEPENDENCY = "424 Failed Dependency",
	TOO_EARLY = "425 Too Early",
	UPGRADE_REQUIRED = "426 Upgrade Required",
	PRECONDITION_REQUIRED = "428 Precondition Required",
	TOO_MANY_REQUESTS = "429 Too Many Requests",
	REQUEST_HEADER_FIELDS_TOO_LARGE = "431 Request Header Fields Too Large",
	UNAVAILABLE_FOR_LEGAL_REASONS = "451 Unavailable For Legal Reasons",
	INTERNAL_SERVER_ERROR = "500 Internal Server Error",
	NOT_IMPLEMENTED = "501 Not Implemented",
	BAD_GATEWAY = "502 Bad Gateway",
	SERVICE_UNAVAILABLE = "503 Service Unavailable",
	GATEWAY_TIMEOUT = "504 Gateway Timeout",
	HTTP_VERSION_NOT_SUPPORTED = "505 HTTP Version Not Supported",
	VARIANT_ALSO_NEGOTIATES = "506 Variant Also Negotiates",
	INSUFFICIENT_STORAGE = "507 Insufficient Storage",
	LOOP_DETECTED = "508 Loop Detected",
	NOT_EXTENDED = "510 Not Extended",
	NETWORK_AUTHENTICATION_REQUIRED = "511 Network Authentication Required"
}
/**
 * List of Request Methods as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 */
export declare enum RequestMethod {
	ALL = "all",
	/**
	 * The CONNECT method establishes a tunnel to the server identified by the target  resource.
	 */
	CONNECT = "connect",
	/**
	 * The DELETE method deletes the specified resource.
	 */
	DELETE = "delete",
	/**
	 * The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
	 */
	GET = "get",
	/**
	 * The HEAD method asks for a response identical to that of a GET request, but without the response body.
	 */
	HEAD = "head",
	/**
	 * The OPTIONS method is used to describe the communication options for the target resource.
	 */
	OPTIONS = "options",
	/**
	 * The PATCH method is used to apply partial modifications to a resource.
	 */
	PATCH = "patch",
	/**
	 * The POST method is used to submit an entity to the specified resource, often causing a change in state or side
	 * effects on the server.
	 */
	POST = "post",
	/**
	 * The PUT method replaces all current representations of the target resource with the request payload.
	 */
	PUT = "put",
	/**
	 * The TRACE method performs a message loop-back test along the path to the target resource.
	 */
	TRACE = "trace"
}
/**
 * @link https://github.com/nestjs/nest/blob/master/packages/common/exceptions/http.exception.ts
 */
export declare class HttpException extends Error {
	protected readonly response: object | string;
	protected readonly code: number;
	/**
	 * Convert a HTTP Exception into a HTTP body to respond with.
	 * @param message
	 * @param error
	 * @param code
	 */
	static createBody(message: object | string, error?: string, code?: number): HttpExceptionBody;
	readonly message: any;
	constructor(response: object | string, code: number);
	/**
	 * Overwrite Error.toString()
	 */
	toString(): string;
}
/**
 * 401 Unauthorized Exception
 */
export declare class UnauthorizedException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 402 Payment Required Exception
 */
export declare class PaymentRequiredException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 403 Forbidden Exception
 */
export declare class ForbiddenException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 404 Not Found Exception
 */
export declare class NotFoundException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 405 Method Not Allowed Exception
 */
export declare class MethodNotAllowedException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 406 Not Acceptable Exception
 */
export declare class NotAcceptableException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 407 Proxy Authentication Required Exception
 */
export declare class ProxyAuthenticationRequiredException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 408 Request Timeout Exception
 */
export declare class RequestTimeoutException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 409 Conflict Exception
 */
export declare class ConflictException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 410 Gone Exception
 */
export declare class GoneException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 411 Length Required Exception
 */
export declare class LengthRequiredException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 412 Precondition Failed Exception
 */
export declare class PreconditionFailedException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 413 Payload Too Large Exception
 */
export declare class PayloadTooLargeException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 414 URI Too Long Exception
 */
export declare class URITooLongException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 415 Unsupported Media Type Exception
 */
export declare class UnsupportedMediaTypeException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 416 Range Not Satisfiable Exception
 */
export declare class RangeNotSatisfiableException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 417 Expectation Failed Exception
 */
export declare class ExpectationFailedException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 418 I'm a teapot Exception
 */
export declare class ImateapotException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 422 Unprocessable Entity Exception
 */
export declare class UnprocessableEntityException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 425 Too Early Exception
 */
export declare class TooEarlyException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 426 Upgrade Required Exception
 */
export declare class UpgradeRequiredException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 428 Precondition Required Exception
 */
export declare class PreconditionRequiredException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 429 Too Many Requests Exception
 */
export declare class TooManyRequestsException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 431 Request Header Fields Too Large Exception
 */
export declare class RequestHeaderFieldsTooLargeException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 451 Unavailable For Legal Reasons Exception
 */
export declare class UnavailableForLegalReasonsException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 500 Internal Server Error Exception
 */
export declare class InternalServerErrorException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 501 Not Implemented Exception
 */
export declare class NotImplementedException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 502 Bad Gateway Exception
 */
export declare class BadGatewayException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 503 Service Unavailable Exception
 */
export declare class ServiceUnavailableException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 504 Gateway Timeout Exception
 */
export declare class GatewayTimeoutException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 505 HTTP Version Not Supported Exception
 */
export declare class HTTPVersionNotSupportedException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 506 Variant Also Negotiates Exception
 */
export declare class VariantAlsoNegotiatesException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 507 Insufficient Storage Exception
 */
export declare class InsufficientStorageException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 508 Loop Detected Exception
 */
export declare class LoopDetectedException extends HttpException {
	constructor(message: string | object, error?: string);
}
/**
 * 511 Network Authentication Required Exception
 */
export declare class NetworkAuthenticationRequiredException extends HttpException {
	constructor(message: string | object, error?: string);
}

export {};
