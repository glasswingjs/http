(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory((global.gw = global.gw || {}, global.gw.http = {})));
}(this, (function (exports) { 'use strict';

  /**
   * List of HTTP headers, as described on MDN Documentation
   * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
   */
  (function (RequestHeader) {
      RequestHeader["ACCEPT"] = "Accept";
      RequestHeader["ACCEPT_CH"] = "Accept-CH";
      RequestHeader["ACCEPT_CH_LIFETIME"] = "Accept-CH-Lifetime";
      RequestHeader["ACCEPT_CHARSET"] = "Accept-Charset";
      RequestHeader["ACCEPT_ENCODING"] = "Accept-Encoding";
      RequestHeader["ACCEPT_LANGUAGE"] = "Accept-Language";
      RequestHeader["ACCEPT_PATCH"] = "Accept-Patch";
      RequestHeader["ACCEPT_RANGES"] = "Accept-Ranges";
      RequestHeader["ACCESS_CONTROL_ALLOW_CREDENTIALS"] = "Access-Control-Allow-Credentials";
      RequestHeader["ACCESS_CONTROL_ALLOW_HEADERS"] = "Access-Control-Allow-Headers";
      RequestHeader["ACCESS_CONTROL_ALLOW_METHODS"] = "Access-Control-Allow-Methods";
      RequestHeader["ACCESS_CONTROL_ALLOW_ORIGIN"] = "Access-Control-Allow-Origin";
      RequestHeader["ACCESS_CONTROL_EXPOSE_HEADERS"] = "Access-Control-Expose-Headers";
      RequestHeader["ACCESS_CONTROL_MAX_AGE"] = "Access-Control-Max-Age";
      RequestHeader["ACCESS_CONTROL_REQUEST_HEADERS"] = "Access-Control-Request-Headers";
      RequestHeader["ACCESS_CONTROL_REQUEST_METHOD"] = "Access-Control-Request-Method";
      RequestHeader["AGE"] = "Age";
      RequestHeader["ALLOW"] = "Allow";
      RequestHeader["ALT_SVC"] = "Alt-Svc";
      RequestHeader["AUTHORIZATION"] = "Authorization";
      RequestHeader["CACHE_CONTROL"] = "Cache-Control";
      RequestHeader["CLEAR_SITE_DATA"] = "Clear-Site-Data";
      RequestHeader["CONNECTION"] = "Connection";
      RequestHeader["CONTENT_DISPOSITION"] = "Content-Disposition";
      RequestHeader["CONTENT_ENCODING"] = "Content-Encoding";
      RequestHeader["CONTENT_LANGUAGE"] = "Content-Language";
      RequestHeader["CONTENT_LENGTH"] = "Content-Length";
      RequestHeader["CONTENT_LOCATION"] = "Content-Location";
      RequestHeader["CONTENT_RANGE"] = "Content-Range";
      RequestHeader["CONTENT_SECURITY_POLICY"] = "Content-Security-Policy";
      RequestHeader["CONTENT_SECURITY_POLICY_REPORT_ONLY"] = "Content-Security-Policy-Report-Only";
      RequestHeader["CONTENT_TYPE"] = "Content-Type";
      RequestHeader["COOKIE"] = "Cookie";
      RequestHeader["COOKIE2"] = "Cookie2";
      RequestHeader["CROSS_ORIGIN_RESOURCE_POLICY"] = "Cross-Origin-Resource-Policy";
      RequestHeader["DNT"] = "DNT";
      RequestHeader["DPR"] = "DPR";
      RequestHeader["DATE"] = "Date";
      RequestHeader["DEVICE_MEMORY"] = "Device-Memory";
      RequestHeader["DIGEST"] = "Digest";
      RequestHeader["ETAG"] = "ETag";
      RequestHeader["EARLY_DATA"] = "Early-Data";
      RequestHeader["EXPECT"] = "Expect";
      RequestHeader["EXPECT_CT"] = "Expect-CT";
      RequestHeader["EXPIRES"] = "Expires";
      RequestHeader["FEATURE_POLICY"] = "Feature-Policy";
      RequestHeader["FORWARDED"] = "Forwarded";
      RequestHeader["FROM"] = "From";
      RequestHeader["HOST"] = "Host";
      RequestHeader["IF_MATCH"] = "If-Match";
      RequestHeader["IF_MODIFIED_SINCE"] = "If-Modified-Since";
      RequestHeader["IF_NONE_MATCH"] = "If-None-Match";
      RequestHeader["IF_RANGE"] = "If-Range";
      RequestHeader["IF_UNMODIFIED_SINCE"] = "If-Unmodified-Since";
      RequestHeader["INDEX"] = "Index";
      RequestHeader["KEEP_ALIVE"] = "Keep-Alive";
      RequestHeader["LARGE_ALLOCATION"] = "Large-Allocation";
      RequestHeader["LAST_MODIFIED"] = "Last-Modified";
      RequestHeader["LINK"] = "Link";
      RequestHeader["LOCATION"] = "Location";
      RequestHeader["ORIGIN"] = "Origin";
      RequestHeader["PRAGMA"] = "Pragma";
      RequestHeader["PROXY_AUTHENTICATE"] = "Proxy-Authenticate";
      RequestHeader["PROXY_AUTHORIZATION"] = "Proxy-Authorization";
      RequestHeader["PUBLIC_KEY_PINS"] = "Public-Key-Pins";
      RequestHeader["PUBLIC_KEY_PINS_REPORT_ONLY"] = "Public-Key-Pins-Report-Only";
      RequestHeader["RANGE"] = "Range";
      RequestHeader["REFERER"] = "Referer";
      RequestHeader["REFERRER_POLICY"] = "Referrer-Policy";
      RequestHeader["RETRY_AFTER"] = "Retry-After";
      RequestHeader["SAVE_DATA"] = "Save-Data";
      RequestHeader["SEC_WEBSOCKET_ACCEPT"] = "Sec-WebSocket-Accept";
      RequestHeader["SERVER"] = "Server";
      RequestHeader["SERVER_TIMING"] = "Server-Timing";
      RequestHeader["SET_COOKIE"] = "Set-Cookie";
      RequestHeader["SET_COOKIE2"] = "Set-Cookie2";
      RequestHeader["SOURCEMAP"] = "SourceMap";
      RequestHeader["STRICT_TRANSPORT_SECURITY"] = "Strict-Transport-Security";
      RequestHeader["TE"] = "TE";
      RequestHeader["TIMING_ALLOW_ORIGIN"] = "Timing-Allow-Origin";
      RequestHeader["TK"] = "Tk";
      RequestHeader["TRAILER"] = "Trailer";
      RequestHeader["TRANSFER_ENCODING"] = "Transfer-Encoding";
      RequestHeader["UPGRADE_INSECURE_REQUESTS"] = "Upgrade-Insecure-Requests";
      RequestHeader["USER_AGENT"] = "User-Agent";
      RequestHeader["VARY"] = "Vary";
      RequestHeader["VIA"] = "Via";
      RequestHeader["WWW_AUTHENTICATE"] = "WWW-Authenticate";
      RequestHeader["WANT_DIGEST"] = "Want-Digest";
      RequestHeader["WARNING"] = "Warning";
      RequestHeader["X_CONTENT_TYPE_OPTIONS"] = "X-Content-Type-Options";
      RequestHeader["X_DNS_PREFETCH_CONTROL"] = "X-DNS-Prefetch-Control";
      RequestHeader["X_FORWARDED_FOR"] = "X-Forwarded-For";
      RequestHeader["X_FORWARDED_HOST"] = "X-Forwarded-Host";
      RequestHeader["X_FORWARDED_PROTO"] = "X-Forwarded-Proto";
      RequestHeader["X_FRAME_OPTIONS"] = "X-Frame-Options";
      RequestHeader["X_XSS_PROTECTION"] = "X-XSS-Protection";
  })(exports.RequestHeader || (exports.RequestHeader = {}));
  (function (ResponseCode) {
      ResponseCode[ResponseCode["CONTINUE"] = 100] = "CONTINUE";
      ResponseCode[ResponseCode["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
      ResponseCode[ResponseCode["PROCESSING"] = 102] = "PROCESSING";
      ResponseCode[ResponseCode["EARLY_HINTS"] = 103] = "EARLY_HINTS";
      ResponseCode[ResponseCode["OK"] = 200] = "OK";
      ResponseCode[ResponseCode["CREATED"] = 201] = "CREATED";
      ResponseCode[ResponseCode["ACCEPTED"] = 202] = "ACCEPTED";
      ResponseCode[ResponseCode["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
      ResponseCode[ResponseCode["NO_CONTENT"] = 204] = "NO_CONTENT";
      ResponseCode[ResponseCode["RESET_CONTENT"] = 205] = "RESET_CONTENT";
      ResponseCode[ResponseCode["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
      ResponseCode[ResponseCode["MULTI_STATUS"] = 207] = "MULTI_STATUS";
      ResponseCode[ResponseCode["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
      ResponseCode[ResponseCode["IM_USED"] = 226] = "IM_USED";
      ResponseCode[ResponseCode["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
      ResponseCode[ResponseCode["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
      ResponseCode[ResponseCode["FOUND"] = 302] = "FOUND";
      ResponseCode[ResponseCode["SEE_OTHER"] = 303] = "SEE_OTHER";
      ResponseCode[ResponseCode["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
      ResponseCode[ResponseCode["USE_PROXY"] = 305] = "USE_PROXY";
      ResponseCode[ResponseCode["RESERVED"] = 306] = "RESERVED";
      ResponseCode[ResponseCode["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
      ResponseCode[ResponseCode["PERMANENTLY_REDIRECT"] = 308] = "PERMANENTLY_REDIRECT";
      ResponseCode[ResponseCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
      ResponseCode[ResponseCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
      ResponseCode[ResponseCode["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
      ResponseCode[ResponseCode["FORBIDDEN"] = 403] = "FORBIDDEN";
      ResponseCode[ResponseCode["NOT_FOUND"] = 404] = "NOT_FOUND";
      ResponseCode[ResponseCode["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
      ResponseCode[ResponseCode["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
      ResponseCode[ResponseCode["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
      ResponseCode[ResponseCode["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
      ResponseCode[ResponseCode["CONFLICT"] = 409] = "CONFLICT";
      ResponseCode[ResponseCode["GONE"] = 410] = "GONE";
      ResponseCode[ResponseCode["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
      ResponseCode[ResponseCode["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
      ResponseCode[ResponseCode["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
      ResponseCode[ResponseCode["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
      ResponseCode[ResponseCode["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
      ResponseCode[ResponseCode["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
      ResponseCode[ResponseCode["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
      ResponseCode[ResponseCode["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
      ResponseCode[ResponseCode["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
      ResponseCode[ResponseCode["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
      ResponseCode[ResponseCode["LOCKED"] = 423] = "LOCKED";
      ResponseCode[ResponseCode["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
      ResponseCode[ResponseCode["TOO_EARLY"] = 425] = "TOO_EARLY";
      ResponseCode[ResponseCode["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
      ResponseCode[ResponseCode["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
      ResponseCode[ResponseCode["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
      ResponseCode[ResponseCode["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
      ResponseCode[ResponseCode["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
      ResponseCode[ResponseCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
      ResponseCode[ResponseCode["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
      ResponseCode[ResponseCode["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
      ResponseCode[ResponseCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
      ResponseCode[ResponseCode["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
      ResponseCode[ResponseCode["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
      ResponseCode[ResponseCode["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
      ResponseCode[ResponseCode["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
      ResponseCode[ResponseCode["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
      ResponseCode[ResponseCode["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
      ResponseCode[ResponseCode["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
  })(exports.ResponseCode || (exports.ResponseCode = {}));
  (function (ResponseMessage) {
      ResponseMessage["CONTINUE"] = "100 Continue";
      ResponseMessage["SWITCHING_PROTOCOLS"] = "101 Switching Protocols";
      ResponseMessage["PROCESSING"] = "102 Processing";
      ResponseMessage["EARLY_HINTS"] = "103 Early Hints";
      ResponseMessage["OK"] = "200 OK";
      ResponseMessage["CREATED"] = "201 Created";
      ResponseMessage["ACCEPTED"] = "202 Accepted";
      ResponseMessage["NON_AUTHORITATIVE_INFORMATION"] = "203 Non-Authoritative Information";
      ResponseMessage["NO_CONTENT"] = "204 No Content";
      ResponseMessage["RESET_CONTENT"] = "205 Reset Content";
      ResponseMessage["PARTIAL_CONTENT"] = "206 Partial Content";
      ResponseMessage["MULTI_STATUS"] = "207 Multi-Status";
      ResponseMessage["IM_USED"] = "226 IM Used";
      ResponseMessage["ALREADY_REPORTED"] = "208 Already Reported";
      ResponseMessage["MULTIPLE_CHOICES"] = "300 Multiple Choices";
      ResponseMessage["MOVED_PERMANENTLY"] = "301 Moved Permanently";
      ResponseMessage["FOUND"] = "302 Found";
      ResponseMessage["SEE_OTHER"] = "303 See Other";
      ResponseMessage["NOT_MODIFIED"] = "304 Not Modified";
      ResponseMessage["USE_PROXY"] = "305 Use Proxy";
      ResponseMessage["RESERVED"] = "306 unused";
      ResponseMessage["TEMPORARY_REDIRECT"] = "307 Temporary Redirect";
      ResponseMessage["PERMANENT_REDIRECT"] = "308 Permanent Redirect";
      ResponseMessage["BAD_REQUEST"] = "400 Bad Request";
      ResponseMessage["UNAUTHORIZED"] = "401 Unauthorized";
      ResponseMessage["PAYMENT_REQUIRED"] = "402 Payment Required";
      ResponseMessage["FORBIDDEN"] = "403 Forbidden";
      ResponseMessage["NOT_FOUND"] = "404 Not Found";
      ResponseMessage["METHOD_NOT_ALLOWED"] = "405 Method Not Allowed";
      ResponseMessage["NOT_ACCEPTABLE"] = "406 Not Acceptable";
      ResponseMessage["PROXY_AUTHENTICATION_REQUIRED"] = "407 Proxy Authentication Required";
      ResponseMessage["REQUEST_TIMEOUT"] = "408 Request Timeout";
      ResponseMessage["CONFLICT"] = "409 Conflict";
      ResponseMessage["GONE"] = "410 Gone";
      ResponseMessage["LENGTH_REQUIRED"] = "411 Length Required";
      ResponseMessage["PRECONDITION_FAILED"] = "412 Precondition Failed";
      ResponseMessage["PAYLOAD_TOO_LARGE"] = "413 Payload Too Large";
      ResponseMessage["URI_TOO_LONG"] = "414 URI Too Long";
      ResponseMessage["UNSUPPORTED_MEDIA_TYPE"] = "415 Unsupported Media Type";
      ResponseMessage["RANGE_NOT_SATISFIABLE"] = "416 Range Not Satisfiable";
      ResponseMessage["EXPECTATION_FAILED"] = "417 Expectation Failed";
      ResponseMessage["I_AM_A_TEAPOT"] = "418 I'm a teapot";
      ResponseMessage["MISDIRECTED_REQUEST"] = "421 Misdirected Request";
      ResponseMessage["UNPROCESSABLE_ENTITY"] = "422 Unprocessable Entity";
      ResponseMessage["LOCKED"] = "423 Locked";
      ResponseMessage["FAILED_DEPENDENCY"] = "424 Failed Dependency";
      ResponseMessage["TOO_EARLY"] = "425 Too Early";
      ResponseMessage["UPGRADE_REQUIRED"] = "426 Upgrade Required";
      ResponseMessage["PRECONDITION_REQUIRED"] = "428 Precondition Required";
      ResponseMessage["TOO_MANY_REQUESTS"] = "429 Too Many Requests";
      ResponseMessage["REQUEST_HEADER_FIELDS_TOO_LARGE"] = "431 Request Header Fields Too Large";
      ResponseMessage["UNAVAILABLE_FOR_LEGAL_REASONS"] = "451 Unavailable For Legal Reasons";
      ResponseMessage["INTERNAL_SERVER_ERROR"] = "500 Internal Server Error";
      ResponseMessage["NOT_IMPLEMENTED"] = "501 Not Implemented";
      ResponseMessage["BAD_GATEWAY"] = "502 Bad Gateway";
      ResponseMessage["SERVICE_UNAVAILABLE"] = "503 Service Unavailable";
      ResponseMessage["GATEWAY_TIMEOUT"] = "504 Gateway Timeout";
      ResponseMessage["HTTP_VERSION_NOT_SUPPORTED"] = "505 HTTP Version Not Supported";
      ResponseMessage["VARIANT_ALSO_NEGOTIATES"] = "506 Variant Also Negotiates";
      ResponseMessage["INSUFFICIENT_STORAGE"] = "507 Insufficient Storage";
      ResponseMessage["LOOP_DETECTED"] = "508 Loop Detected";
      ResponseMessage["NOT_EXTENDED"] = "510 Not Extended";
      ResponseMessage["NETWORK_AUTHENTICATION_REQUIRED"] = "511 Network Authentication Required";
  })(exports.ResponseMessage || (exports.ResponseMessage = {}));
  (function (RequestMethod) {
      RequestMethod["ALL"] = "all";
      /**
       * The CONNECT method establishes a tunnel to the server identified by the target  resource.
       */
      RequestMethod["CONNECT"] = "connect";
      /**
       * The DELETE method deletes the specified resource.
       */
      RequestMethod["DELETE"] = "delete";
      /**
       * The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
       */
      RequestMethod["GET"] = "get";
      /**
       * The HEAD method asks for a response identical to that of a GET request, but without the response body.
       */
      RequestMethod["HEAD"] = "head";
      /**
       * The OPTIONS method is used to describe the communication options for the target resource.
       */
      RequestMethod["OPTIONS"] = "options";
      /**
       * The PATCH method is used to apply partial modifications to a resource.
       */
      RequestMethod["PATCH"] = "patch";
      /**
       * The POST method is used to submit an entity to the specified resource, often causing a change in state or side
       * effects on the server.
       */
      RequestMethod["POST"] = "post";
      /**
       * @link https://github.com/symfony/http-foundation/blob/master/Request.php
       */
      RequestMethod["PURGE"] = "purge";
      /**
       * The PUT method replaces all current representations of the target resource with the request payload.
       */
      RequestMethod["PUT"] = "put";
      /**
       * The TRACE method performs a message loop-back test along the path to the target resource.
       */
      RequestMethod["TRACE"] = "trace";
  })(exports.RequestMethod || (exports.RequestMethod = {}));
  /**
   * Full list of Request Methods
   */
  const RequestMethods = [
      exports.RequestMethod.DELETE,
      exports.RequestMethod.GET,
      exports.RequestMethod.HEAD,
      exports.RequestMethod.OPTIONS,
      exports.RequestMethod.PATCH,
      exports.RequestMethod.POST,
      exports.RequestMethod.PURGE,
      exports.RequestMethod.PUT,
      exports.RequestMethod.TRACE,
  ];

  /**
   * @link https://github.com/nestjs/nest/blob/master/packages/common/exceptions/http.exception.ts
   */
  class HttpException extends Error {
      constructor(response, code) {
          super();
          this.response = response;
          this.code = code;
          this.message = response;
          this.code = code;
      }
      /**
       * Convert a HTTP Exception into a HTTP body to respond with.
       * @param message
       * @param error
       * @param code
       */
      static createBody(message, error, code) {
          if (typeof message !== 'string' && !Array.isArray(message)) {
              return message;
          }
          const theMessage = message
              ? {
                  code,
                  error,
                  message,
              }
              : {
                  code,
                  error,
              };
          return theMessage;
      }
      /**
       * Overwrite Error.toString()
       */
      toString() {
          return `Error(${this.code}): ${typeof this.message === 'string' ? this.message : JSON.stringify(this.message)}`;
      }
  }
  /**
   * 401 Unauthorized Exception
   */
  class UnauthorizedException extends HttpException {
      constructor(message, error = exports.ResponseMessage.UNAUTHORIZED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.UNAUTHORIZED), exports.ResponseCode.UNAUTHORIZED);
      }
  }
  /**
   * 402 Payment Required Exception
   */
  class PaymentRequiredException extends HttpException {
      constructor(message, error = exports.ResponseMessage.PAYMENT_REQUIRED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.PAYMENT_REQUIRED), exports.ResponseCode.PAYMENT_REQUIRED);
      }
  }
  /**
   * 403 Forbidden Exception
   */
  class ForbiddenException extends HttpException {
      constructor(message, error = exports.ResponseMessage.FORBIDDEN) {
          super(HttpException.createBody(message, error, exports.ResponseCode.FORBIDDEN), exports.ResponseCode.FORBIDDEN);
      }
  }
  /**
   * 404 Not Found Exception
   */
  class NotFoundException extends HttpException {
      constructor(message, error = exports.ResponseMessage.NOT_FOUND) {
          super(HttpException.createBody(message, error, exports.ResponseCode.NOT_FOUND), exports.ResponseCode.NOT_FOUND);
      }
  }
  /**
   * 405 Method Not Allowed Exception
   */
  class MethodNotAllowedException extends HttpException {
      constructor(message, error = exports.ResponseMessage.METHOD_NOT_ALLOWED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.METHOD_NOT_ALLOWED), exports.ResponseCode.METHOD_NOT_ALLOWED);
      }
  }
  /**
   * 406 Not Acceptable Exception
   */
  class NotAcceptableException extends HttpException {
      constructor(message, error = exports.ResponseMessage.NOT_ACCEPTABLE) {
          super(HttpException.createBody(message, error, exports.ResponseCode.NOT_ACCEPTABLE), exports.ResponseCode.NOT_ACCEPTABLE);
      }
  }
  /**
   * 407 Proxy Authentication Required Exception
   */
  class ProxyAuthenticationRequiredException extends HttpException {
      constructor(message, error = exports.ResponseMessage.PROXY_AUTHENTICATION_REQUIRED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.PROXY_AUTHENTICATION_REQUIRED), exports.ResponseCode.PROXY_AUTHENTICATION_REQUIRED);
      }
  }
  /**
   * 408 Request Timeout Exception
   */
  class RequestTimeoutException extends HttpException {
      constructor(message, error = exports.ResponseMessage.REQUEST_TIMEOUT) {
          super(HttpException.createBody(message, error, exports.ResponseCode.REQUEST_TIMEOUT), exports.ResponseCode.REQUEST_TIMEOUT);
      }
  }
  /**
   * 409 Conflict Exception
   */
  class ConflictException extends HttpException {
      constructor(message, error = exports.ResponseMessage.CONFLICT) {
          super(HttpException.createBody(message, error, exports.ResponseCode.CONFLICT), exports.ResponseCode.CONFLICT);
      }
  }
  /**
   * 410 Gone Exception
   */
  class GoneException extends HttpException {
      constructor(message, error = exports.ResponseMessage.GONE) {
          super(HttpException.createBody(message, error, exports.ResponseCode.GONE), exports.ResponseCode.GONE);
      }
  }
  /**
   * 411 Length Required Exception
   */
  class LengthRequiredException extends HttpException {
      constructor(message, error = exports.ResponseMessage.LENGTH_REQUIRED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.LENGTH_REQUIRED), exports.ResponseCode.LENGTH_REQUIRED);
      }
  }
  /**
   * 412 Precondition Failed Exception
   */
  class PreconditionFailedException extends HttpException {
      constructor(message, error = exports.ResponseMessage.PRECONDITION_FAILED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.PRECONDITION_FAILED), exports.ResponseCode.PRECONDITION_FAILED);
      }
  }
  /**
   * 413 Payload Too Large Exception
   */
  class PayloadTooLargeException extends HttpException {
      constructor(message, error = exports.ResponseMessage.PAYLOAD_TOO_LARGE) {
          super(HttpException.createBody(message, error, exports.ResponseCode.PAYLOAD_TOO_LARGE), exports.ResponseCode.PAYLOAD_TOO_LARGE);
      }
  }
  /**
   * 414 URI Too Long Exception
   */
  class URITooLongException extends HttpException {
      constructor(message, error = exports.ResponseMessage.URI_TOO_LONG) {
          super(HttpException.createBody(message, error, exports.ResponseCode.URI_TOO_LONG), exports.ResponseCode.URI_TOO_LONG);
      }
  }
  /**
   * 415 Unsupported Media Type Exception
   */
  class UnsupportedMediaTypeException extends HttpException {
      constructor(message, error = exports.ResponseMessage.UNSUPPORTED_MEDIA_TYPE) {
          super(HttpException.createBody(message, error, exports.ResponseCode.UNSUPPORTED_MEDIA_TYPE), exports.ResponseCode.UNSUPPORTED_MEDIA_TYPE);
      }
  }
  /**
   * 416 Range Not Satisfiable Exception
   */
  class RangeNotSatisfiableException extends HttpException {
      constructor(message, error = exports.ResponseMessage.RANGE_NOT_SATISFIABLE) {
          super(HttpException.createBody(message, error, exports.ResponseCode.RANGE_NOT_SATISFIABLE), exports.ResponseCode.RANGE_NOT_SATISFIABLE);
      }
  }
  /**
   * 417 Expectation Failed Exception
   */
  class ExpectationFailedException extends HttpException {
      constructor(message, error = exports.ResponseMessage.EXPECTATION_FAILED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.EXPECTATION_FAILED), exports.ResponseCode.EXPECTATION_FAILED);
      }
  }
  /**
   * 418 I'm a teapot Exception
   */
  class ImateapotException extends HttpException {
      constructor(message, error = exports.ResponseMessage.I_AM_A_TEAPOT) {
          super(HttpException.createBody(message, error, exports.ResponseCode.I_AM_A_TEAPOT), exports.ResponseCode.I_AM_A_TEAPOT);
      }
  }
  /**
   * 422 Unprocessable Entity Exception
   */
  class UnprocessableEntityException extends HttpException {
      constructor(message, error = exports.ResponseMessage.UNPROCESSABLE_ENTITY) {
          super(HttpException.createBody(message, error, exports.ResponseCode.UNPROCESSABLE_ENTITY), exports.ResponseCode.UNPROCESSABLE_ENTITY);
      }
  }
  /**
   * 425 Too Early Exception
   */
  class TooEarlyException extends HttpException {
      constructor(message, error = exports.ResponseMessage.TOO_EARLY) {
          super(HttpException.createBody(message, error, exports.ResponseCode.TOO_EARLY), exports.ResponseCode.TOO_EARLY);
      }
  }
  /**
   * 426 Upgrade Required Exception
   */
  class UpgradeRequiredException extends HttpException {
      constructor(message, error = exports.ResponseMessage.UPGRADE_REQUIRED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.UPGRADE_REQUIRED), exports.ResponseCode.UPGRADE_REQUIRED);
      }
  }
  /**
   * 428 Precondition Required Exception
   */
  class PreconditionRequiredException extends HttpException {
      constructor(message, error = exports.ResponseMessage.PRECONDITION_REQUIRED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.PRECONDITION_REQUIRED), exports.ResponseCode.PRECONDITION_REQUIRED);
      }
  }
  /**
   * 429 Too Many Requests Exception
   */
  class TooManyRequestsException extends HttpException {
      constructor(message, error = exports.ResponseMessage.TOO_MANY_REQUESTS) {
          super(HttpException.createBody(message, error, exports.ResponseCode.TOO_MANY_REQUESTS), exports.ResponseCode.TOO_MANY_REQUESTS);
      }
  }
  /**
   * 431 Request Header Fields Too Large Exception
   */
  class RequestHeaderFieldsTooLargeException extends HttpException {
      constructor(message, error = exports.ResponseMessage.REQUEST_HEADER_FIELDS_TOO_LARGE) {
          super(HttpException.createBody(message, error, exports.ResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE), exports.ResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE);
      }
  }
  /**
   * 451 Unavailable For Legal Reasons Exception
   */
  class UnavailableForLegalReasonsException extends HttpException {
      constructor(message, error = exports.ResponseMessage.UNAVAILABLE_FOR_LEGAL_REASONS) {
          super(HttpException.createBody(message, error, exports.ResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS), exports.ResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS);
      }
  }
  /**
   * 500 Internal Server Error Exception
   */
  class InternalServerErrorException extends HttpException {
      constructor(message, error = exports.ResponseMessage.INTERNAL_SERVER_ERROR) {
          super(HttpException.createBody(message, error, exports.ResponseCode.INTERNAL_SERVER_ERROR), exports.ResponseCode.INTERNAL_SERVER_ERROR);
      }
  }
  /**
   * 501 Not Implemented Exception
   */
  class NotImplementedException extends HttpException {
      constructor(message, error = exports.ResponseMessage.NOT_IMPLEMENTED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.NOT_IMPLEMENTED), exports.ResponseCode.NOT_IMPLEMENTED);
      }
  }
  /**
   * 502 Bad Gateway Exception
   */
  class BadGatewayException extends HttpException {
      constructor(message, error = exports.ResponseMessage.BAD_GATEWAY) {
          super(HttpException.createBody(message, error, exports.ResponseCode.BAD_GATEWAY), exports.ResponseCode.BAD_GATEWAY);
      }
  }
  /**
   * 503 Service Unavailable Exception
   */
  class ServiceUnavailableException extends HttpException {
      constructor(message, error = exports.ResponseMessage.SERVICE_UNAVAILABLE) {
          super(HttpException.createBody(message, error, exports.ResponseCode.SERVICE_UNAVAILABLE), exports.ResponseCode.SERVICE_UNAVAILABLE);
      }
  }
  /**
   * 504 Gateway Timeout Exception
   */
  class GatewayTimeoutException extends HttpException {
      constructor(message, error = exports.ResponseMessage.GATEWAY_TIMEOUT) {
          super(HttpException.createBody(message, error, exports.ResponseCode.GATEWAY_TIMEOUT), exports.ResponseCode.GATEWAY_TIMEOUT);
      }
  }
  /**
   * 505 HTTP Version Not Supported Exception
   */
  class HTTPVersionNotSupportedException extends HttpException {
      constructor(message, error = exports.ResponseMessage.HTTP_VERSION_NOT_SUPPORTED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.HTTP_VERSION_NOT_SUPPORTED), exports.ResponseCode.HTTP_VERSION_NOT_SUPPORTED);
      }
  }
  /**
   * 506 Variant Also Negotiates Exception
   */
  class VariantAlsoNegotiatesException extends HttpException {
      constructor(message, error = exports.ResponseMessage.VARIANT_ALSO_NEGOTIATES) {
          super(HttpException.createBody(message, error, exports.ResponseCode.VARIANT_ALSO_NEGOTIATES), exports.ResponseCode.VARIANT_ALSO_NEGOTIATES);
      }
  }
  /**
   * 507 Insufficient Storage Exception
   */
  class InsufficientStorageException extends HttpException {
      constructor(message, error = exports.ResponseMessage.INSUFFICIENT_STORAGE) {
          super(HttpException.createBody(message, error, exports.ResponseCode.INSUFFICIENT_STORAGE), exports.ResponseCode.INSUFFICIENT_STORAGE);
      }
  }
  /**
   * 508 Loop Detected Exception
   */
  class LoopDetectedException extends HttpException {
      constructor(message, error = exports.ResponseMessage.LOOP_DETECTED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.LOOP_DETECTED), exports.ResponseCode.LOOP_DETECTED);
      }
  }
  /**
   * 511 Network Authentication Required Exception
   */
  class NetworkAuthenticationRequiredException extends HttpException {
      constructor(message, error = exports.ResponseMessage.NETWORK_AUTHENTICATION_REQUIRED) {
          super(HttpException.createBody(message, error, exports.ResponseCode.NETWORK_AUTHENTICATION_REQUIRED), exports.ResponseCode.NETWORK_AUTHENTICATION_REQUIRED);
      }
  }

  exports.BadGatewayException = BadGatewayException;
  exports.ConflictException = ConflictException;
  exports.ExpectationFailedException = ExpectationFailedException;
  exports.ForbiddenException = ForbiddenException;
  exports.GatewayTimeoutException = GatewayTimeoutException;
  exports.GoneException = GoneException;
  exports.HTTPVersionNotSupportedException = HTTPVersionNotSupportedException;
  exports.HttpException = HttpException;
  exports.ImateapotException = ImateapotException;
  exports.InsufficientStorageException = InsufficientStorageException;
  exports.InternalServerErrorException = InternalServerErrorException;
  exports.LengthRequiredException = LengthRequiredException;
  exports.LoopDetectedException = LoopDetectedException;
  exports.MethodNotAllowedException = MethodNotAllowedException;
  exports.NetworkAuthenticationRequiredException = NetworkAuthenticationRequiredException;
  exports.NotAcceptableException = NotAcceptableException;
  exports.NotFoundException = NotFoundException;
  exports.NotImplementedException = NotImplementedException;
  exports.PayloadTooLargeException = PayloadTooLargeException;
  exports.PaymentRequiredException = PaymentRequiredException;
  exports.PreconditionFailedException = PreconditionFailedException;
  exports.PreconditionRequiredException = PreconditionRequiredException;
  exports.ProxyAuthenticationRequiredException = ProxyAuthenticationRequiredException;
  exports.RangeNotSatisfiableException = RangeNotSatisfiableException;
  exports.RequestHeaderFieldsTooLargeException = RequestHeaderFieldsTooLargeException;
  exports.RequestMethods = RequestMethods;
  exports.RequestTimeoutException = RequestTimeoutException;
  exports.ServiceUnavailableException = ServiceUnavailableException;
  exports.TooEarlyException = TooEarlyException;
  exports.TooManyRequestsException = TooManyRequestsException;
  exports.URITooLongException = URITooLongException;
  exports.UnauthorizedException = UnauthorizedException;
  exports.UnavailableForLegalReasonsException = UnavailableForLegalReasonsException;
  exports.UnprocessableEntityException = UnprocessableEntityException;
  exports.UnsupportedMediaTypeException = UnsupportedMediaTypeException;
  exports.UpgradeRequiredException = UpgradeRequiredException;
  exports.VariantAlsoNegotiatesException = VariantAlsoNegotiatesException;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
