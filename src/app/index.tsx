import { HelmetData } from 'react-helmet'

export const html = (helmet: HelmetData, body: string): string => `
<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    <link rel="stylesheet" type="text/css" href="app.css" media="screen" />
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="app">${body}</div>
  </body>
  <script src="client.js" defer></script>
</html>
`
