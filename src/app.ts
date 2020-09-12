import Koa from 'koa'
import validator from 'koa-async-validator'
import bodyParser from 'koa-bodyparser'
import loggerMiddleware from './middlewares/logger'
import responseMiddleware from './middlewares/response'
import router from './router'

const app = new Koa()

app
  .use(bodyParser())
  .use(validator())
  .use(loggerMiddleware)
  .use(responseMiddleware)
  .use(router.routes())

app.on('error', (err, ctx) => {
  ctx.logger.error('------ Uncaught Error ------')
  ctx.logger.error(err.stack)
  ctx.logger.error(JSON.stringify(ctx.request))
  ctx.logger.error('------ Uncaught Error ------')
})

export default app
