import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { renderToStaticMarkup } from 'react-dom/server'
import { CS } from './pages/cs'
import { serveStatic } from '@hono/node-server/serve-static'

const app = new Hono()

app.get('/', c => {
  return c.html(renderToStaticMarkup(<CS/>), 200, {
    'Access-Control-Allow-Origin': '*'
  })
})

app.use(
  '*',
  async (c, next) => {
    c.header('Access-Control-Allow-Origin', '*')
    await next()
  },
  serveStatic({
      root: './static', onNotFound: (path) => {
        console.log(path)
      }
    }
  ))

serve({
  fetch: app.fetch,
  port: 3000
}, info => {
  console.log(`Server is running on http://localhost:${info.port}`)
})