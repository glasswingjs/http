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

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

var HttpRequest = /** @class */ (function (_super) {
    __extends(HttpRequest, _super);
    /**
     * Constructor
     * @param socket
     * @param routeParams
     */
    function HttpRequest(socket, routeParams) {
        var _this = _super.call(this, socket) || this;
        _this.cookieParams = _this.parseCookieParams();
        _this.routeParams = routeParams;
        _this.queryParams = _this.parseQueryParams();
        return _this;
    }
    /**
     *
     * @param im
     * @param routeParams
     */
    HttpRequest.fromIncommingMessage = function (im, routeParams) {
        var request = im;
        request.cookieParams = request.parseCookieParams();
        request.routeParams = routeParams;
        request.queryParams = request.parseQueryParams();
        return request;
    };
    /**
     * Parse Cookie string
     * @param cookies
     */
    HttpRequest.prototype.parseCookieParams = function (cookies) {
        var cookiesString = cookies ? cookies : (this.headers || {}).cookie || '';
        return SetCookieParser.parse(cookiesString.split('; '), {
            decodeValues: true,
            map: true,
        });
    };
    /**
     * Parse url string
     * @param url
     */
    HttpRequest.prototype.parseQueryParams = function (url) {
        var urlString = url ? url : this.url || '';
        return parse(urlString, true).query;
    };
    /**
     *
     */
    HttpRequest.prototype.toHttpRequest = function () {
        return this;
    };
    return HttpRequest;
}(IncomingMessage));

var Http2Request = /** @class */ (function (_super) {
    __extends(Http2Request, _super);
    /**
     * Constructor
     * @param stream
     * @param headers
     * @param options
     * @param rawHeaders
     * @param routeParams
     */
    function Http2Request(stream, headers, options, rawHeaders, routeParams) {
        var _this = _super.call(this, stream, headers, options, rawHeaders) || this;
        _this.cookieParams = _this.parseCookieParams();
        _this.routeParams = routeParams;
        _this.queryParams = _this.parseQueryParams();
        return _this;
    }
    /**
     *
     * @param im
     * @param routeParams
     */
    Http2Request.fromIncommingMessage = function (im, routeParams) {
        var request = im;
        request.cookieParams = request.parseCookieParams();
        request.routeParams = routeParams;
        request.queryParams = request.parseQueryParams();
        return request;
    };
    /**
     * Parse Cookie string
     * @param cookies
     */
    Http2Request.prototype.parseCookieParams = function (cookies) {
        var cookiesString = cookies ? cookies : (this.headers || {}).cookie || '';
        return SetCookieParser.parse(cookiesString.split('; '), {
            decodeValues: true,
            map: true,
        });
    };
    /**
     * Parse url string
     * @param url
     */
    Http2Request.prototype.parseQueryParams = function (url) {
        var urlString = url ? url : this.url || '';
        return parse(urlString, true).query;
    };
    /**
     *
     */
    Http2Request.prototype.toHttpRequest = function () {
        return this;
    };
    return Http2Request;
}(Http2ServerRequest));

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
var Body = function (key, decoder) {
    if (decoder === void 0) { decoder = JSON.parse; }
    return function (target, methodKey, parameterIndex) {
        var mapper = function (data) { return (key ? data[key] : data); };
        appendParameterMapper(target, methodKey, parameterIndex, function (req) {
            return readRequestBody(req)
                .then(decoder)
                .then(mapper);
        });
    };
};
/**
 * Cookie(key?: string, value?: any)
 * If key is not mentioned or `null`, will return the entire cookies object.
 * If key is mentioned and not null, will return a certain property of the cookies object, defined by the key's
 * value.
 */
var Cookie = function (key, value) {
    return function (target, methodKey, parameterIndex) {
        appendParameterMapper(target, methodKey, parameterIndex, function (req) {
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
var Header = function (key) {
    return function (target, methodKey, parameterIndex) {
        appendParameterMapper(target, methodKey, parameterIndex, function (req) {
            return key ? req.headers[key] : req.headers;
        });
    };
};
/**
 * @Ip()
 */
var Ip = function () {
    return function (target, methodKey, parameterIndex) {
        appendParameterMapper(target, methodKey, parameterIndex, function (req) { return req.headers[HttpRequestHeader.X_FORWARDED_FOR.toLowerCase()]; });
    };
};
/**
 * @Param(key:? string)
 * If key is not mentioned or `null`, will return the entire decoded parameters object.
 * If key is mentioned and not null, will return a certain property of the parameters object, defined by the key's
 * value.
 */
var Param = function (key) {
    return function (target, methodKey, parameterIndex) {
        appendParameterMapper(target, methodKey, parameterIndex, function (req) {
            return key ? req.routeParams[key] : req.routeParams;
        });
    };
};
/**
 * @Query(key:? string)
 * If key is not mentioned or `null`, will return the entire query object.
 * If key is mentioned and not null, will return a certain property of the query object, defined by the key's value.
 */
var Query = function (key) {
    return function (target, methodKey, parameterIndex) {
        appendParameterMapper(target, methodKey, parameterIndex, function (req) {
            return key ? req.queryParams[key] : req.queryParams;
        });
    };
};
/**
 * @Req()
 */
var Req = function () {
    return function (target, methodKey, parameterIndex) {
        appendParameterMapper(target, methodKey, parameterIndex, function (req) { return req; });
    };
};
/**
 * @Res()
 */
var Res = function () {
    return function (target, methodKey, parameterIndex) {
        appendParameterMapper(target, methodKey, parameterIndex, function (res) { return res; }, HttpArgumentSource.RESPONSE);
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
var methodArgumentsDescriptor = function (methodName) {
    return (typeof methodName === 'string' ? methodName : methodName.toString()) + "__Arguments";
};
/**
 *
 * @link https://nodejs.org/es/docs/guides/anatomy-of-an-http-transaction/
 * @param req
 */
var readRequestBody = function (req) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) {
                var body = [];
                req
                    .on('error', function (err) { return reject(err); })
                    .on('data', function (chunk) { return body.push(chunk); })
                    .on('end', function () {
                    var str = Buffer.concat(body).toString();
                    resolve(str);
                });
            })
            /**
             *
             * @param target
             * @param methodName
             * @param parameterIndex
             * @param callable
             * @param source
             */
        ];
    });
}); };
/**
 *
 * @param target
 * @param methodName
 * @param parameterIndex
 * @param callable
 * @param source
 */
var appendParameterMapper = function (target, methodName, parameterIndex, callable, source) {
    if (source === void 0) { source = HttpArgumentSource.REQUEST; }
    // calculate method (name) descriptor
    var methodDescriptor = methodArgumentsDescriptor(methodName);
    // can't set ParameterDescriptor[] type due to creation of an array of zeros
    var metadata = Array(parameterIndex + 1);
    // copy already discovered parameters into the new array
    if (Reflect.hasMetadata(methodDescriptor, target)) {
        var oldMetadata = Reflect.getMetadata(methodDescriptor, target) || [];
        oldMetadata.forEach(function (data, index) {
            metadata[index] = data;
        });
    }
    // add the new discovered parameter descriptor to the array
    metadata[parameterIndex] = {
        callable: callable,
        source: source,
    };
    // set the data back
    Reflect.defineMetadata(methodDescriptor, metadata, target);
};

/**
 * Comment
 *
 * @returns {MethodDecorator}
 */
var RespondWith = function (bodyEncoder) {
    if (bodyEncoder === void 0) { bodyEncoder = function (data) { return data; }; }
    var other = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other[_i - 1] = arguments[_i];
    }
    return function (target, propertyKey, descriptor) {
        var handler = function (oldMethod) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                var result = oldMethod.apply(void 0, args);
                return result instanceof Promise
                    ? result.then(function (data) { return bodyEncoder.apply(void 0, __spreadArrays([data], other)); })
                    : bodyEncoder.apply(void 0, __spreadArrays([result], other));
            };
        };
        return extendClassMethod(descriptor, handler);
    };
};
/**
 * Wrap controller respond with raw data
 *
 * @param args
 */
var RespondWithRaw = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return RespondWith.apply(void 0, __spreadArrays([function (data) { return data; }], args));
};
/**
 * Wrap controller action to encode response into a JSON string
 *
 * @param args
 */
var RespondWithJson = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return RespondWith.apply(void 0, __spreadArrays([JSON.stringify], args));
};
/**
 * Wrap controller action to encode response into a YAML string
 *
 * @param args
 */
var RespondWithYaml = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return RespondWith.apply(void 0, __spreadArrays([YAML.stringify], args));
};

var HttpResponse = /** @class */ (function (_super) {
    __extends(HttpResponse, _super);
    function HttpResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HttpResponse;
}(ServerResponse));

var Http2Response = /** @class */ (function (_super) {
    __extends(Http2Response, _super);
    function Http2Response() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Http2Response;
}(Http2ServerResponse));

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
        if (error === void 0) { error = HttpResponseMessage.UNAUTHORIZED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.UNAUTHORIZED), HttpResponseCode.UNAUTHORIZED) || this;
    }
    return UnauthorizedException;
}(HttpException));
/**
 * 402 Payment Required Exception
 */
var PaymentRequiredException = /** @class */ (function (_super) {
    __extends(PaymentRequiredException, _super);
    function PaymentRequiredException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.PAYMENT_REQUIRED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.PAYMENT_REQUIRED), HttpResponseCode.PAYMENT_REQUIRED) || this;
    }
    return PaymentRequiredException;
}(HttpException));
/**
 * 403 Forbidden Exception
 */
var ForbiddenException = /** @class */ (function (_super) {
    __extends(ForbiddenException, _super);
    function ForbiddenException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.FORBIDDEN; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.FORBIDDEN), HttpResponseCode.FORBIDDEN) || this;
    }
    return ForbiddenException;
}(HttpException));
/**
 * 404 Not Found Exception
 */
var NotFoundException = /** @class */ (function (_super) {
    __extends(NotFoundException, _super);
    function NotFoundException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.NOT_FOUND; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.NOT_FOUND), HttpResponseCode.NOT_FOUND) || this;
    }
    return NotFoundException;
}(HttpException));
/**
 * 405 Method Not Allowed Exception
 */
var MethodNotAllowedException = /** @class */ (function (_super) {
    __extends(MethodNotAllowedException, _super);
    function MethodNotAllowedException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.METHOD_NOT_ALLOWED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.METHOD_NOT_ALLOWED), HttpResponseCode.METHOD_NOT_ALLOWED) || this;
    }
    return MethodNotAllowedException;
}(HttpException));
/**
 * 406 Not Acceptable Exception
 */
var NotAcceptableException = /** @class */ (function (_super) {
    __extends(NotAcceptableException, _super);
    function NotAcceptableException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.NOT_ACCEPTABLE; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.NOT_ACCEPTABLE), HttpResponseCode.NOT_ACCEPTABLE) || this;
    }
    return NotAcceptableException;
}(HttpException));
/**
 * 407 Proxy Authentication Required Exception
 */
var ProxyAuthenticationRequiredException = /** @class */ (function (_super) {
    __extends(ProxyAuthenticationRequiredException, _super);
    function ProxyAuthenticationRequiredException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.PROXY_AUTHENTICATION_REQUIRED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.PROXY_AUTHENTICATION_REQUIRED), HttpResponseCode.PROXY_AUTHENTICATION_REQUIRED) || this;
    }
    return ProxyAuthenticationRequiredException;
}(HttpException));
/**
 * 408 Request Timeout Exception
 */
var RequestTimeoutException = /** @class */ (function (_super) {
    __extends(RequestTimeoutException, _super);
    function RequestTimeoutException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.REQUEST_TIMEOUT; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.REQUEST_TIMEOUT), HttpResponseCode.REQUEST_TIMEOUT) || this;
    }
    return RequestTimeoutException;
}(HttpException));
/**
 * 409 Conflict Exception
 */
var ConflictException = /** @class */ (function (_super) {
    __extends(ConflictException, _super);
    function ConflictException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.CONFLICT; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.CONFLICT), HttpResponseCode.CONFLICT) || this;
    }
    return ConflictException;
}(HttpException));
/**
 * 410 Gone Exception
 */
var GoneException = /** @class */ (function (_super) {
    __extends(GoneException, _super);
    function GoneException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.GONE; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.GONE), HttpResponseCode.GONE) || this;
    }
    return GoneException;
}(HttpException));
/**
 * 411 Length Required Exception
 */
var LengthRequiredException = /** @class */ (function (_super) {
    __extends(LengthRequiredException, _super);
    function LengthRequiredException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.LENGTH_REQUIRED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.LENGTH_REQUIRED), HttpResponseCode.LENGTH_REQUIRED) || this;
    }
    return LengthRequiredException;
}(HttpException));
/**
 * 412 Precondition Failed Exception
 */
var PreconditionFailedException = /** @class */ (function (_super) {
    __extends(PreconditionFailedException, _super);
    function PreconditionFailedException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.PRECONDITION_FAILED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.PRECONDITION_FAILED), HttpResponseCode.PRECONDITION_FAILED) || this;
    }
    return PreconditionFailedException;
}(HttpException));
/**
 * 413 Payload Too Large Exception
 */
var PayloadTooLargeException = /** @class */ (function (_super) {
    __extends(PayloadTooLargeException, _super);
    function PayloadTooLargeException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.PAYLOAD_TOO_LARGE; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.PAYLOAD_TOO_LARGE), HttpResponseCode.PAYLOAD_TOO_LARGE) || this;
    }
    return PayloadTooLargeException;
}(HttpException));
/**
 * 414 URI Too Long Exception
 */
var URITooLongException = /** @class */ (function (_super) {
    __extends(URITooLongException, _super);
    function URITooLongException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.URI_TOO_LONG; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.URI_TOO_LONG), HttpResponseCode.URI_TOO_LONG) || this;
    }
    return URITooLongException;
}(HttpException));
/**
 * 415 Unsupported Media Type Exception
 */
var UnsupportedMediaTypeException = /** @class */ (function (_super) {
    __extends(UnsupportedMediaTypeException, _super);
    function UnsupportedMediaTypeException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.UNSUPPORTED_MEDIA_TYPE; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.UNSUPPORTED_MEDIA_TYPE), HttpResponseCode.UNSUPPORTED_MEDIA_TYPE) || this;
    }
    return UnsupportedMediaTypeException;
}(HttpException));
/**
 * 416 Range Not Satisfiable Exception
 */
var RangeNotSatisfiableException = /** @class */ (function (_super) {
    __extends(RangeNotSatisfiableException, _super);
    function RangeNotSatisfiableException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.RANGE_NOT_SATISFIABLE; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.RANGE_NOT_SATISFIABLE), HttpResponseCode.RANGE_NOT_SATISFIABLE) || this;
    }
    return RangeNotSatisfiableException;
}(HttpException));
/**
 * 417 Expectation Failed Exception
 */
var ExpectationFailedException = /** @class */ (function (_super) {
    __extends(ExpectationFailedException, _super);
    function ExpectationFailedException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.EXPECTATION_FAILED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.EXPECTATION_FAILED), HttpResponseCode.EXPECTATION_FAILED) || this;
    }
    return ExpectationFailedException;
}(HttpException));
/**
 * 418 I'm a teapot Exception
 */
var ImateapotException = /** @class */ (function (_super) {
    __extends(ImateapotException, _super);
    function ImateapotException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.I_AM_A_TEAPOT; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.I_AM_A_TEAPOT), HttpResponseCode.I_AM_A_TEAPOT) || this;
    }
    return ImateapotException;
}(HttpException));
/**
 * 422 Unprocessable Entity Exception
 */
var UnprocessableEntityException = /** @class */ (function (_super) {
    __extends(UnprocessableEntityException, _super);
    function UnprocessableEntityException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.UNPROCESSABLE_ENTITY; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.UNPROCESSABLE_ENTITY), HttpResponseCode.UNPROCESSABLE_ENTITY) || this;
    }
    return UnprocessableEntityException;
}(HttpException));
/**
 * 425 Too Early Exception
 */
var TooEarlyException = /** @class */ (function (_super) {
    __extends(TooEarlyException, _super);
    function TooEarlyException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.TOO_EARLY; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.TOO_EARLY), HttpResponseCode.TOO_EARLY) || this;
    }
    return TooEarlyException;
}(HttpException));
/**
 * 426 Upgrade Required Exception
 */
var UpgradeRequiredException = /** @class */ (function (_super) {
    __extends(UpgradeRequiredException, _super);
    function UpgradeRequiredException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.UPGRADE_REQUIRED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.UPGRADE_REQUIRED), HttpResponseCode.UPGRADE_REQUIRED) || this;
    }
    return UpgradeRequiredException;
}(HttpException));
/**
 * 428 Precondition Required Exception
 */
var PreconditionRequiredException = /** @class */ (function (_super) {
    __extends(PreconditionRequiredException, _super);
    function PreconditionRequiredException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.PRECONDITION_REQUIRED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.PRECONDITION_REQUIRED), HttpResponseCode.PRECONDITION_REQUIRED) || this;
    }
    return PreconditionRequiredException;
}(HttpException));
/**
 * 429 Too Many Requests Exception
 */
var TooManyRequestsException = /** @class */ (function (_super) {
    __extends(TooManyRequestsException, _super);
    function TooManyRequestsException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.TOO_MANY_REQUESTS; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.TOO_MANY_REQUESTS), HttpResponseCode.TOO_MANY_REQUESTS) || this;
    }
    return TooManyRequestsException;
}(HttpException));
/**
 * 431 Request Header Fields Too Large Exception
 */
var RequestHeaderFieldsTooLargeException = /** @class */ (function (_super) {
    __extends(RequestHeaderFieldsTooLargeException, _super);
    function RequestHeaderFieldsTooLargeException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.REQUEST_HEADER_FIELDS_TOO_LARGE; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE), HttpResponseCode.REQUEST_HEADER_FIELDS_TOO_LARGE) || this;
    }
    return RequestHeaderFieldsTooLargeException;
}(HttpException));
/**
 * 451 Unavailable For Legal Reasons Exception
 */
var UnavailableForLegalReasonsException = /** @class */ (function (_super) {
    __extends(UnavailableForLegalReasonsException, _super);
    function UnavailableForLegalReasonsException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.UNAVAILABLE_FOR_LEGAL_REASONS; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS), HttpResponseCode.UNAVAILABLE_FOR_LEGAL_REASONS) || this;
    }
    return UnavailableForLegalReasonsException;
}(HttpException));
/**
 * 500 Internal Server Error Exception
 */
var InternalServerErrorException = /** @class */ (function (_super) {
    __extends(InternalServerErrorException, _super);
    function InternalServerErrorException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.INTERNAL_SERVER_ERROR; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.INTERNAL_SERVER_ERROR), HttpResponseCode.INTERNAL_SERVER_ERROR) || this;
    }
    return InternalServerErrorException;
}(HttpException));
/**
 * 501 Not Implemented Exception
 */
var NotImplementedException = /** @class */ (function (_super) {
    __extends(NotImplementedException, _super);
    function NotImplementedException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.NOT_IMPLEMENTED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.NOT_IMPLEMENTED), HttpResponseCode.NOT_IMPLEMENTED) || this;
    }
    return NotImplementedException;
}(HttpException));
/**
 * 502 Bad Gateway Exception
 */
var BadGatewayException = /** @class */ (function (_super) {
    __extends(BadGatewayException, _super);
    function BadGatewayException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.BAD_GATEWAY; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.BAD_GATEWAY), HttpResponseCode.BAD_GATEWAY) || this;
    }
    return BadGatewayException;
}(HttpException));
/**
 * 503 Service Unavailable Exception
 */
var ServiceUnavailableException = /** @class */ (function (_super) {
    __extends(ServiceUnavailableException, _super);
    function ServiceUnavailableException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.SERVICE_UNAVAILABLE; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.SERVICE_UNAVAILABLE), HttpResponseCode.SERVICE_UNAVAILABLE) || this;
    }
    return ServiceUnavailableException;
}(HttpException));
/**
 * 504 Gateway Timeout Exception
 */
var GatewayTimeoutException = /** @class */ (function (_super) {
    __extends(GatewayTimeoutException, _super);
    function GatewayTimeoutException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.GATEWAY_TIMEOUT; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.GATEWAY_TIMEOUT), HttpResponseCode.GATEWAY_TIMEOUT) || this;
    }
    return GatewayTimeoutException;
}(HttpException));
/**
 * 505 HTTP Version Not Supported Exception
 */
var HTTPVersionNotSupportedException = /** @class */ (function (_super) {
    __extends(HTTPVersionNotSupportedException, _super);
    function HTTPVersionNotSupportedException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.HTTP_VERSION_NOT_SUPPORTED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.HTTP_VERSION_NOT_SUPPORTED), HttpResponseCode.HTTP_VERSION_NOT_SUPPORTED) || this;
    }
    return HTTPVersionNotSupportedException;
}(HttpException));
/**
 * 506 Variant Also Negotiates Exception
 */
var VariantAlsoNegotiatesException = /** @class */ (function (_super) {
    __extends(VariantAlsoNegotiatesException, _super);
    function VariantAlsoNegotiatesException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.VARIANT_ALSO_NEGOTIATES; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.VARIANT_ALSO_NEGOTIATES), HttpResponseCode.VARIANT_ALSO_NEGOTIATES) || this;
    }
    return VariantAlsoNegotiatesException;
}(HttpException));
/**
 * 507 Insufficient Storage Exception
 */
var InsufficientStorageException = /** @class */ (function (_super) {
    __extends(InsufficientStorageException, _super);
    function InsufficientStorageException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.INSUFFICIENT_STORAGE; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.INSUFFICIENT_STORAGE), HttpResponseCode.INSUFFICIENT_STORAGE) || this;
    }
    return InsufficientStorageException;
}(HttpException));
/**
 * 508 Loop Detected Exception
 */
var LoopDetectedException = /** @class */ (function (_super) {
    __extends(LoopDetectedException, _super);
    function LoopDetectedException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.LOOP_DETECTED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.LOOP_DETECTED), HttpResponseCode.LOOP_DETECTED) || this;
    }
    return LoopDetectedException;
}(HttpException));
/**
 * 511 Network Authentication Required Exception
 */
var NetworkAuthenticationRequiredException = /** @class */ (function (_super) {
    __extends(NetworkAuthenticationRequiredException, _super);
    function NetworkAuthenticationRequiredException(message, error) {
        if (error === void 0) { error = HttpResponseMessage.NETWORK_AUTHENTICATION_REQUIRED; }
        return _super.call(this, HttpException.createBody(message, error, HttpResponseCode.NETWORK_AUTHENTICATION_REQUIRED), HttpResponseCode.NETWORK_AUTHENTICATION_REQUIRED) || this;
    }
    return NetworkAuthenticationRequiredException;
}(HttpException));

var MockRequest = /** @class */ (function (_super) {
    __extends(MockRequest, _super);
    function MockRequest(mock, body, routeParams) {
        var _this = _super.call(this, new Socket(), routeParams) || this;
        _this.headers = mock.headers;
        _this.method = mock.method;
        _this.url = mock.url;
        if (body) {
            _this.push(body);
            _this.push(null);
        }
        _this.cookieParams = _this.parseCookieParams();
        _this.queryParams = _this.parseQueryParams();
        return _this;
    }
    return MockRequest;
}(HttpRequest));
var MockResponse = /** @class */ (function (_super) {
    __extends(MockResponse, _super);
    function MockResponse(req, mock) {
        var _this = _super.call(this, req) || this;
        _this.statusCode = mock ? mock.statusCode : HttpResponseCode.OK;
        _this.statusMessage = mock ? mock.statusMessage : HttpResponseMessage.OK;
        return _this;
        //    this.writableFinished = mock ? mock.writableFinished : true
    }
    return MockResponse;
}(HttpResponse));
var mockReq = function (data, params) {
    var _a;
    return new MockRequest({
        complete: true,
        connection: new Socket(),
        headers: (_a = {},
            _a[HttpRequestHeader.COOKIE.toLowerCase()] = 'test=testValue; test2=testValue2',
            _a[HttpRequestHeader.X_FORWARDED_FOR.toLowerCase()] = '8.8.8.8',
            _a.test = 'testValue',
            _a.test2 = 'testValue2',
            _a),
        httpVersion: '1.1',
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        method: 'GET',
        url: '/test?test=testValue&test2=testValue2',
    }, JSON.stringify(data), params);
};
var mockReqYaml = function (data, params) {
    var _a;
    return new MockRequest({
        complete: true,
        connection: new Socket(),
        headers: (_a = {},
            _a[HttpRequestHeader.COOKIE.toLowerCase()] = 'test=testValue; test2=testValue2',
            _a[HttpRequestHeader.X_FORWARDED_FOR.toLowerCase()] = '8.8.8.8',
            _a.test = 'testValue',
            _a.test2 = 'testValue2',
            _a),
        httpVersion: '1.1',
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        method: 'GET',
        url: '/test?test=testValue&test2=testValue2',
    }, YAML.stringify(data), params);
};
var mockRes = function (data) { return new MockResponse(mockReq(data)); };

export { BadGatewayException, Body, ConflictException, Cookie, ExpectationFailedException, ForbiddenException, GatewayTimeoutException, GoneException, HTTPVersionNotSupportedException, Header, Http2Request, Http2Response, HttpArgumentSource, HttpException, HttpRequest, HttpRequestHeader, HttpRequestMethod, HttpResponse, HttpResponseCode, HttpResponseMessage, ImateapotException, InsufficientStorageException, InternalServerErrorException, Ip, LengthRequiredException, LoopDetectedException, MethodNotAllowedException, MockRequest, MockResponse, NetworkAuthenticationRequiredException, NotAcceptableException, NotFoundException, NotImplementedException, Param, PayloadTooLargeException, PaymentRequiredException, PreconditionFailedException, PreconditionRequiredException, ProxyAuthenticationRequiredException, Query, RangeNotSatisfiableException, Req, RequestHeaderFieldsTooLargeException, RequestTimeoutException, Res, RespondWith, RespondWithJson, RespondWithRaw, RespondWithYaml, ServiceUnavailableException, TooEarlyException, TooManyRequestsException, URITooLongException, UnauthorizedException, UnavailableForLegalReasonsException, UnprocessableEntityException, UnsupportedMediaTypeException, UpgradeRequiredException, VariantAlsoNegotiatesException, methodArgumentsDescriptor, mockReq, mockReqYaml, mockRes };
