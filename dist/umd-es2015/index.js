(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('reflect-metadata'), require('http'), require('set-cookie-parser'), require('url'), require('http2'), require('@glasswing/common'), require('yaml'), require('net')) :
    typeof define === 'function' && define.amd ? define(['exports', 'reflect-metadata', 'http', 'set-cookie-parser', 'url', 'http2', '@glasswing/common', 'yaml', 'net'], factory) :
    (global = global || self, factory((global.gw = global.gw || {}, global.gw.http = {}), null, global.http, global.SetCookieParser, global.url, global.http2, global.common, global.YAML, global.net));
}(this, (function (exports, reflectMetadata, http, SetCookieParser, url, http2, common, YAML, net) { 'use strict';

    SetCookieParser = SetCookieParser && SetCookieParser.hasOwnProperty('default') ? SetCookieParser['default'] : SetCookieParser;
    YAML = YAML && YAML.hasOwnProperty('default') ? YAML['default'] : YAML;

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

    class HttpRequest extends http.IncomingMessage {
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
         *
         * @param im
         * @param routeParams
         */
        static fromIncommingMessage(im, routeParams) {
            const request = im;
            request.cookieParams = request.parseCookieParams();
            request.routeParams = routeParams;
            request.queryParams = request.parseQueryParams();
            return request;
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
        parseQueryParams(url$1) {
            const urlString = url$1 ? url$1 : this.url || '';
            return url.parse(urlString, true).query;
        }
        /**
         *
         */
        toHttpRequest() {
            return this;
        }
    }

    class Http2Request extends http2.Http2ServerRequest {
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
         *
         * @param im
         * @param routeParams
         */
        static fromIncommingMessage(im, routeParams) {
            const request = im;
            request.cookieParams = request.parseCookieParams();
            request.routeParams = routeParams;
            request.queryParams = request.parseQueryParams();
            return request;
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
        parseQueryParams(url$1) {
            const urlString = url$1 ? url$1 : this.url || '';
            return url.parse(urlString, true).query;
        }
        /**
         *
         */
        toHttpRequest() {
            return this;
        }
    }

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
    })(exports.HttpRequestHeader || (exports.HttpRequestHeader = {}));
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
    })(exports.HttpRequestMethod || (exports.HttpRequestMethod = {}));

    (function (HttpArgumentSource) {
        HttpArgumentSource["REQUEST"] = "request";
        HttpArgumentSource["RESPONSE"] = "response";
    })(exports.HttpArgumentSource || (exports.HttpArgumentSource = {}));
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
            appendParameterMapper(target, methodKey, parameterIndex, (req) => req.headers[exports.HttpRequestHeader.X_FORWARDED_FOR.toLowerCase()]);
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
            appendParameterMapper(target, methodKey, parameterIndex, (res) => res, exports.HttpArgumentSource.RESPONSE);
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
    const appendParameterMapper = (target, methodName, parameterIndex, callable, source = exports.HttpArgumentSource.REQUEST) => {
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
        return common.extendClassMethod(descriptor, handler);
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

    class HttpResponse extends http.ServerResponse {
    }

    class Http2Response extends http2.Http2ServerResponse {
    }

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
    })(exports.HttpResponseCode || (exports.HttpResponseCode = {}));
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
    })(exports.HttpResponseMessage || (exports.HttpResponseMessage = {}));

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
        constructor(message, error = exports.HttpResponseMessage.UNAUTHORIZED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.UNAUTHORIZED), exports.HttpResponseCode.UNAUTHORIZED);
        }
    }
    /**
     * 402 Payment Required Exception
     */
    class PaymentRequiredException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.PAYMENT_REQUIRED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.PAYMENT_REQUIRED), exports.HttpResponseCode.PAYMENT_REQUIRED);
        }
    }
    /**
     * 403 Forbidden Exception
     */
    class ForbiddenException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.FORBIDDEN) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.FORBIDDEN), exports.HttpResponseCode.FORBIDDEN);
        }
    }
    /**
     * 404 Not Found Exception
     */
    class NotFoundException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.NOT_FOUND) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.NOT_FOUND), exports.HttpResponseCode.NOT_FOUND);
        }
    }
    /**
     * 405 Method Not Allowed Exception
     */
    class MethodNotAllowedException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.METHOD_NOT_ALLOWED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.METHOD_NOT_ALLOWED), exports.HttpResponseCode.METHOD_NOT_ALLOWED);
        }
    }
    /**
     * 406 Not Acceptable Exception
     */
    class NotAcceptableException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.NOT_ACCEPTABLE) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.NOT_ACCEPTABLE), exports.HttpResponseCode.NOT_ACCEPTABLE);
        }
    }
    /**
     * 407 Proxy Authentication Required Exception
     */
    class ProxyAuthenticationRequiredException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.PROXY_AUTHENTICATION_REQUIRED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.PROXY_AUTHENTICATION_REQUIRED), exports.HttpResponseCode.PROXY_AUTHENTICATION_REQUIRED);
        }
    }
    /**
     * 408 Request Timeout Exception
     */
    class RequestTimeoutException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.REQUEST_TIMEOUT) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.REQUEST_TIMEOUT), exports.HttpResponseCode.REQUEST_TIMEOUT);
        }
    }
    /**
     * 409 Conflict Exception
     */
    class ConflictException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.CONFLICT) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.CONFLICT), exports.HttpResponseCode.CONFLICT);
        }
    }
    /**
     * 410 Gone Exception
     */
    class GoneException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.GONE) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.GONE), exports.HttpResponseCode.GONE);
        }
    }
    /**
     * 411 Length Required Exception
     */
    class LengthRequiredException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.LENGTH_REQUIRED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.LENGTH_REQUIRED), exports.HttpResponseCode.LENGTH_REQUIRED);
        }
    }
    /**
     * 412 Precondition Failed Exception
     */
    class PreconditionFailedException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.PRECONDITION_FAILED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.PRECONDITION_FAILED), exports.HttpResponseCode.PRECONDITION_FAILED);
        }
    }
    /**
     * 413 Payload Too Large Exception
     */
    class PayloadTooLargeException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.PAYLOAD_TOO_LARGE) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.PAYLOAD_TOO_LARGE), exports.HttpResponseCode.PAYLOAD_TOO_LARGE);
        }
    }
    /**
     * 414 URI Too Long Exception
     */
    class URITooLongException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.URI_TOO_LONG) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.URI_TOO_LONG), exports.HttpResponseCode.URI_TOO_LONG);
        }
    }
    /**
     * 415 Unsupported Media Type Exception
     */
    class UnsupportedMediaTypeException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.UNSUPPORTED_MEDIA_TYPE) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.UNSUPPORTED_MEDIA_TYPE), exports.HttpResponseCode.UNSUPPORTED_MEDIA_TYPE);
        }
    }
    /**
     * 416 Range Not Satisfiable Exception
     */
    class RangeNotSatisfiableException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.RANGE_NOT_SATISFIABLE) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.RANGE_NOT_SATISFIABLE), exports.HttpResponseCode.RANGE_NOT_SATISFIABLE);
        }
    }
    /**
     * 417 Expectation Failed Exception
     */
    class ExpectationFailedException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.EXPECTATION_FAILED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.EXPECTATION_FAILED), exports.HttpResponseCode.EXPECTATION_FAILED);
        }
    }
    /**
     * 418 I'm a teapot Exception
     */
    class ImateapotException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.I_AM_A_TEAPOT) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.I_AM_A_TEAPOT), exports.HttpResponseCode.I_AM_A_TEAPOT);
        }
    }
    /**
     * 422 Unprocessable Entity Exception
     */
    class UnprocessableEntityException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.UNPROCESSABLE_ENTITY) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.UNPROCESSABLE_ENTITY), exports.HttpResponseCode.UNPROCESSABLE_ENTITY);
        }
    }
    /**
     * 425 Too Early Exception
     */
    class TooEarlyException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.TOO_EARLY) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.TOO_EARLY), exports.HttpResponseCode.TOO_EARLY);
        }
    }
    /**
     * 426 Upgrade Required Exception
     */
    class UpgradeRequiredException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.UPGRADE_REQUIRED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.UPGRADE_REQUIRED), exports.HttpResponseCode.UPGRADE_REQUIRED);
        }
    }
    /**
     * 428 Precondition Required Exception
     */
    class PreconditionRequiredException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.PRECONDITION_REQUIRED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.PRECONDITION_REQUIRED), exports.HttpResponseCode.PRECONDITION_REQUIRED);
        }
    }
    /**
     * 429 Too Many Requests Exception
     */
    class TooManyRequestsException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.TOO_MANY_REQUESTS) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.TOO_MANY_REQUESTS), exports.HttpResponseCode.TOO_MANY_REQUESTS);
        }
    }
    /**
     * 431 Request Header Fields Too Large Exception
     */
    class RequestHeaderFieldsTooLargeException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.REQUEST_HEADER_FIELDS_TOO_LARGE) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE), exports.HttpResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE);
        }
    }
    /**
     * 451 Unavailable For Legal Reasons Exception
     */
    class UnavailableForLegalReasonsException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.UNAVAILABLE_FOR_LEGAL_REASONS) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS), exports.HttpResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS);
        }
    }
    /**
     * 500 Internal Server Error Exception
     */
    class InternalServerErrorException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.INTERNAL_SERVER_ERROR) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.INTERNAL_SERVER_ERROR), exports.HttpResponseCode.INTERNAL_SERVER_ERROR);
        }
    }
    /**
     * 501 Not Implemented Exception
     */
    class NotImplementedException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.NOT_IMPLEMENTED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.NOT_IMPLEMENTED), exports.HttpResponseCode.NOT_IMPLEMENTED);
        }
    }
    /**
     * 502 Bad Gateway Exception
     */
    class BadGatewayException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.BAD_GATEWAY) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.BAD_GATEWAY), exports.HttpResponseCode.BAD_GATEWAY);
        }
    }
    /**
     * 503 Service Unavailable Exception
     */
    class ServiceUnavailableException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.SERVICE_UNAVAILABLE) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.SERVICE_UNAVAILABLE), exports.HttpResponseCode.SERVICE_UNAVAILABLE);
        }
    }
    /**
     * 504 Gateway Timeout Exception
     */
    class GatewayTimeoutException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.GATEWAY_TIMEOUT) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.GATEWAY_TIMEOUT), exports.HttpResponseCode.GATEWAY_TIMEOUT);
        }
    }
    /**
     * 505 HTTP Version Not Supported Exception
     */
    class HTTPVersionNotSupportedException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.HTTP_VERSION_NOT_SUPPORTED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.HTTP_VERSION_NOT_SUPPORTED), exports.HttpResponseCode.HTTP_VERSION_NOT_SUPPORTED);
        }
    }
    /**
     * 506 Variant Also Negotiates Exception
     */
    class VariantAlsoNegotiatesException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.VARIANT_ALSO_NEGOTIATES) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.VARIANT_ALSO_NEGOTIATES), exports.HttpResponseCode.VARIANT_ALSO_NEGOTIATES);
        }
    }
    /**
     * 507 Insufficient Storage Exception
     */
    class InsufficientStorageException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.INSUFFICIENT_STORAGE) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.INSUFFICIENT_STORAGE), exports.HttpResponseCode.INSUFFICIENT_STORAGE);
        }
    }
    /**
     * 508 Loop Detected Exception
     */
    class LoopDetectedException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.LOOP_DETECTED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.LOOP_DETECTED), exports.HttpResponseCode.LOOP_DETECTED);
        }
    }
    /**
     * 511 Network Authentication Required Exception
     */
    class NetworkAuthenticationRequiredException extends HttpException {
        constructor(message, error = exports.HttpResponseMessage.NETWORK_AUTHENTICATION_REQUIRED) {
            super(HttpException.createBody(message, error, exports.HttpResponseCode.NETWORK_AUTHENTICATION_REQUIRED), exports.HttpResponseCode.NETWORK_AUTHENTICATION_REQUIRED);
        }
    }

    class MockRequest extends HttpRequest {
        constructor(mock, body, routeParams) {
            super(new net.Socket(), routeParams);
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
            this.statusCode = mock ? mock.statusCode : exports.HttpResponseCode.OK;
            this.statusMessage = mock ? mock.statusMessage : exports.HttpResponseMessage.OK;
            //    this.writableFinished = mock ? mock.writableFinished : true
        }
    }
    const mockReq = (data, params) => new MockRequest({
        complete: true,
        connection: new net.Socket(),
        headers: {
            [exports.HttpRequestHeader.COOKIE.toLowerCase()]: 'test=testValue; test2=testValue2',
            [exports.HttpRequestHeader.X_FORWARDED_FOR.toLowerCase()]: '8.8.8.8',
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
        connection: new net.Socket(),
        headers: {
            [exports.HttpRequestHeader.COOKIE.toLowerCase()]: 'test=testValue; test2=testValue2',
            [exports.HttpRequestHeader.X_FORWARDED_FOR.toLowerCase()]: '8.8.8.8',
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

    exports.BadGatewayException = BadGatewayException;
    exports.Body = Body;
    exports.ConflictException = ConflictException;
    exports.Cookie = Cookie;
    exports.ExpectationFailedException = ExpectationFailedException;
    exports.ForbiddenException = ForbiddenException;
    exports.GatewayTimeoutException = GatewayTimeoutException;
    exports.GoneException = GoneException;
    exports.HTTPVersionNotSupportedException = HTTPVersionNotSupportedException;
    exports.Header = Header;
    exports.Http2Request = Http2Request;
    exports.Http2Response = Http2Response;
    exports.HttpException = HttpException;
    exports.HttpRequest = HttpRequest;
    exports.HttpResponse = HttpResponse;
    exports.ImateapotException = ImateapotException;
    exports.InsufficientStorageException = InsufficientStorageException;
    exports.InternalServerErrorException = InternalServerErrorException;
    exports.Ip = Ip;
    exports.LengthRequiredException = LengthRequiredException;
    exports.LoopDetectedException = LoopDetectedException;
    exports.MethodNotAllowedException = MethodNotAllowedException;
    exports.MockRequest = MockRequest;
    exports.MockResponse = MockResponse;
    exports.NetworkAuthenticationRequiredException = NetworkAuthenticationRequiredException;
    exports.NotAcceptableException = NotAcceptableException;
    exports.NotFoundException = NotFoundException;
    exports.NotImplementedException = NotImplementedException;
    exports.Param = Param;
    exports.PayloadTooLargeException = PayloadTooLargeException;
    exports.PaymentRequiredException = PaymentRequiredException;
    exports.PreconditionFailedException = PreconditionFailedException;
    exports.PreconditionRequiredException = PreconditionRequiredException;
    exports.ProxyAuthenticationRequiredException = ProxyAuthenticationRequiredException;
    exports.Query = Query;
    exports.RangeNotSatisfiableException = RangeNotSatisfiableException;
    exports.Req = Req;
    exports.RequestHeaderFieldsTooLargeException = RequestHeaderFieldsTooLargeException;
    exports.RequestTimeoutException = RequestTimeoutException;
    exports.Res = Res;
    exports.RespondWith = RespondWith;
    exports.RespondWithJson = RespondWithJson;
    exports.RespondWithRaw = RespondWithRaw;
    exports.RespondWithYaml = RespondWithYaml;
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
    exports.methodArgumentsDescriptor = methodArgumentsDescriptor;
    exports.mockReq = mockReq;
    exports.mockReqYaml = mockReqYaml;
    exports.mockRes = mockRes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
