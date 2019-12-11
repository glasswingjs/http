export * from './http'
export * from './http2'

export type HttpRequestBodyDecoder = (val: string) => any

/**
 * List of HTTP headers, as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers
 */
export enum HttpRequestHeader {
  ACCEPT = 'Accept',
  ACCEPT_CH = 'Accept-CH',
  ACCEPT_CH_LIFETIME = 'Accept-CH-Lifetime',
  ACCEPT_CHARSET = 'Accept-Charset',
  ACCEPT_ENCODING = 'Accept-Encoding',
  ACCEPT_LANGUAGE = 'Accept-Language',
  ACCEPT_PATCH = 'Accept-Patch',
  ACCEPT_RANGES = 'Accept-Ranges',
  ACCESS_CONTROL_ALLOW_CREDENTIALS = 'Access-Control-Allow-Credentials',
  ACCESS_CONTROL_ALLOW_HEADERS = 'Access-Control-Allow-Headers',
  ACCESS_CONTROL_ALLOW_METHODS = 'Access-Control-Allow-Methods',
  ACCESS_CONTROL_ALLOW_ORIGIN = 'Access-Control-Allow-Origin',
  ACCESS_CONTROL_EXPOSE_HEADERS = 'Access-Control-Expose-Headers',
  ACCESS_CONTROL_MAX_AGE = 'Access-Control-Max-Age',
  ACCESS_CONTROL_REQUEST_HEADERS = 'Access-Control-Request-Headers',
  ACCESS_CONTROL_REQUEST_METHOD = 'Access-Control-Request-Method',
  AGE = 'Age',
  ALLOW = 'Allow',
  ALT_SVC = 'Alt-Svc',
  AUTHORIZATION = 'Authorization',
  CACHE_CONTROL = 'Cache-Control',
  CLEAR_SITE_DATA = 'Clear-Site-Data',
  CONNECTION = 'Connection',
  CONTENT_DISPOSITION = 'Content-Disposition',
  CONTENT_ENCODING = 'Content-Encoding',
  CONTENT_LANGUAGE = 'Content-Language',
  CONTENT_LENGTH = 'Content-Length',
  CONTENT_LOCATION = 'Content-Location',
  CONTENT_RANGE = 'Content-Range',
  CONTENT_SECURITY_POLICY = 'Content-Security-Policy',
  CONTENT_SECURITY_POLICY_REPORT_ONLY = 'Content-Security-Policy-Report-Only',
  CONTENT_TYPE = 'Content-Type',
  COOKIE = 'Cookie',
  COOKIE2 = 'Cookie2',
  CROSS_ORIGIN_RESOURCE_POLICY = 'Cross-Origin-Resource-Policy',
  DNT = 'DNT',
  DPR = 'DPR',
  DATE = 'Date',
  DEVICE_MEMORY = 'Device-Memory',
  DIGEST = 'Digest',
  ETAG = 'ETag',
  EARLY_DATA = 'Early-Data',
  EXPECT = 'Expect',
  EXPECT_CT = 'Expect-CT',
  EXPIRES = 'Expires',
  FEATURE_POLICY = 'Feature-Policy',
  FORWARDED = 'Forwarded',
  FROM = 'From',
  HOST = 'Host',
  IF_MATCH = 'If-Match',
  IF_MODIFIED_SINCE = 'If-Modified-Since',
  IF_NONE_MATCH = 'If-None-Match',
  IF_RANGE = 'If-Range',
  IF_UNMODIFIED_SINCE = 'If-Unmodified-Since',
  INDEX = 'Index',
  KEEP_ALIVE = 'Keep-Alive',
  LARGE_ALLOCATION = 'Large-Allocation',
  LAST_MODIFIED = 'Last-Modified',
  LINK = 'Link',
  LOCATION = 'Location',
  ORIGIN = 'Origin',
  PRAGMA = 'Pragma',
  PROXY_AUTHENTICATE = 'Proxy-Authenticate',
  PROXY_AUTHORIZATION = 'Proxy-Authorization',
  PUBLIC_KEY_PINS = 'Public-Key-Pins',
  PUBLIC_KEY_PINS_REPORT_ONLY = 'Public-Key-Pins-Report-Only',
  RANGE = 'Range',
  REFERER = 'Referer',
  REFERRER_POLICY = 'Referrer-Policy',
  RETRY_AFTER = 'Retry-After',
  SAVE_DATA = 'Save-Data',
  SEC_WEBSOCKET_ACCEPT = 'Sec-WebSocket-Accept',
  SERVER = 'Server',
  SERVER_TIMING = 'Server-Timing',
  SET_COOKIE = 'Set-Cookie',
  SET_COOKIE2 = 'Set-Cookie2',
  SOURCEMAP = 'SourceMap',
  STRICT_TRANSPORT_SECURITY = 'Strict-Transport-Security',
  TE = 'TE',
  TIMING_ALLOW_ORIGIN = 'Timing-Allow-Origin',
  TK = 'Tk',
  TRAILER = 'Trailer',
  TRANSFER_ENCODING = 'Transfer-Encoding',
  UPGRADE_INSECURE_REQUESTS = 'Upgrade-Insecure-Requests',
  USER_AGENT = 'User-Agent',
  VARY = 'Vary',
  VIA = 'Via',
  WWW_AUTHENTICATE = 'WWW-Authenticate',
  WANT_DIGEST = 'Want-Digest',
  WARNING = 'Warning',
  X_CONTENT_TYPE_OPTIONS = 'X-Content-Type-Options',
  X_DNS_PREFETCH_CONTROL = 'X-DNS-Prefetch-Control',
  X_FORWARDED_FOR = 'X-Forwarded-For',
  X_FORWARDED_HOST = 'X-Forwarded-Host',
  X_FORWARDED_PROTO = 'X-Forwarded-Proto',
  X_FRAME_OPTIONS = 'X-Frame-Options',
  X_XSS_PROTECTION = 'X-XSS-Protection',
}

/**
 * List of Request Methods as described on MDN Documentation
 * @link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods
 */
export enum HttpRequestMethod {
  ALL = 'all',
  /**
   * The CONNECT method establishes a tunnel to the server identified by the target  resource.
   */
  CONNECT = 'connect',
  /**
   * The DELETE method deletes the specified resource.
   */
  DELETE = 'delete',
  /**
   * The GET method requests a representation of the specified resource. Requests using GET should only retrieve data.
   */
  GET = 'get',
  /**
   * The HEAD method asks for a response identical to that of a GET request, but without the response body.
   */
  HEAD = 'head',
  /**
   * The OPTIONS method is used to describe the communication options for the target resource.
   */
  OPTIONS = 'options',
  /**
   * The PATCH method is used to apply partial modifications to a resource.
   */
  PATCH = 'patch',
  /**
   * The POST method is used to submit an entity to the specified resource, often causing a change in state or side
   * effects on the server.
   */
  POST = 'post',

  /**
   * The PUT method replaces all current representations of the target resource with the request payload.
   */
  PUT = 'put',
  /**
   * The TRACE method performs a message loop-back test along the path to the target resource.
   */
  TRACE = 'trace',
}
