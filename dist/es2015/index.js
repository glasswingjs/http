import 'reflect-metadata';
import { IncomingMessage, ServerResponse } from 'http';
import SetCookieParser from 'set-cookie-parser';
import { parse } from 'url';
import { Http2ServerRequest, Http2ServerResponse } from 'http2';
import { extendClassMethod } from '@glasswing/common';
import YAML from 'yaml';
import { Socket } from 'net';

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

class HttpRequest extends IncomingMessage {
    /**
     * Constructor
     * @param socket
     * @param routeParams
     */
    constructor(socket, routeParams) {
        super(socket);
        this.cookieParams = this.parseCookieParams();
        this.routeParams = routeParams;
        this.queryParams = this.parseQueryParams();
    }
    /**
     * Parse Cookie string
     * @param cookies
     */
    parseCookieParams(cookies) {
        const cookiesString = cookies ? cookies : (this.headers || {}).cookie || '';
        return SetCookieParser.parse(cookiesString.split('; '), {
            decodeValues: true,
            map: true,
        });
    }
    /**
     * Parse url string
     * @param url
     */
    parseQueryParams(url) {
        const urlString = url ? url : this.url || '';
        return parse(urlString, true).query;
    }
    /**
     *
     */
    toHttpRequest() {
        return this;
    }
}

class Http2Request extends Http2ServerRequest {
    /**
     * Constructor
     * @param stream
     * @param headers
     * @param options
     * @param rawHeaders
     * @param routeParams
     */
    constructor(stream, headers, options, rawHeaders, routeParams) {
        super(stream, headers, options, rawHeaders);
        this.cookieParams = this.parseCookieParams();
        this.routeParams = routeParams;
        this.queryParams = this.parseQueryParams();
    }
    /**
     * Parse Cookie string
     * @param cookies
     */
    parseCookieParams(cookies) {
        const cookiesString = cookies ? cookies : (this.headers || {}).cookie || '';
        return SetCookieParser.parse(cookiesString.split('; '), {
            decodeValues: true,
            map: true,
        });
    }
    /**
     * Parse url string
     * @param url
     */
    parseQueryParams(url) {
        const urlString = url ? url : this.url || '';
        return parse(urlString, true).query;
    }
    /**
     *
     */
    toHttpRequest() {
        return this;
    }
}

/**
 * List of HTTP headers, as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 */
var HttpRequestHeader;
(function (HttpRequestHeader) {
    HttpRequestHeader["ACCEPT"] = "Accept";
    HttpRequestHeader["ACCEPT_CH"] = "Accept-CH";
    HttpRequestHeader["ACCEPT_CH_LIFETIME"] = "Accept-CH-Lifetime";
    HttpRequestHeader["ACCEPT_CHARSET"] = "Accept-Charset";
    HttpRequestHeader["ACCEPT_ENCODING"] = "Accept-Encoding";
    HttpRequestHeader["ACCEPT_LANGUAGE"] = "Accept-Language";
    HttpRequestHeader["ACCEPT_PATCH"] = "Accept-Patch";
    HttpRequestHeader["ACCEPT_RANGES"] = "Accept-Ranges";
    HttpRequestHeader["ACCESS_CONTROL_ALLOW_CREDENTIALS"] = "Access-Control-Allow-Credentials";
    HttpRequestHeader["ACCESS_CONTROL_ALLOW_HEADERS"] = "Access-Control-Allow-Headers";
    HttpRequestHeader["ACCESS_CONTROL_ALLOW_METHODS"] = "Access-Control-Allow-Methods";
    HttpRequestHeader["ACCESS_CONTROL_ALLOW_ORIGIN"] = "Access-Control-Allow-Origin";
    HttpRequestHeader["ACCESS_CONTROL_EXPOSE_HEADERS"] = "Access-Control-Expose-Headers";
    HttpRequestHeader["ACCESS_CONTROL_MAX_AGE"] = "Access-Control-Max-Age";
    HttpRequestHeader["ACCESS_CONTROL_REQUEST_HEADERS"] = "Access-Control-Request-Headers";
    HttpRequestHeader["ACCESS_CONTROL_REQUEST_METHOD"] = "Access-Control-Request-Method";
    HttpRequestHeader["AGE"] = "Age";
    HttpRequestHeader["ALLOW"] = "Allow";
    HttpRequestHeader["ALT_SVC"] = "Alt-Svc";
    HttpRequestHeader["AUTHORIZATION"] = "Authorization";
    HttpRequestHeader["CACHE_CONTROL"] = "Cache-Control";
    HttpRequestHeader["CLEAR_SITE_DATA"] = "Clear-Site-Data";
    HttpRequestHeader["CONNECTION"] = "Connection";
    HttpRequestHeader["CONTENT_DISPOSITION"] = "Content-Disposition";
    HttpRequestHeader["CONTENT_ENCODING"] = "Content-Encoding";
    HttpRequestHeader["CONTENT_LANGUAGE"] = "Content-Language";
    HttpRequestHeader["CONTENT_LENGTH"] = "Content-Length";
    HttpRequestHeader["CONTENT_LOCATION"] = "Content-Location";
    HttpRequestHeader["CONTENT_RANGE"] = "Content-Range";
    HttpRequestHeader["CONTENT_SECURITY_POLICY"] = "Content-Security-Policy";
    HttpRequestHeader["CONTENT_SECURITY_POLICY_REPORT_ONLY"] = "Content-Security-Policy-Report-Only";
    HttpRequestHeader["CONTENT_TYPE"] = "Content-Type";
    HttpRequestHeader["COOKIE"] = "Cookie";
    HttpRequestHeader["COOKIE2"] = "Cookie2";
    HttpRequestHeader["CROSS_ORIGIN_RESOURCE_POLICY"] = "Cross-Origin-Resource-Policy";
    HttpRequestHeader["DNT"] = "DNT";
    HttpRequestHeader["DPR"] = "DPR";
    HttpRequestHeader["DATE"] = "Date";
    HttpRequestHeader["DEVICE_MEMORY"] = "Device-Memory";
    HttpRequestHeader["DIGEST"] = "Digest";
    HttpRequestHeader["ETAG"] = "ETag";
    HttpRequestHeader["EARLY_DATA"] = "Early-Data";
    HttpRequestHeader["EXPECT"] = "Expect";
    HttpRequestHeader["EXPECT_CT"] = "Expect-CT";
    HttpRequestHeader["EXPIRES"] = "Expires";
    HttpRequestHeader["FEATURE_POLICY"] = "Feature-Policy";
    HttpRequestHeader["FORWARDED"] = "Forwarded";
    HttpRequestHeader["FROM"] = "From";
    HttpRequestHeader["HOST"] = "Host";
    HttpRequestHeader["IF_MATCH"] = "If-Match";
    HttpRequestHeader["IF_MODIFIED_SINCE"] = "If-Modified-Since";
    HttpRequestHeader["IF_NONE_MATCH"] = "If-None-Match";
    HttpRequestHeader["IF_RANGE"] = "If-Range";
    HttpRequestHeader["IF_UNMODIFIED_SINCE"] = "If-Unmodified-Since";
    HttpRequestHeader["INDEX"] = "Index";
    HttpRequestHeader["KEEP_ALIVE"] = "Keep-Alive";
    HttpRequestHeader["LARGE_ALLOCATION"] = "Large-Allocation";
    HttpRequestHeader["LAST_MODIFIED"] = "Last-Modified";
    HttpRequestHeader["LINK"] = "Link";
    HttpRequestHeader["LOCATION"] = "Location";
    HttpRequestHeader["ORIGIN"] = "Origin";
    HttpRequestHeader["PRAGMA"] = "Pragma";
    HttpRequestHeader["PROXY_AUTHENTICATE"] = "Proxy-Authenticate";
    HttpRequestHeader["PROXY_AUTHORIZATION"] = "Proxy-Authorization";
    HttpRequestHeader["PUBLIC_KEY_PINS"] = "Public-Key-Pins";
    HttpRequestHeader["PUBLIC_KEY_PINS_REPORT_ONLY"] = "Public-Key-Pins-Report-Only";
    HttpRequestHeader["RANGE"] = "Range";
    HttpRequestHeader["REFERER"] = "Referer";
    HttpRequestHeader["REFERRER_POLICY"] = "Referrer-Policy";
    HttpRequestHeader["RETRY_AFTER"] = "Retry-After";
    HttpRequestHeader["SAVE_DATA"] = "Save-Data";
    HttpRequestHeader["SEC_WEBSOCKET_ACCEPT"] = "Sec-WebSocket-Accept";
    HttpRequestHeader["SERVER"] = "Server";
    HttpRequestHeader["SERVER_TIMING"] = "Server-Timing";
    HttpRequestHeader["SET_COOKIE"] = "Set-Cookie";
    HttpRequestHeader["SET_COOKIE2"] = "Set-Cookie2";
    HttpRequestHeader["SOURCEMAP"] = "SourceMap";
    HttpRequestHeader["STRICT_TRANSPORT_SECURITY"] = "Strict-Transport-Security";
    HttpRequestHeader["TE"] = "TE";
    HttpRequestHeader["TIMING_ALLOW_ORIGIN"] = "Timing-Allow-Origin";
    HttpRequestHeader["TK"] = "Tk";
    HttpRequestHeader["TRAILER"] = "Trailer";
    HttpRequestHeader["TRANSFER_ENCODING"] = "Transfer-Encoding";
    HttpRequestHeader["UPGRADE_INSECURE_REQUESTS"] = "Upgrade-Insecure-Requests";
    HttpRequestHeader["USER_AGENT"] = "User-Agent";
    HttpRequestHeader["VARY"] = "Vary";
    HttpRequestHeader["VIA"] = "Via";
    HttpRequestHeader["WWW_AUTHENTICATE"] = "WWW-Authenticate";
    HttpRequestHeader["WANT_DIGEST"] = "Want-Digest";
    HttpRequestHeader["WARNING"] = "Warning";
    HttpRequestHeader["X_CONTENT_TYPE_OPTIONS"] = "X-Content-Type-Options";
    HttpRequestHeader["X_DNS_PREFETCH_CONTROL"] = "X-DNS-Prefetch-Control";
    HttpRequestHeader["X_FORWARDED_FOR"] = "X-Forwarded-For";
    HttpRequestHeader["X_FORWARDED_HOST"] = "X-Forwarded-Host";
    HttpRequestHeader["X_FORWARDED_PROTO"] = "X-Forwarded-Proto";
    HttpRequestHeader["X_FRAME_OPTIONS"] = "X-Frame-Options";
    HttpRequestHeader["X_XSS_PROTECTION"] = "X-XSS-Protection";
})(HttpRequestHeader || (HttpRequestHeader = {}));
/**
 * List of Request Methods as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 */
var HttpRequestMethod;
(function (HttpRequestMethod) {
    HttpRequestMethod["ALL"] = "all";
    /**
     * The CONNECT method establishes a tunnel to the server identified by the target  resource.
     */
    HttpRequestMethod["CONNECT"] = "connect";
    /**
     * The DELETE method deletes the specified resource.
     */
    HttpRequestMethod["DELETE"] = "delete";
    /**
     * The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
     */
    HttpRequestMethod["GET"] = "get";
    /**
     * The HEAD method asks for a response identical to that of a GET request, but without the response body.
     */
    HttpRequestMethod["HEAD"] = "head";
    /**
     * The OPTIONS method is used to describe the communication options for the target resource.
     */
    HttpRequestMethod["OPTIONS"] = "options";
    /**
     * The PATCH method is used to apply partial modifications to a resource.
     */
    HttpRequestMethod["PATCH"] = "patch";
    /**
     * The POST method is used to submit an entity to the specified resource, often causing a change in state or side
     * effects on the server.
     */
    HttpRequestMethod["POST"] = "post";
    /**
     * The PUT method replaces all current representations of the target resource with the request payload.
     */
    HttpRequestMethod["PUT"] = "put";
    /**
     * The TRACE method performs a message loop-back test along the path to the target resource.
     */
    HttpRequestMethod["TRACE"] = "trace";
})(HttpRequestMethod || (HttpRequestMethod = {}));

/**
 * Sources for Http Arguments
 */
var HttpArgumentSource;
(function (HttpArgumentSource) {
    HttpArgumentSource["REQUEST"] = "request";
    HttpArgumentSource["RESPONSE"] = "response";
})(HttpArgumentSource || (HttpArgumentSource = {}));
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
            if (!req.cookieParams) {
                return null;
            }
            return key ? req.cookieParams[key] : req.cookieParams;
        });
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
        });
    };
};
/**
 * @Ip()
 */
const Ip = () => {
    return (target, methodKey, parameterIndex) => {
        appendParameterMapper(target, methodKey, parameterIndex, (req) => req.headers[HttpRequestHeader.X_FORWARDED_FOR.toLowerCase()]);
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
        appendParameterMapper(target, methodKey, parameterIndex, (req) => key ? req.routeParams[key] : req.routeParams);
    };
};
/**
 * @Query(key:? string)
 * If key is not mentioned or `null`, will return the entire query object.
 * If key is mentioned and not null, will return a certain property of the query object, defined by the key's value.
 */
const Query = (key) => {
    return (target, methodKey, parameterIndex) => {
        appendParameterMapper(target, methodKey, parameterIndex, (req) => key ? req.queryParams[key] : req.queryParams);
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
        appendParameterMapper(target, methodKey, parameterIndex, (res) => res, HttpArgumentSource.RESPONSE);
    };
};
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
const appendParameterMapper = (target, methodName, parameterIndex, callable, source = HttpArgumentSource.REQUEST) => {
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

class HttpResponse extends ServerResponse {
}

class Http2Response extends Http2ServerResponse {
}

/**
 * List of HTTP Resonse Codes as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 * @link https://github.com/symfony/http-foundation/blob/master/Response.php
 */
var HttpResponseCode;
(function (HttpResponseCode) {
    HttpResponseCode[HttpResponseCode["CONTINUE"] = 100] = "CONTINUE";
    HttpResponseCode[HttpResponseCode["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpResponseCode[HttpResponseCode["PROCESSING"] = 102] = "PROCESSING";
    HttpResponseCode[HttpResponseCode["EARLY_HINTS"] = 103] = "EARLY_HINTS";
    HttpResponseCode[HttpResponseCode["OK"] = 200] = "OK";
    HttpResponseCode[HttpResponseCode["CREATED"] = 201] = "CREATED";
    HttpResponseCode[HttpResponseCode["ACCEPTED"] = 202] = "ACCEPTED";
    HttpResponseCode[HttpResponseCode["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpResponseCode[HttpResponseCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpResponseCode[HttpResponseCode["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpResponseCode[HttpResponseCode["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpResponseCode[HttpResponseCode["MULTI_STATUS"] = 207] = "MULTI_STATUS";
    HttpResponseCode[HttpResponseCode["ALREADY_REPORTED"] = 208] = "ALREADY_REPORTED";
    HttpResponseCode[HttpResponseCode["IM_USED"] = 226] = "IM_USED";
    HttpResponseCode[HttpResponseCode["MULTIPLE_CHOICES"] = 300] = "MULTIPLE_CHOICES";
    HttpResponseCode[HttpResponseCode["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpResponseCode[HttpResponseCode["FOUND"] = 302] = "FOUND";
    HttpResponseCode[HttpResponseCode["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpResponseCode[HttpResponseCode["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpResponseCode[HttpResponseCode["USE_PROXY"] = 305] = "USE_PROXY";
    HttpResponseCode[HttpResponseCode["RESERVED"] = 306] = "RESERVED";
    HttpResponseCode[HttpResponseCode["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpResponseCode[HttpResponseCode["PERMANENTLY_REDIRECT"] = 308] = "PERMANENTLY_REDIRECT";
    HttpResponseCode[HttpResponseCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpResponseCode[HttpResponseCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpResponseCode[HttpResponseCode["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpResponseCode[HttpResponseCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpResponseCode[HttpResponseCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpResponseCode[HttpResponseCode["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpResponseCode[HttpResponseCode["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpResponseCode[HttpResponseCode["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpResponseCode[HttpResponseCode["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpResponseCode[HttpResponseCode["CONFLICT"] = 409] = "CONFLICT";
    HttpResponseCode[HttpResponseCode["GONE"] = 410] = "GONE";
    HttpResponseCode[HttpResponseCode["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpResponseCode[HttpResponseCode["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpResponseCode[HttpResponseCode["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpResponseCode[HttpResponseCode["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpResponseCode[HttpResponseCode["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpResponseCode[HttpResponseCode["RANGE_NOT_SATISFIABLE"] = 416] = "RANGE_NOT_SATISFIABLE";
    HttpResponseCode[HttpResponseCode["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpResponseCode[HttpResponseCode["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
    HttpResponseCode[HttpResponseCode["MISDIRECTED_REQUEST"] = 421] = "MISDIRECTED_REQUEST";
    HttpResponseCode[HttpResponseCode["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpResponseCode[HttpResponseCode["LOCKED"] = 423] = "LOCKED";
    HttpResponseCode[HttpResponseCode["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpResponseCode[HttpResponseCode["TOO_EARLY"] = 425] = "TOO_EARLY";
    HttpResponseCode[HttpResponseCode["UPGRADE_REQUIRED"] = 426] = "UPGRADE_REQUIRED";
    HttpResponseCode[HttpResponseCode["PRECONDITION_REQUIRED"] = 428] = "PRECONDITION_REQUIRED";
    HttpResponseCode[HttpResponseCode["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpResponseCode[HttpResponseCode["REQUEST_HEADER_FIELDS_TOO_LARGE"] = 431] = "REQUEST_HEADER_FIELDS_TOO_LARGE";
    HttpResponseCode[HttpResponseCode["UNAVAILABLE_FOR_LEGAL_REASONS"] = 451] = "UNAVAILABLE_FOR_LEGAL_REASONS";
    HttpResponseCode[HttpResponseCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpResponseCode[HttpResponseCode["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpResponseCode[HttpResponseCode["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpResponseCode[HttpResponseCode["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpResponseCode[HttpResponseCode["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpResponseCode[HttpResponseCode["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
    HttpResponseCode[HttpResponseCode["VARIANT_ALSO_NEGOTIATES"] = 506] = "VARIANT_ALSO_NEGOTIATES";
    HttpResponseCode[HttpResponseCode["INSUFFICIENT_STORAGE"] = 507] = "INSUFFICIENT_STORAGE";
    HttpResponseCode[HttpResponseCode["LOOP_DETECTED"] = 508] = "LOOP_DETECTED";
    HttpResponseCode[HttpResponseCode["NOT_EXTENDED"] = 510] = "NOT_EXTENDED";
    HttpResponseCode[HttpResponseCode["NETWORK_AUTHENTICATION_REQUIRED"] = 511] = "NETWORK_AUTHENTICATION_REQUIRED";
})(HttpResponseCode || (HttpResponseCode = {}));
/**
 * List of HTTP Resonse Messages as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
 */
var HttpResponseMessage;
(function (HttpResponseMessage) {
    HttpResponseMessage["CONTINUE"] = "100 Continue";
    HttpResponseMessage["SWITCHING_PROTOCOLS"] = "101 Switching Protocols";
    HttpResponseMessage["PROCESSING"] = "102 Processing";
    HttpResponseMessage["EARLY_HINTS"] = "103 Early Hints";
    HttpResponseMessage["OK"] = "200 OK";
    HttpResponseMessage["CREATED"] = "201 Created";
    HttpResponseMessage["ACCEPTED"] = "202 Accepted";
    HttpResponseMessage["NON_AUTHORITATIVE_INFORMATION"] = "203 Non-Authoritative Information";
    HttpResponseMessage["NO_CONTENT"] = "204 No Content";
    HttpResponseMessage["RESET_CONTENT"] = "205 Reset Content";
    HttpResponseMessage["PARTIAL_CONTENT"] = "206 Partial Content";
    HttpResponseMessage["MULTI_STATUS"] = "207 Multi-Status";
    HttpResponseMessage["IM_USED"] = "226 IM Used";
    HttpResponseMessage["ALREADY_REPORTED"] = "208 Already Reported";
    HttpResponseMessage["MULTIPLE_CHOICES"] = "300 Multiple Choices";
    HttpResponseMessage["MOVED_PERMANENTLY"] = "301 Moved Permanently";
    HttpResponseMessage["FOUND"] = "302 Found";
    HttpResponseMessage["SEE_OTHER"] = "303 See Other";
    HttpResponseMessage["NOT_MODIFIED"] = "304 Not Modified";
    HttpResponseMessage["USE_PROXY"] = "305 Use Proxy";
    HttpResponseMessage["RESERVED"] = "306 unused";
    HttpResponseMessage["TEMPORARY_REDIRECT"] = "307 Temporary Redirect";
    HttpResponseMessage["PERMANENT_REDIRECT"] = "308 Permanent Redirect";
    HttpResponseMessage["BAD_REQUEST"] = "400 Bad Request";
    HttpResponseMessage["UNAUTHORIZED"] = "401 Unauthorized";
    HttpResponseMessage["PAYMENT_REQUIRED"] = "402 Payment Required";
    HttpResponseMessage["FORBIDDEN"] = "403 Forbidden";
    HttpResponseMessage["NOT_FOUND"] = "404 Not Found";
    HttpResponseMessage["METHOD_NOT_ALLOWED"] = "405 Method Not Allowed";
    HttpResponseMessage["NOT_ACCEPTABLE"] = "406 Not Acceptable";
    HttpResponseMessage["PROXY_AUTHENTICATION_REQUIRED"] = "407 Proxy Authentication Required";
    HttpResponseMessage["REQUEST_TIMEOUT"] = "408 Request Timeout";
    HttpResponseMessage["CONFLICT"] = "409 Conflict";
    HttpResponseMessage["GONE"] = "410 Gone";
    HttpResponseMessage["LENGTH_REQUIRED"] = "411 Length Required";
    HttpResponseMessage["PRECONDITION_FAILED"] = "412 Precondition Failed";
    HttpResponseMessage["PAYLOAD_TOO_LARGE"] = "413 Payload Too Large";
    HttpResponseMessage["URI_TOO_LONG"] = "414 URI Too Long";
    HttpResponseMessage["UNSUPPORTED_MEDIA_TYPE"] = "415 Unsupported Media Type";
    HttpResponseMessage["RANGE_NOT_SATISFIABLE"] = "416 Range Not Satisfiable";
    HttpResponseMessage["EXPECTATION_FAILED"] = "417 Expectation Failed";
    HttpResponseMessage["I_AM_A_TEAPOT"] = "418 I'm a teapot";
    HttpResponseMessage["MISDIRECTED_REQUEST"] = "421 Misdirected Request";
    HttpResponseMessage["UNPROCESSABLE_ENTITY"] = "422 Unprocessable Entity";
    HttpResponseMessage["LOCKED"] = "423 Locked";
    HttpResponseMessage["FAILED_DEPENDENCY"] = "424 Failed Dependency";
    HttpResponseMessage["TOO_EARLY"] = "425 Too Early";
    HttpResponseMessage["UPGRADE_REQUIRED"] = "426 Upgrade Required";
    HttpResponseMessage["PRECONDITION_REQUIRED"] = "428 Precondition Required";
    HttpResponseMessage["TOO_MANY_REQUESTS"] = "429 Too Many Requests";
    HttpResponseMessage["REQUEST_HEADER_FIELDS_TOO_LARGE"] = "431 Request Header Fields Too Large";
    HttpResponseMessage["UNAVAILABLE_FOR_LEGAL_REASONS"] = "451 Unavailable For Legal Reasons";
    HttpResponseMessage["INTERNAL_SERVER_ERROR"] = "500 Internal Server Error";
    HttpResponseMessage["NOT_IMPLEMENTED"] = "501 Not Implemented";
    HttpResponseMessage["BAD_GATEWAY"] = "502 Bad Gateway";
    HttpResponseMessage["SERVICE_UNAVAILABLE"] = "503 Service Unavailable";
    HttpResponseMessage["GATEWAY_TIMEOUT"] = "504 Gateway Timeout";
    HttpResponseMessage["HTTP_VERSION_NOT_SUPPORTED"] = "505 HTTP Version Not Supported";
    HttpResponseMessage["VARIANT_ALSO_NEGOTIATES"] = "506 Variant Also Negotiates";
    HttpResponseMessage["INSUFFICIENT_STORAGE"] = "507 Insufficient Storage";
    HttpResponseMessage["LOOP_DETECTED"] = "508 Loop Detected";
    HttpResponseMessage["NOT_EXTENDED"] = "510 Not Extended";
    HttpResponseMessage["NETWORK_AUTHENTICATION_REQUIRED"] = "511 Network Authentication Required";
})(HttpResponseMessage || (HttpResponseMessage = {}));

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
    constructor(message, error = HttpResponseMessage.UNAUTHORIZED) {
        super(HttpException.createBody(message, error, HttpResponseCode.UNAUTHORIZED), HttpResponseCode.UNAUTHORIZED);
    }
}
/**
 * 402 Payment Required Exception
 */
class PaymentRequiredException extends HttpException {
    constructor(message, error = HttpResponseMessage.PAYMENT_REQUIRED) {
        super(HttpException.createBody(message, error, HttpResponseCode.PAYMENT_REQUIRED), HttpResponseCode.PAYMENT_REQUIRED);
    }
}
/**
 * 403 Forbidden Exception
 */
class ForbiddenException extends HttpException {
    constructor(message, error = HttpResponseMessage.FORBIDDEN) {
        super(HttpException.createBody(message, error, HttpResponseCode.FORBIDDEN), HttpResponseCode.FORBIDDEN);
    }
}
/**
 * 404 Not Found Exception
 */
class NotFoundException extends HttpException {
    constructor(message, error = HttpResponseMessage.NOT_FOUND) {
        super(HttpException.createBody(message, error, HttpResponseCode.NOT_FOUND), HttpResponseCode.NOT_FOUND);
    }
}
/**
 * 405 Method Not Allowed Exception
 */
class MethodNotAllowedException extends HttpException {
    constructor(message, error = HttpResponseMessage.METHOD_NOT_ALLOWED) {
        super(HttpException.createBody(message, error, HttpResponseCode.METHOD_NOT_ALLOWED), HttpResponseCode.METHOD_NOT_ALLOWED);
    }
}
/**
 * 406 Not Acceptable Exception
 */
class NotAcceptableException extends HttpException {
    constructor(message, error = HttpResponseMessage.NOT_ACCEPTABLE) {
        super(HttpException.createBody(message, error, HttpResponseCode.NOT_ACCEPTABLE), HttpResponseCode.NOT_ACCEPTABLE);
    }
}
/**
 * 407 Proxy Authentication Required Exception
 */
class ProxyAuthenticationRequiredException extends HttpException {
    constructor(message, error = HttpResponseMessage.PROXY_AUTHENTICATION_REQUIRED) {
        super(HttpException.createBody(message, error, HttpResponseCode.PROXY_AUTHENTICATION_REQUIRED), HttpResponseCode.PROXY_AUTHENTICATION_REQUIRED);
    }
}
/**
 * 408 Request Timeout Exception
 */
class RequestTimeoutException extends HttpException {
    constructor(message, error = HttpResponseMessage.REQUEST_TIMEOUT) {
        super(HttpException.createBody(message, error, HttpResponseCode.REQUEST_TIMEOUT), HttpResponseCode.REQUEST_TIMEOUT);
    }
}
/**
 * 409 Conflict Exception
 */
class ConflictException extends HttpException {
    constructor(message, error = HttpResponseMessage.CONFLICT) {
        super(HttpException.createBody(message, error, HttpResponseCode.CONFLICT), HttpResponseCode.CONFLICT);
    }
}
/**
 * 410 Gone Exception
 */
class GoneException extends HttpException {
    constructor(message, error = HttpResponseMessage.GONE) {
        super(HttpException.createBody(message, error, HttpResponseCode.GONE), HttpResponseCode.GONE);
    }
}
/**
 * 411 Length Required Exception
 */
class LengthRequiredException extends HttpException {
    constructor(message, error = HttpResponseMessage.LENGTH_REQUIRED) {
        super(HttpException.createBody(message, error, HttpResponseCode.LENGTH_REQUIRED), HttpResponseCode.LENGTH_REQUIRED);
    }
}
/**
 * 412 Precondition Failed Exception
 */
class PreconditionFailedException extends HttpException {
    constructor(message, error = HttpResponseMessage.PRECONDITION_FAILED) {
        super(HttpException.createBody(message, error, HttpResponseCode.PRECONDITION_FAILED), HttpResponseCode.PRECONDITION_FAILED);
    }
}
/**
 * 413 Payload Too Large Exception
 */
class PayloadTooLargeException extends HttpException {
    constructor(message, error = HttpResponseMessage.PAYLOAD_TOO_LARGE) {
        super(HttpException.createBody(message, error, HttpResponseCode.PAYLOAD_TOO_LARGE), HttpResponseCode.PAYLOAD_TOO_LARGE);
    }
}
/**
 * 414 URI Too Long Exception
 */
class URITooLongException extends HttpException {
    constructor(message, error = HttpResponseMessage.URI_TOO_LONG) {
        super(HttpException.createBody(message, error, HttpResponseCode.URI_TOO_LONG), HttpResponseCode.URI_TOO_LONG);
    }
}
/**
 * 415 Unsupported Media Type Exception
 */
class UnsupportedMediaTypeException extends HttpException {
    constructor(message, error = HttpResponseMessage.UNSUPPORTED_MEDIA_TYPE) {
        super(HttpException.createBody(message, error, HttpResponseCode.UNSUPPORTED_MEDIA_TYPE), HttpResponseCode.UNSUPPORTED_MEDIA_TYPE);
    }
}
/**
 * 416 Range Not Satisfiable Exception
 */
class RangeNotSatisfiableException extends HttpException {
    constructor(message, error = HttpResponseMessage.RANGE_NOT_SATISFIABLE) {
        super(HttpException.createBody(message, error, HttpResponseCode.RANGE_NOT_SATISFIABLE), HttpResponseCode.RANGE_NOT_SATISFIABLE);
    }
}
/**
 * 417 Expectation Failed Exception
 */
class ExpectationFailedException extends HttpException {
    constructor(message, error = HttpResponseMessage.EXPECTATION_FAILED) {
        super(HttpException.createBody(message, error, HttpResponseCode.EXPECTATION_FAILED), HttpResponseCode.EXPECTATION_FAILED);
    }
}
/**
 * 418 I'm a teapot Exception
 */
class ImateapotException extends HttpException {
    constructor(message, error = HttpResponseMessage.I_AM_A_TEAPOT) {
        super(HttpException.createBody(message, error, HttpResponseCode.I_AM_A_TEAPOT), HttpResponseCode.I_AM_A_TEAPOT);
    }
}
/**
 * 422 Unprocessable Entity Exception
 */
class UnprocessableEntityException extends HttpException {
    constructor(message, error = HttpResponseMessage.UNPROCESSABLE_ENTITY) {
        super(HttpException.createBody(message, error, HttpResponseCode.UNPROCESSABLE_ENTITY), HttpResponseCode.UNPROCESSABLE_ENTITY);
    }
}
/**
 * 425 Too Early Exception
 */
class TooEarlyException extends HttpException {
    constructor(message, error = HttpResponseMessage.TOO_EARLY) {
        super(HttpException.createBody(message, error, HttpResponseCode.TOO_EARLY), HttpResponseCode.TOO_EARLY);
    }
}
/**
 * 426 Upgrade Required Exception
 */
class UpgradeRequiredException extends HttpException {
    constructor(message, error = HttpResponseMessage.UPGRADE_REQUIRED) {
        super(HttpException.createBody(message, error, HttpResponseCode.UPGRADE_REQUIRED), HttpResponseCode.UPGRADE_REQUIRED);
    }
}
/**
 * 428 Precondition Required Exception
 */
class PreconditionRequiredException extends HttpException {
    constructor(message, error = HttpResponseMessage.PRECONDITION_REQUIRED) {
        super(HttpException.createBody(message, error, HttpResponseCode.PRECONDITION_REQUIRED), HttpResponseCode.PRECONDITION_REQUIRED);
    }
}
/**
 * 429 Too Many Requests Exception
 */
class TooManyRequestsException extends HttpException {
    constructor(message, error = HttpResponseMessage.TOO_MANY_REQUESTS) {
        super(HttpException.createBody(message, error, HttpResponseCode.TOO_MANY_REQUESTS), HttpResponseCode.TOO_MANY_REQUESTS);
    }
}
/**
 * 431 Request Header Fields Too Large Exception
 */
class RequestHeaderFieldsTooLargeException extends HttpException {
    constructor(message, error = HttpResponseMessage.REQUEST_HEADER_FIELDS_TOO_LARGE) {
        super(HttpException.createBody(message, error, HttpResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE), HttpResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE);
    }
}
/**
 * 451 Unavailable For Legal Reasons Exception
 */
class UnavailableForLegalReasonsException extends HttpException {
    constructor(message, error = HttpResponseMessage.UNAVAILABLE_FOR_LEGAL_REASONS) {
        super(HttpException.createBody(message, error, HttpResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS), HttpResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS);
    }
}
/**
 * 500 Internal Server Error Exception
 */
class InternalServerErrorException extends HttpException {
    constructor(message, error = HttpResponseMessage.INTERNAL_SERVER_ERROR) {
        super(HttpException.createBody(message, error, HttpResponseCode.INTERNAL_SERVER_ERROR), HttpResponseCode.INTERNAL_SERVER_ERROR);
    }
}
/**
 * 501 Not Implemented Exception
 */
class NotImplementedException extends HttpException {
    constructor(message, error = HttpResponseMessage.NOT_IMPLEMENTED) {
        super(HttpException.createBody(message, error, HttpResponseCode.NOT_IMPLEMENTED), HttpResponseCode.NOT_IMPLEMENTED);
    }
}
/**
 * 502 Bad Gateway Exception
 */
class BadGatewayException extends HttpException {
    constructor(message, error = HttpResponseMessage.BAD_GATEWAY) {
        super(HttpException.createBody(message, error, HttpResponseCode.BAD_GATEWAY), HttpResponseCode.BAD_GATEWAY);
    }
}
/**
 * 503 Service Unavailable Exception
 */
class ServiceUnavailableException extends HttpException {
    constructor(message, error = HttpResponseMessage.SERVICE_UNAVAILABLE) {
        super(HttpException.createBody(message, error, HttpResponseCode.SERVICE_UNAVAILABLE), HttpResponseCode.SERVICE_UNAVAILABLE);
    }
}
/**
 * 504 Gateway Timeout Exception
 */
class GatewayTimeoutException extends HttpException {
    constructor(message, error = HttpResponseMessage.GATEWAY_TIMEOUT) {
        super(HttpException.createBody(message, error, HttpResponseCode.GATEWAY_TIMEOUT), HttpResponseCode.GATEWAY_TIMEOUT);
    }
}
/**
 * 505 HTTP Version Not Supported Exception
 */
class HTTPVersionNotSupportedException extends HttpException {
    constructor(message, error = HttpResponseMessage.HTTP_VERSION_NOT_SUPPORTED) {
        super(HttpException.createBody(message, error, HttpResponseCode.HTTP_VERSION_NOT_SUPPORTED), HttpResponseCode.HTTP_VERSION_NOT_SUPPORTED);
    }
}
/**
 * 506 Variant Also Negotiates Exception
 */
class VariantAlsoNegotiatesException extends HttpException {
    constructor(message, error = HttpResponseMessage.VARIANT_ALSO_NEGOTIATES) {
        super(HttpException.createBody(message, error, HttpResponseCode.VARIANT_ALSO_NEGOTIATES), HttpResponseCode.VARIANT_ALSO_NEGOTIATES);
    }
}
/**
 * 507 Insufficient Storage Exception
 */
class InsufficientStorageException extends HttpException {
    constructor(message, error = HttpResponseMessage.INSUFFICIENT_STORAGE) {
        super(HttpException.createBody(message, error, HttpResponseCode.INSUFFICIENT_STORAGE), HttpResponseCode.INSUFFICIENT_STORAGE);
    }
}
/**
 * 508 Loop Detected Exception
 */
class LoopDetectedException extends HttpException {
    constructor(message, error = HttpResponseMessage.LOOP_DETECTED) {
        super(HttpException.createBody(message, error, HttpResponseCode.LOOP_DETECTED), HttpResponseCode.LOOP_DETECTED);
    }
}
/**
 * 511 Network Authentication Required Exception
 */
class NetworkAuthenticationRequiredException extends HttpException {
    constructor(message, error = HttpResponseMessage.NETWORK_AUTHENTICATION_REQUIRED) {
        super(HttpException.createBody(message, error, HttpResponseCode.NETWORK_AUTHENTICATION_REQUIRED), HttpResponseCode.NETWORK_AUTHENTICATION_REQUIRED);
    }
}

class MockRequest extends HttpRequest {
    constructor(mock, body, routeParams) {
        super(new Socket(), routeParams);
        this.headers = mock.headers;
        this.method = mock.method;
        this.url = mock.url;
        if (body) {
            this.push(body);
            this.push(null);
        }
        this.cookieParams = this.parseCookieParams();
        this.queryParams = this.parseQueryParams();
    }
}
class MockResponse extends HttpResponse {
    constructor(req, mock) {
        super(req);
        this.statusCode = mock ? mock.statusCode : HttpResponseCode.OK;
        this.statusMessage = mock ? mock.statusMessage : HttpResponseMessage.OK;
        //    this.writableFinished = mock ? mock.writableFinished : true
    }
}
const mockReq = (data, params) => new MockRequest({
    complete: true,
    connection: new Socket(),
    headers: {
        [HttpRequestHeader.COOKIE.toLowerCase()]: 'test=testValue; test2=testValue2',
        [HttpRequestHeader.X_FORWARDED_FOR.toLowerCase()]: '8.8.8.8',
        test: 'testValue',
        test2: 'testValue2',
    },
    httpVersion: '1.1',
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    method: 'GET',
    url: '/test?test=testValue&test2=testValue2',
}, JSON.stringify(data), params);
const mockReqYaml = (data, params) => new MockRequest({
    complete: true,
    connection: new Socket(),
    headers: {
        [HttpRequestHeader.COOKIE.toLowerCase()]: 'test=testValue; test2=testValue2',
        [HttpRequestHeader.X_FORWARDED_FOR.toLowerCase()]: '8.8.8.8',
        test: 'testValue',
        test2: 'testValue2',
    },
    httpVersion: '1.1',
    httpVersionMajor: 1,
    httpVersionMinor: 1,
    method: 'GET',
    url: '/test?test=testValue&test2=testValue2',
}, YAML.stringify(data), params);
const mockRes = (data) => new MockResponse(mockReq(data));

export { BadGatewayException, Body, ConflictException, Cookie, ExpectationFailedException, ForbiddenException, GatewayTimeoutException, GoneException, HTTPVersionNotSupportedException, Header, Http2Request, Http2Response, HttpArgumentSource, HttpException, HttpRequest, HttpRequestHeader, HttpRequestMethod, HttpResponse, HttpResponseCode, HttpResponseMessage, ImateapotException, InsufficientStorageException, InternalServerErrorException, Ip, LengthRequiredException, LoopDetectedException, MethodNotAllowedException, MockRequest, MockResponse, NetworkAuthenticationRequiredException, NotAcceptableException, NotFoundException, NotImplementedException, Param, PayloadTooLargeException, PaymentRequiredException, PreconditionFailedException, PreconditionRequiredException, ProxyAuthenticationRequiredException, Query, RangeNotSatisfiableException, Req, RequestHeaderFieldsTooLargeException, RequestTimeoutException, Res, RespondWith, RespondWithJson, RespondWithRaw, RespondWithYaml, ServiceUnavailableException, TooEarlyException, TooManyRequestsException, URITooLongException, UnauthorizedException, UnavailableForLegalReasonsException, UnprocessableEntityException, UnsupportedMediaTypeException, UpgradeRequiredException, VariantAlsoNegotiatesException, methodArgumentsDescriptor, mockReq, mockReqYaml, mockRes };
