import { Context } from 'koa'
import axios from 'axios'
import dotenv from 'dotenv'
import { IItemResponse, IOffersResponse } from '../constants'
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
      const data: IItemResponse = response.data
      ctx.status = 200
      ctx.body = data
    } catch (error) {
      ctx.status = 400
      ctx.body = error
    }
  }

  public async getItemReviews(ctx: Context) {
    const itemId: string = ctx.params.itemId

    try {
      const response = await axios.get(
        `${SCRAPER_BASE_URL}&url=https://www.amazon.com/product-reviews/${itemId}&autoparse=true`
      )
      // TODO: Add interface
      const data = response.data
      ctx.status = 200
      ctx.body = data
    } catch (error) {
      ctx.status = 400
      ctx.body = error
    }
  }

  public async getItemOffers(ctx: Context) {
    const itemId: string = ctx.params.itemId

    try {
      const response = await axios.get(
        `${SCRAPER_BASE_URL}&url=https://www.amazon.com/gp/offer-listing/${itemId}&autoparse=true`
      )
      const data: IOffersResponse = response.data
      ctx.status = 200
      ctx.body = data
    } catch (error) {
      ctx.status = 400
      ctx.body = error
    }
  }

  public async getSearchItems(ctx: Context) {
    const searchQuery: string = ctx.params.searchQuery

    try {
      const response = await axios.get(
        `${SCRAPER_BASE_URL}&url=https://www.amazon.com/s?k=${searchQuery}&autoparse=true`
      )
      // TODO: Add search response interface
      const data = response.data
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
