/**
 * @module Errors/Connectivity/OpenTok
 */

/**
 * Define errors returned by OpenTok.js
 */

import { get } from '../../util';

export enum OTErrorType {
  JS_EXCEPTION = 'JS_EXCEPTION',
  AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR',
  OT_AUTHENTICATION_ERROR = 'OT_AUTHENTICATION_ERROR',
  OT_INVALID_HTTP_STATUS = 'OT_INVALID_HTTP_STATUS',
  OT_CONNECT_FAILED = 'OT_CONNECT_FAILED',
  INVALID_SESSION_ID = 'INVALID_SESSION_ID',
  CONNECT_FAILED = 'CONNECT_FAILED',
  CONNECT_REJECTED = 'CONNECT_REJECTED',
  CONNECTION_TIMEOUT = 'CONNECTION_TIMEOUT',
  NOT_CONNECTED = 'NOT_CONNECTED',
  INVALID_PARAMETER = 'INVALID_PARAMETER',
  P2P_CONNECTION_FAILED = 'P2P_CONNECTION_FAILED',
  API_RESPONSE_FAILURE = 'API_RESPONSE_FAILURE',
  TERMS_OF_SERVICE_FAILURE = 'TERMS_OF_SERVICE_FAILURE',
  CONNECTION_LIMIT_EXCEEDED = 'CONNECTION_LIMIT_EXCEEDED',
  UNABLE_TO_PUBLISH = 'UNABLE_TO_PUBLISH',
  UNABLE_TO_SUBSCRIBE = 'UNABLE_TO_SUBSCRIBE',
  UNSUPPORTED_VIDEO_CODEC = 'UNSUPPORTED_VIDEO_CODEC',
  UNABLE_TO_FORCE_DISCONNECT = 'UNABLE_TO_FORCE_DISCONNECT',
  UNABLE_TO_FORCE_UNPUBLISH = 'UNABLE_TO_FORCE_UNPUBLISH',
  PUBLISHER_ICE_WORKFLOW_FAILED = 'PUBLISHER_ICE_WORKFLOW_FAILED',
  SUBSCRIBER_ICE_WORKFLOW_FAILED = 'SUBSCRIBER_ICE_WORKFLOW_FAILED',
  STREAM_LIMIT_EXCEEDED = 'STREAM_LIMIT_EXCEEDED',
  UNEXPECTED_SERVER_RESPONSE = 'UNEXPECTED_SERVER_RESPONSE',
  REPORT_ISSUE_ERROR = 'REPORT_ISSUE_ERROR',
  ANVIL_BADLY_FORMED_RESPONSE = 'ANVIL_BADLY_FORMED_RESPONSE',
  ANVIL_INVALID_HTTP_STATUS = 'ANVIL_INVALID_HTTP_STATUS',
  ANVIL_XDOMAIN_OR_PARSING_ERROR = 'ANVIL_XDOMAIN_OR_PARSING_ERROR',
  ANVIL_UNKNOWN_HTTP_ERROR = 'ANVIL_UNKNOWN_HTTP_ERROR',
  ANVIL_UNEXPECTED_ERROR_CODE = 'ANVIL_UNEXPECTED_ERROR_CODE',
  ANVIL_EMPTY_RESPONSE_BODY = 'ANVIL_EMPTY_RESPONSE_BODY',
  ANVIL_CONNECT_FAILED = 'ANVIL_CONNECT_FAILED',
}

export const errorHasName =
  (error: OT.OTError | null = null, name: OTErrorType): boolean => get('name', error) === name;