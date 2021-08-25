import { Context } from 'koa'
import Router from 'koa-router'
import itemsController from '../controllers/itemsController'
const itemsRouter: Router = new Router()

itemsRouter.get('/items', itemsController.main)
itemsRouter.get('/items/:itemId', itemsController.getItemDetails)

export default itemsRouter
