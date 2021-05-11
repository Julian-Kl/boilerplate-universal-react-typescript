;(() => {
    'use strict'
    var e = {
            482: (e, t, n) => {
                e.exports = n.p + 'assets/2fd56c08181aed71b9c5.svg'
            },
            301: (e, t, n) => {
                e.exports = n.p + 'assets/a8da01b114d4a514486c.png'
            },
        },
        t = {}
    function n(r) {
        var a = t[r]
        if (void 0 !== a) return a.exports
        var c = (t[r] = { exports: {} })
        return e[r](c, c.exports, n), c.exports
    }
    ;(n.n = (e) => {
        var t = e && e.__esModule ? () => e.default : () => e
        return n.d(t, { a: t }), t
    }),
        (n.d = (e, t) => {
            for (var r in t)
                n.o(t, r) &&
                    !n.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
        }),
        (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (n.p = '/'),
        (() => {
            const e = require('react')
            var t = n.n(e)
            const r = require('express')
            var a = n.n(r)
            const c = require('react-dom/server'),
                l = require('react-router-dom'),
                o = require('react-helmet')
            var u = n(301),
                i = n(482)
            const m = [
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
                            t().createElement('img', { src: u }),
                            t().createElement('img', {
                                src: i,
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
            var s = function () {
                    return t().createElement('div', null, 'Four Oh Four')
                },
                p = function (e) {
                    return t().createElement(
                        l.NavLink,
                        {
                            to: { pathname: e.path },
                            className: 'navbar-link',
                            exact: !0,
                        },
                        e.name
                    )
                },
                d = function (e) {
                    return t().createElement(
                        'li',
                        { key: e.key },
                        t().createElement(p, { path: e.path, name: e.name })
                    )
                },
                h = function (e) {
                    var n = e.routes
                    return t().createElement(
                        'ul',
                        { className: 'navbar' },
                        n.map(function (e, n) {
                            var r = e.name,
                                a = e.path
                            return t().createElement(d, {
                                key: n,
                                name: r,
                                path: a,
                            })
                        })
                    )
                },
                E = function () {
                    return t().createElement(
                        t().Fragment,
                        null,
                        t().createElement(h, { routes: m }),
                        t().createElement(
                            l.Switch,
                            null,
                            m.map(function (e, n) {
                                var r = e.path,
                                    a = e.exact,
                                    c = e.component
                                return t().createElement(
                                    l.Route,
                                    { key: n, path: r, exact: a },
                                    c
                                )
                            }),
                            t().createElement(l.Route, {
                                key: '404',
                                render: function () {
                                    return t().createElement(s, null)
                                },
                            })
                        )
                    )
                },
                g = function () {
                    return t().createElement(E, null)
                },
                v = a()()
            v.use(a().static('public')),
                v.get('*', function (e, n) {
                    var r = (0, c.renderToString)(
                            t().createElement(
                                l.StaticRouter,
                                { location: e.url },
                                t().createElement(g, null)
                            )
                        ),
                        a = o.Helmet.renderStatic()
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
                        })(a, r)
                    )
                }),
                v.listen(80, function () {
                    return console.log('App listening on port 80!')
                })
        })()
})()
