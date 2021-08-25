import { Context } from 'koa'
import Router from 'koa-router'
import itemsController from '../controllers/itemsController'
const itemsRouter: Router = new Router()

itemsRouter.get('/items', itemsController.main)

export default itemsRouter
