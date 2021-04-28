import { HelmetData } from 'react-helmet'

export const html = (helmet: HelmetData, body: string): string => `
<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <div id="app">${body}</div>
  </body>
  <script src="client.js" defer></script>
</html>
`
