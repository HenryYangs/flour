import { Context } from 'koa'
import conf from '../../config'

export default class ConfigController {
  public async getConfig (ctx: Context) {
    console.log(ctx.query)
    ctx.sendSuccessResponse(conf)
  }
}
