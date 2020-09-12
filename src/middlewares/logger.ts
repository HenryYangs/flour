import { Context } from 'koa'
import logger from '../../logger'

const loggerInstance = logger()

export default async (ctx: Context, next: () => void) => {
  ctx.logger = loggerInstance

  await next()
}
