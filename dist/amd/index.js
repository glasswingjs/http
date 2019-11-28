define('index', ['exports'], function (exports) { 'use strict';

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
       * The PUT method replaces all current representations of the target resource with the request payload.
       */
      RequestMethod["PUT"] = "put";
      /**
       * The TRACE method performs a message loop-back test along the path to the target resource.
       */
      RequestMethod["TRACE"] = "trace";
  })(exports.RequestMethod || (exports.RequestMethod = {}));

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */
  /* global Reflect, Promise */

  var extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf ||
          ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
          function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
      return extendStatics(d, b);
  };

  function __extends(d, b) {
      extendStatics(d, b);
      function __() { this.constructor = d; }
      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  /**
   * @link https://github.com/nestjs/nest/blob/master/packages/common/exceptions/http.exception.ts
   */
  var HttpException = /** @class */ (function (_super) {
      __extends(HttpException, _super);
      function HttpException(response, code) {
          var _this = _super.call(this) || this;
          _this.response = response;
          _this.code = code;
          _this.message = response;
          _this.code = code;
          return _this;
      }
      /**
       * Convert a HTTP Exception into a HTTP body to respond with.
       * @param message
       * @param error
       * @param code
       */
      HttpException.createBody = function (message, error, code) {
          if (typeof message !== 'string' && !Array.isArray(message)) {
              return message;
          }
          var theMessage = message
              ? {
                  code: code,
                  error: error,
                  message: message,
              }
              : {
                  code: code,
                  error: error,
              };
          return theMessage;
      };
      /**
       * Overwrite Error.toString()
       */
      HttpException.prototype.toString = function () {
          return "Error(" + this.code + "): " + (typeof this.message === 'string' ? this.message : JSON.stringify(this.message));
      };
      return HttpException;
  }(Error));
  /**
   * 401 Unauthorized Exception
   */
  var UnauthorizedException = /** @class */ (function (_super) {
      __extends(UnauthorizedException, _super);
      function UnauthorizedException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.UNAUTHORIZED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.UNAUTHORIZED), exports.ResponseCode.UNAUTHORIZED) || this;
      }
      return UnauthorizedException;
  }(HttpException));
  /**
   * 402 Payment Required Exception
   */
  var PaymentRequiredException = /** @class */ (function (_super) {
      __extends(PaymentRequiredException, _super);
      function PaymentRequiredException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.PAYMENT_REQUIRED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.PAYMENT_REQUIRED), exports.ResponseCode.PAYMENT_REQUIRED) || this;
      }
      return PaymentRequiredException;
  }(HttpException));
  /**
   * 403 Forbidden Exception
   */
  var ForbiddenException = /** @class */ (function (_super) {
      __extends(ForbiddenException, _super);
      function ForbiddenException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.FORBIDDEN; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.FORBIDDEN), exports.ResponseCode.FORBIDDEN) || this;
      }
      return ForbiddenException;
  }(HttpException));
  /**
   * 404 Not Found Exception
   */
  var NotFoundException = /** @class */ (function (_super) {
      __extends(NotFoundException, _super);
      function NotFoundException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.NOT_FOUND; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.NOT_FOUND), exports.ResponseCode.NOT_FOUND) || this;
      }
      return NotFoundException;
  }(HttpException));
  /**
   * 405 Method Not Allowed Exception
   */
  var MethodNotAllowedException = /** @class */ (function (_super) {
      __extends(MethodNotAllowedException, _super);
      function MethodNotAllowedException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.METHOD_NOT_ALLOWED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.METHOD_NOT_ALLOWED), exports.ResponseCode.METHOD_NOT_ALLOWED) || this;
      }
      return MethodNotAllowedException;
  }(HttpException));
  /**
   * 406 Not Acceptable Exception
   */
  var NotAcceptableException = /** @class */ (function (_super) {
      __extends(NotAcceptableException, _super);
      function NotAcceptableException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.NOT_ACCEPTABLE; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.NOT_ACCEPTABLE), exports.ResponseCode.NOT_ACCEPTABLE) || this;
      }
      return NotAcceptableException;
  }(HttpException));
  /**
   * 407 Proxy Authentication Required Exception
   */
  var ProxyAuthenticationRequiredException = /** @class */ (function (_super) {
      __extends(ProxyAuthenticationRequiredException, _super);
      function ProxyAuthenticationRequiredException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.PROXY_AUTHENTICATION_REQUIRED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.PROXY_AUTHENTICATION_REQUIRED), exports.ResponseCode.PROXY_AUTHENTICATION_REQUIRED) || this;
      }
      return ProxyAuthenticationRequiredException;
  }(HttpException));
  /**
   * 408 Request Timeout Exception
   */
  var RequestTimeoutException = /** @class */ (function (_super) {
      __extends(RequestTimeoutException, _super);
      function RequestTimeoutException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.REQUEST_TIMEOUT; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.REQUEST_TIMEOUT), exports.ResponseCode.REQUEST_TIMEOUT) || this;
      }
      return RequestTimeoutException;
  }(HttpException));
  /**
   * 409 Conflict Exception
   */
  var ConflictException = /** @class */ (function (_super) {
      __extends(ConflictException, _super);
      function ConflictException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.CONFLICT; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.CONFLICT), exports.ResponseCode.CONFLICT) || this;
      }
      return ConflictException;
  }(HttpException));
  /**
   * 410 Gone Exception
   */
  var GoneException = /** @class */ (function (_super) {
      __extends(GoneException, _super);
      function GoneException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.GONE; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.GONE), exports.ResponseCode.GONE) || this;
      }
      return GoneException;
  }(HttpException));
  /**
   * 411 Length Required Exception
   */
  var LengthRequiredException = /** @class */ (function (_super) {
      __extends(LengthRequiredException, _super);
      function LengthRequiredException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.LENGTH_REQUIRED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.LENGTH_REQUIRED), exports.ResponseCode.LENGTH_REQUIRED) || this;
      }
      return LengthRequiredException;
  }(HttpException));
  /**
   * 412 Precondition Failed Exception
   */
  var PreconditionFailedException = /** @class */ (function (_super) {
      __extends(PreconditionFailedException, _super);
      function PreconditionFailedException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.PRECONDITION_FAILED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.PRECONDITION_FAILED), exports.ResponseCode.PRECONDITION_FAILED) || this;
      }
      return PreconditionFailedException;
  }(HttpException));
  /**
   * 413 Payload Too Large Exception
   */
  var PayloadTooLargeException = /** @class */ (function (_super) {
      __extends(PayloadTooLargeException, _super);
      function PayloadTooLargeException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.PAYLOAD_TOO_LARGE; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.PAYLOAD_TOO_LARGE), exports.ResponseCode.PAYLOAD_TOO_LARGE) || this;
      }
      return PayloadTooLargeException;
  }(HttpException));
  /**
   * 414 URI Too Long Exception
   */
  var URITooLongException = /** @class */ (function (_super) {
      __extends(URITooLongException, _super);
      function URITooLongException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.URI_TOO_LONG; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.URI_TOO_LONG), exports.ResponseCode.URI_TOO_LONG) || this;
      }
      return URITooLongException;
  }(HttpException));
  /**
   * 415 Unsupported Media Type Exception
   */
  var UnsupportedMediaTypeException = /** @class */ (function (_super) {
      __extends(UnsupportedMediaTypeException, _super);
      function UnsupportedMediaTypeException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.UNSUPPORTED_MEDIA_TYPE; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.UNSUPPORTED_MEDIA_TYPE), exports.ResponseCode.UNSUPPORTED_MEDIA_TYPE) || this;
      }
      return UnsupportedMediaTypeException;
  }(HttpException));
  /**
   * 416 Range Not Satisfiable Exception
   */
  var RangeNotSatisfiableException = /** @class */ (function (_super) {
      __extends(RangeNotSatisfiableException, _super);
      function RangeNotSatisfiableException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.RANGE_NOT_SATISFIABLE; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.RANGE_NOT_SATISFIABLE), exports.ResponseCode.RANGE_NOT_SATISFIABLE) || this;
      }
      return RangeNotSatisfiableException;
  }(HttpException));
  /**
   * 417 Expectation Failed Exception
   */
  var ExpectationFailedException = /** @class */ (function (_super) {
      __extends(ExpectationFailedException, _super);
      function ExpectationFailedException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.EXPECTATION_FAILED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.EXPECTATION_FAILED), exports.ResponseCode.EXPECTATION_FAILED) || this;
      }
      return ExpectationFailedException;
  }(HttpException));
  /**
   * 418 I'm a teapot Exception
   */
  var ImateapotException = /** @class */ (function (_super) {
      __extends(ImateapotException, _super);
      function ImateapotException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.I_AM_A_TEAPOT; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.I_AM_A_TEAPOT), exports.ResponseCode.I_AM_A_TEAPOT) || this;
      }
      return ImateapotException;
  }(HttpException));
  /**
   * 422 Unprocessable Entity Exception
   */
  var UnprocessableEntityException = /** @class */ (function (_super) {
      __extends(UnprocessableEntityException, _super);
      function UnprocessableEntityException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.UNPROCESSABLE_ENTITY; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.UNPROCESSABLE_ENTITY), exports.ResponseCode.UNPROCESSABLE_ENTITY) || this;
      }
      return UnprocessableEntityException;
  }(HttpException));
  /**
   * 425 Too Early Exception
   */
  var TooEarlyException = /** @class */ (function (_super) {
      __extends(TooEarlyException, _super);
      function TooEarlyException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.TOO_EARLY; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.TOO_EARLY), exports.ResponseCode.TOO_EARLY) || this;
      }
      return TooEarlyException;
  }(HttpException));
  /**
   * 426 Upgrade Required Exception
   */
  var UpgradeRequiredException = /** @class */ (function (_super) {
      __extends(UpgradeRequiredException, _super);
      function UpgradeRequiredException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.UPGRADE_REQUIRED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.UPGRADE_REQUIRED), exports.ResponseCode.UPGRADE_REQUIRED) || this;
      }
      return UpgradeRequiredException;
  }(HttpException));
  /**
   * 428 Precondition Required Exception
   */
  var PreconditionRequiredException = /** @class */ (function (_super) {
      __extends(PreconditionRequiredException, _super);
      function PreconditionRequiredException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.PRECONDITION_REQUIRED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.PRECONDITION_REQUIRED), exports.ResponseCode.PRECONDITION_REQUIRED) || this;
      }
      return PreconditionRequiredException;
  }(HttpException));
  /**
   * 429 Too Many Requests Exception
   */
  var TooManyRequestsException = /** @class */ (function (_super) {
      __extends(TooManyRequestsException, _super);
      function TooManyRequestsException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.TOO_MANY_REQUESTS; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.TOO_MANY_REQUESTS), exports.ResponseCode.TOO_MANY_REQUESTS) || this;
      }
      return TooManyRequestsException;
  }(HttpException));
  /**
   * 431 Request Header Fields Too Large Exception
   */
  var RequestHeaderFieldsTooLargeException = /** @class */ (function (_super) {
      __extends(RequestHeaderFieldsTooLargeException, _super);
      function RequestHeaderFieldsTooLargeException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.REQUEST_HEADER_FIELDS_TOO_LARGE; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE), exports.ResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE) || this;
      }
      return RequestHeaderFieldsTooLargeException;
  }(HttpException));
  /**
   * 451 Unavailable For Legal Reasons Exception
   */
  var UnavailableForLegalReasonsException = /** @class */ (function (_super) {
      __extends(UnavailableForLegalReasonsException, _super);
      function UnavailableForLegalReasonsException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.UNAVAILABLE_FOR_LEGAL_REASONS; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS), exports.ResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS) || this;
      }
      return UnavailableForLegalReasonsException;
  }(HttpException));
  /**
   * 500 Internal Server Error Exception
   */
  var InternalServerErrorException = /** @class */ (function (_super) {
      __extends(InternalServerErrorException, _super);
      function InternalServerErrorException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.INTERNAL_SERVER_ERROR; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.INTERNAL_SERVER_ERROR), exports.ResponseCode.INTERNAL_SERVER_ERROR) || this;
      }
      return InternalServerErrorException;
  }(HttpException));
  /**
   * 501 Not Implemented Exception
   */
  var NotImplementedException = /** @class */ (function (_super) {
      __extends(NotImplementedException, _super);
      function NotImplementedException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.NOT_IMPLEMENTED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.NOT_IMPLEMENTED), exports.ResponseCode.NOT_IMPLEMENTED) || this;
      }
      return NotImplementedException;
  }(HttpException));
  /**
   * 502 Bad Gateway Exception
   */
  var BadGatewayException = /** @class */ (function (_super) {
      __extends(BadGatewayException, _super);
      function BadGatewayException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.BAD_GATEWAY; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.BAD_GATEWAY), exports.ResponseCode.BAD_GATEWAY) || this;
      }
      return BadGatewayException;
  }(HttpException));
  /**
   * 503 Service Unavailable Exception
   */
  var ServiceUnavailableException = /** @class */ (function (_super) {
      __extends(ServiceUnavailableException, _super);
      function ServiceUnavailableException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.SERVICE_UNAVAILABLE; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.SERVICE_UNAVAILABLE), exports.ResponseCode.SERVICE_UNAVAILABLE) || this;
      }
      return ServiceUnavailableException;
  }(HttpException));
  /**
   * 504 Gateway Timeout Exception
   */
  var GatewayTimeoutException = /** @class */ (function (_super) {
      __extends(GatewayTimeoutException, _super);
      function GatewayTimeoutException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.GATEWAY_TIMEOUT; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.GATEWAY_TIMEOUT), exports.ResponseCode.GATEWAY_TIMEOUT) || this;
      }
      return GatewayTimeoutException;
  }(HttpException));
  /**
   * 505 HTTP Version Not Supported Exception
   */
  var HTTPVersionNotSupportedException = /** @class */ (function (_super) {
      __extends(HTTPVersionNotSupportedException, _super);
      function HTTPVersionNotSupportedException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.HTTP_VERSION_NOT_SUPPORTED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.HTTP_VERSION_NOT_SUPPORTED), exports.ResponseCode.HTTP_VERSION_NOT_SUPPORTED) || this;
      }
      return HTTPVersionNotSupportedException;
  }(HttpException));
  /**
   * 506 Variant Also Negotiates Exception
   */
  var VariantAlsoNegotiatesException = /** @class */ (function (_super) {
      __extends(VariantAlsoNegotiatesException, _super);
      function VariantAlsoNegotiatesException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.VARIANT_ALSO_NEGOTIATES; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.VARIANT_ALSO_NEGOTIATES), exports.ResponseCode.VARIANT_ALSO_NEGOTIATES) || this;
      }
      return VariantAlsoNegotiatesException;
  }(HttpException));
  /**
   * 507 Insufficient Storage Exception
   */
  var InsufficientStorageException = /** @class */ (function (_super) {
      __extends(InsufficientStorageException, _super);
      function InsufficientStorageException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.INSUFFICIENT_STORAGE; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.INSUFFICIENT_STORAGE), exports.ResponseCode.INSUFFICIENT_STORAGE) || this;
      }
      return InsufficientStorageException;
  }(HttpException));
  /**
   * 508 Loop Detected Exception
   */
  var LoopDetectedException = /** @class */ (function (_super) {
      __extends(LoopDetectedException, _super);
      function LoopDetectedException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.LOOP_DETECTED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.LOOP_DETECTED), exports.ResponseCode.LOOP_DETECTED) || this;
      }
      return LoopDetectedException;
  }(HttpException));
  /**
   * 511 Network Authentication Required Exception
   */
  var NetworkAuthenticationRequiredException = /** @class */ (function (_super) {
      __extends(NetworkAuthenticationRequiredException, _super);
      function NetworkAuthenticationRequiredException(message, error) {
          if (error === void 0) { error = exports.ResponseMessage.NETWORK_AUTHENTICATION_REQUIRED; }
          return _super.call(this, HttpException.createBody(message, error, exports.ResponseCode.NETWORK_AUTHENTICATION_REQUIRED), exports.ResponseCode.NETWORK_AUTHENTICATION_REQUIRED) || this;
      }
      return NetworkAuthenticationRequiredException;
  }(HttpException));

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

});
