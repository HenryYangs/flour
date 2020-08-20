import Koa from 'koa'
import validator from 'koa-async-validator'
import bodyParser from 'koa-bodyparser'
import responseMiddleware from './middlewares/response'
import router from './router'

const app = new Koa()

app
  .use(bodyParser())
  .use(validator())
  .use(responseMiddleware)
  .use(router.routes())

// app.on('error', () => {

// })

export default app
