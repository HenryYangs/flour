import Router from 'koa-router'
import ConfigController from '../controller/config'

const confController = new ConfigController()
const confRouter = new Router()

confRouter.get('/', confController.getConfig)

export default confRouter
