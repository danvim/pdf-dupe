import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { renderToStaticMarkup } from 'react-dom/server';
import { CS } from './pages/cs';
import { UVC } from './pages/uvc';

const app = new Hono();

app.get('/cs', (c) => {
  return c.html(renderToStaticMarkup(<CS />), 200, {
    'Access-Control-Allow-Origin': '*',
  });
});

app.get('/uvc', (c) => {
  return c.html(renderToStaticMarkup(<UVC />), 200, {
    'Access-Control-Allow-Origin': '*',
  });
});

app.use(
  '*',
  async (c, next) => {
    c.header('Access-Control-Allow-Origin', '*');
    await next();
  },
  serveStatic({
    root: './static',
    onNotFound: (path) => {
      console.log(path);
    },
  }),
);

serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  },
);
