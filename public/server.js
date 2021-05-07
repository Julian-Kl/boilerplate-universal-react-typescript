;(() => {
    var e = {
            444: (e) => {
                e.exports =
                    "data:image/svg+xml,%3c!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3e %3csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3e %3cg%3e %3cg%3e %3cpath d='M437.019,74.981C388.668,26.629,324.38,0,256,0S123.332,26.629,74.981,74.981C26.628,123.332,0,187.62,0,256 s26.628,132.668,74.981,181.019C123.332,485.371,187.62,512,256,512s132.668-26.629,181.019-74.981 C485.372,388.668,512,324.38,512,256S485.372,123.332,437.019,74.981z M256,481.524c-124.354,0-225.524-101.17-225.524-225.524 S131.646,30.476,256,30.476S481.524,131.646,481.524,256S380.354,481.524,256,481.524z'/%3e %3c/g%3e %3c/g%3e %3cg%3e %3cg%3e %3cpath d='M200.622,188.396c-24.953-24.955-65.556-24.953-90.509,0c-5.951,5.95-5.951,15.599,0,21.55 c5.952,5.95,15.601,5.95,21.551,0c13.072-13.071,34.34-13.07,47.41,0c2.976,2.976,6.875,4.464,10.774,4.464 s7.8-1.488,10.774-4.464C206.573,203.995,206.573,194.347,200.622,188.396z'/%3e %3c/g%3e %3c/g%3e %3cg%3e %3cg%3e %3cpath d='M401.884,188.396c-24.953-24.953-65.556-24.955-90.509,0c-5.951,5.95-5.951,15.599,0,21.55 c5.952,5.95,15.601,5.95,21.551,0c13.07-13.071,34.338-13.072,47.41,0c2.976,2.976,6.875,4.464,10.774,4.464 s7.8-1.488,10.774-4.464C407.835,203.995,407.835,194.347,401.884,188.396z'/%3e %3c/g%3e %3c/g%3e %3cg%3e %3cg%3e %3cpath d='M391.111,267.175H120.889c-8.416,0-15.238,6.823-15.238,15.238c0,82.902,67.447,150.349,150.349,150.349 s150.349-67.447,150.349-150.349C406.349,273.997,399.527,267.175,391.111,267.175z M256,402.286 c-60.938,0-111.402-45.703-118.909-104.635H374.91C367.402,356.583,316.938,402.286,256,402.286z'/%3e %3c/g%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3cg%3e %3c/g%3e %3c/svg%3e"
            },
        },
        t = {}
    function n(c) {
        var r = t[c]
        if (void 0 !== r) return r.exports
        var l = (t[c] = { exports: {} })
        return e[c](l, l.exports, n), l.exports
    }
    ;(n.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e
        return n.d(t, { a: t }), t
    }),
        (n.d = (e, t) => {
            for (var c in t)
                n.o(t, c) &&
                    !n.o(e, c) &&
                    Object.defineProperty(e, c, { enumerable: !0, get: t[c] })
        }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            'use strict'
            const e = require('react')
            var t = n.n(e)
            const c = require('express')
            var r = n.n(c)
            const l = require('react-dom/server'),
                g = require('react-router-dom'),
                o = require('react-helmet')
            var a = n(444),
                i = n.n(a)
            const s = [
                {
                    path: '/',
                    name: 'Home',
                    exact: !0,
                    component: function () {
                        return t().createElement(
                            t().Fragment,
                            null,
                            t().createElement(
                                o.Helmet,
                                null,
                                t().createElement('title', null, 'Home'),
                                t().createElement('meta', {
                                    name: 'description',
                                    content: 'This is Home',
                                })
                            ),
                            t().createElement('p', null, 'Homepage'),
                            t().createElement('img', {
                                src:
                                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAIAAAAiOjnJAAAEuGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjIwMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjIwMCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjIwMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMjAwIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSIzMDAuMCIKICAgdGlmZjpZUmVzb2x1dGlvbj0iMzAwLjAiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIw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',
                            }),
                            t().createElement('img', {
                                src: i(),
                                height: '200',
                                width: '200',
                            })
                        )
                    },
                },
                {
                    path: '/subpage1',
                    name: 'Subpage1',
                    exact: !0,
                    component: function () {
                        return t().createElement(
                            t().Fragment,
                            null,
                            t().createElement(
                                o.Helmet,
                                null,
                                t().createElement('title', null, 'Subpage1'),
                                t().createElement('meta', {
                                    name: 'description',
                                    content: 'This is Subpage1',
                                })
                            ),
                            t().createElement('p', null, 'Subage1')
                        )
                    },
                },
            ]
            var m = function () {
                    return t().createElement('div', null, 'Four Oh Four')
                },
                I = function (e) {
                    return t().createElement(
                        g.NavLink,
                        {
                            to: { pathname: e.path },
                            className: 'navbar-link',
                            exact: !0,
                        },
                        e.name
                    )
                },
                p = function (e) {
                    return t().createElement(
                        'li',
                        { key: e.key },
                        t().createElement(I, { path: e.path, name: e.name })
                    )
                },
                u = function (e) {
                    var n = e.routes
                    return t().createElement(
                        'ul',
                        { className: 'navbar' },
                        n.map(function (e, n) {
                            var c = e.name,
                                r = e.path
                            return t().createElement(p, {
                                key: n,
                                name: c,
                                path: r,
                            })
                        })
                    )
                },
                d = function () {
                    return t().createElement(
                        t().Fragment,
                        null,
                        t().createElement(u, { routes: s }),
                        t().createElement(
                            g.Switch,
                            null,
                            s.map(function (e, n) {
                                var c = e.path,
                                    r = e.exact,
                                    l = e.component
                                return t().createElement(
                                    g.Route,
                                    { key: n, path: c, exact: r },
                                    l
                                )
                            }),
                            t().createElement(g.Route, {
                                key: '404',
                                render: function () {
                                    return t().createElement(m, null)
                                },
                            })
                        )
                    )
                },
                b = function () {
                    return t().createElement(d, null)
                },
                A = r()()
            A.use(r().static('public')),
                A.get('*', function (e, n) {
                    var c = (0, l.renderToString)(
                            t().createElement(
                                g.StaticRouter,
                                { location: e.url },
                                t().createElement(b, null)
                            )
                        ),
                        r = o.Helmet.renderStatic()
                    n.send(
                        (function (e, t) {
                            return (
                                '\n<!DOCTYPE html>\n<html ' +
                                e.htmlAttributes.toString() +
                                '>\n  <head>\n    ' +
                                e.title.toString() +
                                '\n    ' +
                                e.meta.toString() +
                                '\n    ' +
                                e.link.toString() +
                                '\n    <link rel="stylesheet" type="text/css" href="app.css" media="screen" />\n  </head>\n  <body ' +
                                e.bodyAttributes.toString() +
                                '>\n    <noscript>You need to enable JavaScript to run this app.</noscript>\n    <div id="app">' +
                                t +
                                '</div>\n  </body>\n  <script src="client.js" defer></script>\n</html>\n'
                            )
                        })(r, c)
                    )
                }),
                A.listen(80, function () {
                    return console.log('App listening on port 80!')
                })
        })()
})()
