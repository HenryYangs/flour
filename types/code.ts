export enum HTTP_CODE {
  UNKNOWN = -1,
  SUCCESS = 0,
  DEFAULT_ERROR = 500,
  PARAM_ERROR = 400,
  AUTH_FAILURE = 401,
  NO_PERMISSION = 403,
}

export const HTTP_CODE_INFO = {
  [HTTP_CODE.UNKNOWN]: 'InternalError.UnknownError',
  [HTTP_CODE.SUCCESS]: 'Success',
  [HTTP_CODE.DEFAULT_ERROR]: 'InternalError',
  [HTTP_CODE.PARAM_ERROR]: 'InvalidParameter',
  [HTTP_CODE.AUTH_FAILURE]: 'AuthFailure',
  [HTTP_CODE.NO_PERMISSION]: 'PermissionFailure',
} as Record<HTTP_CODE, string>

export const HTTP_CODE_MSG = {
  [HTTP_CODE.UNKNOWN]: '未知错误',
  [HTTP_CODE.SUCCESS]: '请求成功',
  [HTTP_CODE.DEFAULT_ERROR]: '服务器错误',
  [HTTP_CODE.PARAM_ERROR]: '参数错误',
  [HTTP_CODE.AUTH_FAILURE]: '身份校验错误',
  [HTTP_CODE.NO_PERMISSION]: '权限错误',
} as Record<HTTP_CODE, string>
