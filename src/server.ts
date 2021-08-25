import Koa, { Context, Next } from 'koa'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import routes from './routes'

const server: Koa = new Koa()
const port = process.env.PORT ?? 8085
server.use(bodyParser())
server.use(cors())

const router: Router = new Router()

router.get('/', (ctx: Context) => {
  ctx.status = 200
  ctx.body = { status: 'ok ' }
})

server.use(routes)

server.listen(port, () => {
  console.log(`The server is listening on port ${port}`)
})
