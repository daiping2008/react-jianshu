const Koa = require('koa')
const app = new Koa()
const cors = require('koa-cors')

const router = require('koa-router')()

const headerList = require('./mock/headerList.json')

router.get('/api/getHeaderList', async (ctx, next)=> {
  ctx.body = headerList
})


app.use(cors())
app.use(router.routes())
app.listen(3000, () => {
  console.log('Listening at http://localhost:3000')
})
