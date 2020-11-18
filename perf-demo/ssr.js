const express = require('express');
const app = express();

const { createSSRApp } = require('vue');
const { renderToString } = require('@vue/server-renderer');
const host = 'https://mauloan.ppdaicdn.com/pro';

const example = {
    template: `<ul>
            <li v-for="(item, index) in items" :key="index">
            <img height="200" :src="item.image" alt="">
            </li>
        </ul>`,
    data() {
        return {
            items: [
                {
                  image: `${host}/202009/371137504268386305.png`
                },
                {
                  image: `${host}/202009/371137603052634113.png`
                },
                {
                  image: `${host}/202009/371141803531894785.png`
                },
                {
                  image: `${host}/202009/371142984647835649.png`
                }
              ]
        }
    }
}

function renderVueApp(req, res) {
    const vueApp = createSSRApp(example);
  
    (async () => {
      const html = await renderToString(vueApp);
  
      res.send(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About blank</title>
          </head>
          <body>
            <div id="app">${html}</div>
          </body>
        </html>
      `);
    })();
}

app.get('/', renderVueApp);

app.listen('3002', () => {
    console.log('listening port 3002');
});