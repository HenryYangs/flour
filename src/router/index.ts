import Router from 'koa-router'
import confRouter from './config'

const router = new Router()

router.use('/config', confRouter.routes())

export default router
