import { Context } from 'koa'

export default class ConfigController {
  public async getConfig (ctx: Context) {
    ctx.body = 'config'
  }
}
