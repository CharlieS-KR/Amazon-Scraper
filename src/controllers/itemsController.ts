import { Context } from 'koa'

class ItemsController {
  public main(ctx: Context) {
    ctx.status = 200
    ctx.body = { status: 'here' }
  }
}

const itemsController: ItemsController = new ItemsController()
export default itemsController
