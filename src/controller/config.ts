import { Context } from 'koa'
import conf from '../../config'

export default class ConfigController {
  public async getConfig (ctx: Context) {
    ctx.sendSuccessResponse(conf)
  }
}
