import { Context } from 'koa'
import axios from 'axios'
import dotenv from 'dotenv'
import { IAmazonResponse } from '../constants'
dotenv.config()

const { SCRAPER_BASE_URL } = process.env
class ItemsController {
  public main(ctx: Context) {
    ctx.status = 200
    ctx.body = { status: 'here' }
  }

  public async getItemDetails(ctx: Context) {
    const itemId: string = ctx.params.itemId

    try {
      const response = await axios.get(`${SCRAPER_BASE_URL}&url=https://www.amazon.com/dp/${itemId}&autoparse=true`)
      const data: IAmazonResponse = response.data
      ctx.status = 200
      ctx.body = data
    } catch (error) {
      ctx.status = 400
      ctx.body = error
    }
  }
}

const itemsController: ItemsController = new ItemsController()
export default itemsController
