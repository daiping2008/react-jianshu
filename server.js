const Koa = require('koa')
const app = new Koa()
const cors = require('koa-cors')

const router = require('koa-router')()

const detail = require('./mock/detail.json')

const headerList = require('./mock/headerList.json')

const home = require('./mock/home.json')

const homeList = require('./mock/homeList.json')

const login = require('./mock/login.json')

router.get('/api/getDetail', async (ctx, next)=> {
  ctx.body = detail
})

router.get('/api/getHeaderList', async (ctx, next)=> {
  ctx.body = headerList
})

router.get('/api/getHome', async (ctx, next)=> {
  ctx.body = home
})

router.get('/api/getHomeList', async (ctx, next)=> {
  ctx.body = homeList
})

router.get('/api/getLogin', async (ctx, next)=> {
  ctx.body = login
})


app.use(cors())
app.use(router.routes())
app.listen(3030, () => {
  console.log('Listening at http://localhost:3030')
})
