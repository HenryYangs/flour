import { Context, ParameterizedContext } from 'koa'
import { IBaseResponse, ISuccessResponse } from '../../types'
import { HTTP_CODE, HTTP_CODE_INFO, HTTP_CODE_MSG } from '../../types/code'

const sendSuccessResponse = function (
  this: ParameterizedContext,
  body: ISuccessResponse,
) {
  const successCode = HTTP_CODE.SUCCESS

  this.body = {
    code: successCode,
    message: HTTP_CODE_INFO[successCode],
    data: body,
  }
}

const sendErrorResponse = function (
  this: ParameterizedContext,
  error: IBaseResponse | keyof typeof HTTP_CODE,
) {
  let code = null
  let message = ''

  if (typeof error === 'string') {
    code = HTTP_CODE[error || 'DEFAULT_ERROR']
    message = HTTP_CODE_MSG[code]
  } else {
    code = error.code
    message = error.message
  }

  this.body = {
    code,
    message,
  }
}

const wrapperResponse = function (this: ParameterizedContext, res: any) {
  if (res && res.code) {
    this.sendErrorResponse(res)
  } else {
    this.sendSuccessResponse(res)
  }
}

const capturedErrorHandler = (ctx: Context, error: IBaseResponse) => {
  if (error.code) {
    const code = HTTP_CODE[error.code as HTTP_CODE]

    ctx.sendErrorResponse({
      code,
      message:
        HTTP_CODE_MSG[error.code as HTTP_CODE] ||
        HTTP_CODE_MSG[HTTP_CODE.DEFAULT_ERROR],
    })
  } else {
    const defaultCode = HTTP_CODE.DEFAULT_ERROR

    ctx.sendErrorResponse({
      code: defaultCode,
      message: HTTP_CODE_MSG[defaultCode],
    })
  }
}

export default async (ctx: Context, next: () => void) => {
  ctx.sendSuccessResponse = sendSuccessResponse.bind(ctx)
  ctx.sendErrorResponse = sendErrorResponse.bind(ctx)
  ctx.wrapperResponse = wrapperResponse.bind(ctx)

  try {
    await next()
  } catch (error) {
    capturedErrorHandler(ctx, error)
  }
}
