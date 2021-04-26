import React from 'react'
import express from 'express'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from "react-router-dom"

import routes from '../app/routes'
import { html } from '../app/html'
import { App } from '../app/App'


const port = 80;
const server = express();

server.use(express.static('public'));

server.get('*', (req, res, next) => {

    const body = renderToString(
      <StaticRouter location={req.url}>
        <App />
      </StaticRouter>
    );
  
    res.send(
      html({
        body
      })
    )
  })

server.listen(port, () => console.log(`App listening on port ${port}!`));