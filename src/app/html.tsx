import { HelmetData } from 'react-helmet'

export const html = (helmet: HelmetData, body: string): string => `
<!DOCTYPE html>
<html>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
  </head>
  <body>
    <div id="app">${body}</div>
  </body>
  <script src="client.js" defer></script>
</html>
`
