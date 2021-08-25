import compose from 'koa-compose'
import itemsRouter from './items'

export default compose([itemsRouter.middleware()])
