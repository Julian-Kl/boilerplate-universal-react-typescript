import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { App } from '../app/App'
import { html } from '../app/html';

const port = 80;
const server = express();

server.use(express.static('dist'));

server.get('/', (req, res) => {
    const body = renderToString(<App name="Julian" />);
  
    res.send(
      html({
        body
      })
    );
  })

server.listen(port, () => console.log(`Example app listening on port ${port}!`));