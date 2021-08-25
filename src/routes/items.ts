import { Context } from 'koa'
import Router from 'koa-router'
import itemsController from '../controllers/itemsController'
const itemsRouter: Router = new Router()

itemsRouter.get('/items', itemsController.main)
itemsRouter.get('/items/:itemId', itemsController.getItemDetails)
itemsRouter.get('/items/reviews/:itemId', itemsController.getItemReviews)
itemsRouter.get('/items/offers/:itemId', itemsController.getItemOffers)
itemsRouter.get('/items/search/:searchQuery', itemsController.getSearchItems)

export default itemsRouter
