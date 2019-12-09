import 'reflect-metadata';
import SetCookieParser from 'set-cookie-parser';
import { parse } from 'url';
import { extendClassMethod } from '@glasswing/common';
import YAML from 'yaml';
import { IncomingMessage, ServerResponse } from 'http';
import { Socket } from 'net';

/**
 * List of HTTP headers, as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 */
var RequestHeader;
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
})(RequestHeader || (RequestHeader = {}));
/**
 * List of HTTP Resonse Codes as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * @link https://github.com/symfony/http-foundation/blob/master/Response.php
 */
var ResponseCode;
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
})(ResponseCode || (ResponseCode = {}));
/**
 * List of HTTP Resonse Messages as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
var ResponseMessage;
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
})(ResponseMessage || (ResponseMessage = {}));
/**
 * List of Request Methods as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 */
var RequestMethod;
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
})(RequestMethod || (RequestMethod = {}));
// /**
//  * Full list of Request Methods
//  */
// export type RequestMethod =
//   | 'all'
//   | 'connect'
//   | 'delete'
//   | 'get'
//   | 'head'
//   | 'options'
//   | 'patch'
//   | 'post'
//   | 'put'
//   | 'trace'

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

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
const Body = (key, decoder = JSON.parse) => {
    return (target, methodKey, parameterIndex) => {
        const mapper = (data) => (key ? data[key] : data);
        appendParameterMapper(target, methodKey, parameterIndex, (req) => readRequestBody(req)
            .then(decoder)
            .then(mapper));
    };
};
/**
 * Cookie(key?: string, value?: any)
 * If key is not mentioned or `null`, will return the entire cookies object.
 * If key is mentioned and not null, will return a certain property of the cookies object, defined by the key's
 * value.
 */
const Cookie = (key, value) => {
    return (target, methodKey, parameterIndex) => {
        appendParameterMapper(target, methodKey, parameterIndex, (req) => {
            const cookiesString = (req.headers || {}).cookie || '';
            // const cookiesArray: any[] = cookiesString
            //   .split(';')
            //   .map((cookie: string) => {
            //     var parts: string[] = cookie.split('=');
            //     return { [(parts.shift()||'').trim()]: decodeURI(parts.join('=')), }
            //   })
            // const cookies: any = Object.assign({}, ...cookiesArray)
            const cookies = SetCookieParser.parse(cookiesString.split('; '), {
                decodeValues: true,
                map: true,
            });
            return key ? cookies[key] : cookies;
        }, 'request');
    };
};
/**
 * Header(key?: string)
 * If key is not mentioned or `null`, will return the entire headers object.
 * If key is mentioned and not null, will return a certain property of the headers object, defined by the key's
 * value.
 */
const Header = (key) => {
    return (target, methodKey, parameterIndex) => {
        appendParameterMapper(target, methodKey, parameterIndex, (req) => {
            return key ? req.headers[key] : req.headers;
        }, 'request');
    };
};
/**
 * @Ip()
 */
const Ip = () => {
    return (target, methodKey, parameterIndex) => {
        appendParameterMapper(target, methodKey, parameterIndex, (req) => req.headers[RequestHeader.X_FORWARDED_FOR.toLowerCase()]);
    };
};
/**
 * @Param(key:? string)
 * If key is not mentioned or `null`, will return the entire decoded parameters object.
 * If key is mentioned and not null, will return a certain property of the parameters object, defined by the key's
 * value.
 */
const Param = (key) => {
    return (target, methodKey, parameterIndex) => {
        appendParameterMapper(target, methodKey, parameterIndex, (params) => (key ? params[key] : params), 'params');
    };
};
/**
 * @Query(key:? string)
 * If key is not mentioned or `null`, will return the entire query object.
 * If key is mentioned and not null, will return a certain property of the query object, defined by the key's value.
 */
const Query = (key) => {
    return (target, methodKey, parameterIndex) => {
        appendParameterMapper(target, methodKey, parameterIndex, (req) => {
            const queryData = parse(req.url || '', true).query;
            return key ? queryData[key] : queryData;
        });
    };
};
/**
 * @Req()
 */
const Req = () => {
    return (target, methodKey, parameterIndex) => {
        appendParameterMapper(target, methodKey, parameterIndex, (req) => req);
    };
};
/**
 * @Res()
 */
const Res = () => {
    return (target, methodKey, parameterIndex) => {
        appendParameterMapper(target, methodKey, parameterIndex, (res) => res, 'response');
    };
};
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
const methodArgumentsDescriptor = (methodName) => `${typeof methodName === 'string' ? methodName : methodName.toString()}__Arguments`;
/**
 *
 * @link https://nodejs.org/es/docs/guides/anatomy-of-an-http-transaction/
 * @param req
 */
const readRequestBody = (req) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        const body = [];
        req
            .on('error', err => reject(err))
            .on('data', chunk => body.push(chunk))
            .on('end', () => {
            const str = Buffer.concat(body).toString();
            resolve(str);
        });
    });
});
/**
 *
 * @param target
 * @param methodName
 * @param parameterIndex
 * @param callable
 * @param source
 */
const appendParameterMapper = (target, methodName, parameterIndex, callable, source = 'request') => {
    // calculate method (name) descriptor
    const methodDescriptor = methodArgumentsDescriptor(methodName);
    // can't set ParameterDescriptor[] type due to creation of an array of zeros
    const metadata = Array(parameterIndex + 1);
    // copy already discovered parameters into the new array
    if (Reflect.hasMetadata(methodDescriptor, target)) {
        const oldMetadata = Reflect.getMetadata(methodDescriptor, target) || [];
        oldMetadata.forEach((data, index) => {
            metadata[index] = data;
        });
    }
    // add the new discovered parameter descriptor to the array
    metadata[parameterIndex] = {
        callable,
        source,
    };
    // set the data back
    Reflect.defineMetadata(methodDescriptor, metadata, target);
};

/**
 * Comment
 *
 * @returns {MethodDecorator}
 */
const RespondWith = (bodyEncoder = (data) => data, ...other) => (target, propertyKey, descriptor) => {
    const handler = (oldMethod) => {
        return (...args) => {
            const result = oldMethod(...args);
            return result instanceof Promise
                ? result.then((data) => bodyEncoder(data, ...other))
                : bodyEncoder(result, ...other);
        };
    };
    return extendClassMethod(descriptor, handler);
};
/**
 * Wrap controller respond with raw data
 *
 * @param args
 */
const RespondWithRaw = (...args) => RespondWith((data) => data, ...args);
/**
 * Wrap controller action to encode response into a JSON string
 *
 * @param args
 */
const RespondWithJson = (...args) => RespondWith(JSON.stringify, ...args);
/**
 * Wrap controller action to encode response into a YAML string
 *
 * @param args
 */
const RespondWithYaml = (...args) => RespondWith(YAML.stringify, ...args);

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
    constructor(message, error = ResponseMessage.UNAUTHORIZED) {
        super(HttpException.createBody(message, error, ResponseCode.UNAUTHORIZED), ResponseCode.UNAUTHORIZED);
    }
}
/**
 * 402 Payment Required Exception
 */
class PaymentRequiredException extends HttpException {
    constructor(message, error = ResponseMessage.PAYMENT_REQUIRED) {
        super(HttpException.createBody(message, error, ResponseCode.PAYMENT_REQUIRED), ResponseCode.PAYMENT_REQUIRED);
    }
}
/**
 * 403 Forbidden Exception
 */
class ForbiddenException extends HttpException {
    constructor(message, error = ResponseMessage.FORBIDDEN) {
        super(HttpException.createBody(message, error, ResponseCode.FORBIDDEN), ResponseCode.FORBIDDEN);
    }
}
/**
 * 404 Not Found Exception
 */
class NotFoundException extends HttpException {
    constructor(message, error = ResponseMessage.NOT_FOUND) {
        super(HttpException.createBody(message, error, ResponseCode.NOT_FOUND), ResponseCode.NOT_FOUND);
    }
}
/**
 * 405 Method Not Allowed Exception
 */
class MethodNotAllowedException extends HttpException {
    constructor(message, error = ResponseMessage.METHOD_NOT_ALLOWED) {
        super(HttpException.createBody(message, error, ResponseCode.METHOD_NOT_ALLOWED), ResponseCode.METHOD_NOT_ALLOWED);
    }
}
/**
 * 406 Not Acceptable Exception
 */
class NotAcceptableException extends HttpException {
    constructor(message, error = ResponseMessage.NOT_ACCEPTABLE) {
        super(HttpException.createBody(message, error, ResponseCode.NOT_ACCEPTABLE), ResponseCode.NOT_ACCEPTABLE);
    }
}
/**
 * 407 Proxy Authentication Required Exception
 */
class ProxyAuthenticationRequiredException extends HttpException {
    constructor(message, error = ResponseMessage.PROXY_AUTHENTICATION_REQUIRED) {
        super(HttpException.createBody(message, error, ResponseCode.PROXY_AUTHENTICATION_REQUIRED), ResponseCode.PROXY_AUTHENTICATION_REQUIRED);
    }
}
/**
 * 408 Request Timeout Exception
 */
class RequestTimeoutException extends HttpException {
    constructor(message, error = ResponseMessage.REQUEST_TIMEOUT) {
        super(HttpException.createBody(message, error, ResponseCode.REQUEST_TIMEOUT), ResponseCode.REQUEST_TIMEOUT);
    }
}
/**
 * 409 Conflict Exception
 */
class ConflictException extends HttpException {
    constructor(message, error = ResponseMessage.CONFLICT) {
        super(HttpException.createBody(message, error, ResponseCode.CONFLICT), ResponseCode.CONFLICT);
    }
}
/**
 * 410 Gone Exception
 */
class GoneException extends HttpException {
    constructor(message, error = ResponseMessage.GONE) {
        super(HttpException.createBody(message, error, ResponseCode.GONE), ResponseCode.GONE);
    }
}
/**
 * 411 Length Required Exception
 */
class LengthRequiredException extends HttpException {
    constructor(message, error = ResponseMessage.LENGTH_REQUIRED) {
        super(HttpException.createBody(message, error, ResponseCode.LENGTH_REQUIRED), ResponseCode.LENGTH_REQUIRED);
    }
}
/**
 * 412 Precondition Failed Exception
 */
class PreconditionFailedException extends HttpException {
    constructor(message, error = ResponseMessage.PRECONDITION_FAILED) {
        super(HttpException.createBody(message, error, ResponseCode.PRECONDITION_FAILED), ResponseCode.PRECONDITION_FAILED);
    }
}
/**
 * 413 Payload Too Large Exception
 */
class PayloadTooLargeException extends HttpException {
    constructor(message, error = ResponseMessage.PAYLOAD_TOO_LARGE) {
        super(HttpException.createBody(message, error, ResponseCode.PAYLOAD_TOO_LARGE), ResponseCode.PAYLOAD_TOO_LARGE);
    }
}
/**
 * 414 URI Too Long Exception
 */
class URITooLongException extends HttpException {
    constructor(message, error = ResponseMessage.URI_TOO_LONG) {
        super(HttpException.createBody(message, error, ResponseCode.URI_TOO_LONG), ResponseCode.URI_TOO_LONG);
    }
}
/**
 * 415 Unsupported Media Type Exception
 */
class UnsupportedMediaTypeException extends HttpException {
    constructor(message, error = ResponseMessage.UNSUPPORTED_MEDIA_TYPE) {
        super(HttpException.createBody(message, error, ResponseCode.UNSUPPORTED_MEDIA_TYPE), ResponseCode.UNSUPPORTED_MEDIA_TYPE);
    }
}
/**
 * 416 Range Not Satisfiable Exception
 */
class RangeNotSatisfiableException extends HttpException {
    constructor(message, error = ResponseMessage.RANGE_NOT_SATISFIABLE) {
        super(HttpException.createBody(message, error, ResponseCode.RANGE_NOT_SATISFIABLE), ResponseCode.RANGE_NOT_SATISFIABLE);
    }
}
/**
 * 417 Expectation Failed Exception
 */
class ExpectationFailedException extends HttpException {
    constructor(message, error = ResponseMessage.EXPECTATION_FAILED) {
        super(HttpException.createBody(message, error, ResponseCode.EXPECTATION_FAILED), ResponseCode.EXPECTATION_FAILED);
    }
}
/**
 * 418 I'm a teapot Exception
 */
class ImateapotException extends HttpException {
    constructor(message, error = ResponseMessage.I_AM_A_TEAPOT) {
        super(HttpException.createBody(message, error, ResponseCode.I_AM_A_TEAPOT), ResponseCode.I_AM_A_TEAPOT);
    }
}
/**
 * 422 Unprocessable Entity Exception
 */
class UnprocessableEntityException extends HttpException {
    constructor(message, error = ResponseMessage.UNPROCESSABLE_ENTITY) {
        super(HttpException.createBody(message, error, ResponseCode.UNPROCESSABLE_ENTITY), ResponseCode.UNPROCESSABLE_ENTITY);
    }
}
/**
 * 425 Too Early Exception
 */
class TooEarlyException extends HttpException {
    constructor(message, error = ResponseMessage.TOO_EARLY) {
        super(HttpException.createBody(message, error, ResponseCode.TOO_EARLY), ResponseCode.TOO_EARLY);
    }
}
/**
 * 426 Upgrade Required Exception
 */
class UpgradeRequiredException extends HttpException {
    constructor(message, error = ResponseMessage.UPGRADE_REQUIRED) {
        super(HttpException.createBody(message, error, ResponseCode.UPGRADE_REQUIRED), ResponseCode.UPGRADE_REQUIRED);
    }
}
/**
 * 428 Precondition Required Exception
 */
class PreconditionRequiredException extends HttpException {
    constructor(message, error = ResponseMessage.PRECONDITION_REQUIRED) {
        super(HttpException.createBody(message, error, ResponseCode.PRECONDITION_REQUIRED), ResponseCode.PRECONDITION_REQUIRED);
    }
}
/**
 * 429 Too Many Requests Exception
 */
class TooManyRequestsException extends HttpException {
    constructor(message, error = ResponseMessage.TOO_MANY_REQUESTS) {
        super(HttpException.createBody(message, error, ResponseCode.TOO_MANY_REQUESTS), ResponseCode.TOO_MANY_REQUESTS);
    }
}
/**
 * 431 Request Header Fields Too Large Exception
 */
class RequestHeaderFieldsTooLargeException extends HttpException {
    constructor(message, error = ResponseMessage.REQUEST_HEADER_FIELDS_TOO_LARGE) {
        super(HttpException.createBody(message, error, ResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE), ResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE);
    }
}
/**
 * 451 Unavailable For Legal Reasons Exception
 */
class UnavailableForLegalReasonsException extends HttpException {
    constructor(message, error = ResponseMessage.UNAVAILABLE_FOR_LEGAL_REASONS) {
        super(HttpException.createBody(message, error, ResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS), ResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS);
    }
}
/**
 * 500 Internal Server Error Exception
 */
class InternalServerErrorException extends HttpException {
    constructor(message, error = ResponseMessage.INTERNAL_SERVER_ERROR) {
        super(HttpException.createBody(message, error, ResponseCode.INTERNAL_SERVER_ERROR), ResponseCode.INTERNAL_SERVER_ERROR);
    }
}
/**
 * 501 Not Implemented Exception
 */
class NotImplementedException extends HttpException {
    constructor(message, error = ResponseMessage.NOT_IMPLEMENTED) {
        super(HttpException.createBody(message, error, ResponseCode.NOT_IMPLEMENTED), ResponseCode.NOT_IMPLEMENTED);
    }
}
/**
 * 502 Bad Gateway Exception
 */
class BadGatewayException extends HttpException {
    constructor(message, error = ResponseMessage.BAD_GATEWAY) {
        super(HttpException.createBody(message, error, ResponseCode.BAD_GATEWAY), ResponseCode.BAD_GATEWAY);
    }
}
/**
 * 503 Service Unavailable Exception
 */
class ServiceUnavailableException extends HttpException {
    constructor(message, error = ResponseMessage.SERVICE_UNAVAILABLE) {
        super(HttpException.createBody(message, error, ResponseCode.SERVICE_UNAVAILABLE), ResponseCode.SERVICE_UNAVAILABLE);
    }
}
/**
 * 504 Gateway Timeout Exception
 */
class GatewayTimeoutException extends HttpException {
    constructor(message, error = ResponseMessage.GATEWAY_TIMEOUT) {
        super(HttpException.createBody(message, error, ResponseCode.GATEWAY_TIMEOUT), ResponseCode.GATEWAY_TIMEOUT);
    }
}
/**
 * 505 HTTP Version Not Supported Exception
 */
class HTTPVersionNotSupportedException extends HttpException {
    constructor(message, error = ResponseMessage.HTTP_VERSION_NOT_SUPPORTED) {
        super(HttpException.createBody(message, error, ResponseCode.HTTP_VERSION_NOT_SUPPORTED), ResponseCode.HTTP_VERSION_NOT_SUPPORTED);
    }
}
/**
 * 506 Variant Also Negotiates Exception
 */
class VariantAlsoNegotiatesException extends HttpException {
    constructor(message, error = ResponseMessage.VARIANT_ALSO_NEGOTIATES) {
        super(HttpException.createBody(message, error, ResponseCode.VARIANT_ALSO_NEGOTIATES), ResponseCode.VARIANT_ALSO_NEGOTIATES);
    }
}
/**
 * 507 Insufficient Storage Exception
 */
class InsufficientStorageException extends HttpException {
    constructor(message, error = ResponseMessage.INSUFFICIENT_STORAGE) {
        super(HttpException.createBody(message, error, ResponseCode.INSUFFICIENT_STORAGE), ResponseCode.INSUFFICIENT_STORAGE);
    }
}
/**
 * 508 Loop Detected Exception
 */
class LoopDetectedException extends HttpException {
    constructor(message, error = ResponseMessage.LOOP_DETECTED) {
        super(HttpException.createBody(message, error, ResponseCode.LOOP_DETECTED), ResponseCode.LOOP_DETECTED);
    }
}
/**
 * 511 Network Authentication Required Exception
 */
class NetworkAuthenticationRequiredException extends HttpException {
    constructor(message, error = ResponseMessage.NETWORK_AUTHENTICATION_REQUIRED) {
        super(HttpException.createBody(message, error, ResponseCode.NETWORK_AUTHENTICATION_REQUIRED), ResponseCode.NETWORK_AUTHENTICATION_REQUIRED);
    }
}

class MockRequest extends IncomingMessage {
    constructor(mock, body) {
        super(new Socket());
        this.headers = mock.headers;
        this.method = mock.method;
        this.url = mock.url;
        if (body) {
            this.push(body);
            this.push(null);
        }
    }
}
const mockReq = (data) => new MockRequest({
    complete: true,
    connection: new Socket(),
    headers: {
        [RequestHeader.COOKIE.toLowerCase()]: 'test=testValue; test2=testValue2',
        [RequestHeader.X_FORWARDED_FOR.toLowerCase()]: '8.8.8.8',
        test: 'testValue',
        test2: 'testValue2',
    },
    httpVersion: '1.1',
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    method: 'GET',
    url: '/test?test=testValue&test2=testValue2',
}, JSON.stringify(data));
const mockReqYaml = (data) => new MockRequest({
    complete: true,
    connection: new Socket(),
    headers: {
        [RequestHeader.COOKIE.toLowerCase()]: 'test=testValue; test2=testValue2',
        [RequestHeader.X_FORWARDED_FOR.toLowerCase()]: '8.8.8.8',
        test: 'testValue',
        test2: 'testValue2',
    },
    httpVersion: '1.1',
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    method: 'GET',
    url: '/test?test=testValue&test2=testValue2',
}, YAML.stringify(data));

class MockResponse extends ServerResponse {
    constructor(req, mock) {
        super(req);
        this.statusCode = mock ? mock.statusCode : ResponseCode.OK;
        this.statusMessage = mock ? mock.statusMessage : ResponseMessage.OK;
        //    this.writableFinished = mock ? mock.writableFinished : true
    }
}
const mockRes = (data) => new MockResponse(mockReq(data));

export { BadGatewayException, Body, ConflictException, Cookie, ExpectationFailedException, ForbiddenException, GatewayTimeoutException, GoneException, HTTPVersionNotSupportedException, Header, HttpException, ImateapotException, InsufficientStorageException, InternalServerErrorException, Ip, LengthRequiredException, LoopDetectedException, MethodNotAllowedException, MockRequest, MockResponse, NetworkAuthenticationRequiredException, NotAcceptableException, NotFoundException, NotImplementedException, Param, PayloadTooLargeException, PaymentRequiredException, PreconditionFailedException, PreconditionRequiredException, ProxyAuthenticationRequiredException, Query, RangeNotSatisfiableException, Req, RequestHeader, RequestHeaderFieldsTooLargeException, RequestMethod, RequestTimeoutException, Res, RespondWith, RespondWithJson, RespondWithRaw, RespondWithYaml, ResponseCode, ResponseMessage, ServiceUnavailableException, TooEarlyException, TooManyRequestsException, URITooLongException, UnauthorizedException, UnavailableForLegalReasonsException, UnprocessableEntityException, UnsupportedMediaTypeException, UpgradeRequiredException, VariantAlsoNegotiatesException, methodArgumentsDescriptor, mockReq, mockReqYaml, mockRes };
