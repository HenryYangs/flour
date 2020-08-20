import { HTTP_CODE, HTTP_CODE_INFO, HTTP_CODE_MSG } from './code'

type ValueOf<T> = T[keyof T]

export interface IBaseResponse {
  code: HTTP_CODE
  message: ValueOf<typeof HTTP_CODE_INFO> & ValueOf<typeof HTTP_CODE_MSG>
}

export interface ISuccessResponse extends IBaseResponse {
  data: any
}
