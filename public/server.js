;(() => {
    'use strict'
    var e = {
        n: (t) => {
            var n = t && t.__esModule ? () => t.default : () => t
            return e.d(n, { a: n }), n
        },
        d: (t, n) => {
            for (var r in n)
                e.o(n, r) &&
                    !e.o(t, r) &&
                    Object.defineProperty(t, r, { enumerable: !0, get: n[r] })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
    }
    const t = require('react')
    var n = e.n(t)
    const r = require('express')
    var a = e.n(r)
    const l = require('react-dom/server'),
        c = require('react-router-dom'),
        o = require('react-helmet')
    const u = [
        {
            path: '/',
            name: 'Home',
            exact: !0,
            component: function () {
                return n().createElement(
                    n().Fragment,
                    null,
                    n().createElement(
                        o.Helmet,
                        null,
                        n().createElement('title', null, 'Home'),
                        n().createElement('meta', {
                            name: 'description',
                            content: 'This is Home',
                        })
                    ),
                    n().createElement('p', null, 'Startseite')
                )
            },
        },
        {
            path: '/subpage1',
            name: 'Subpage1',
            exact: !0,
            component: function () {
                return n().createElement(
                    n().Fragment,
                    null,
                    n().createElement(
                        o.Helmet,
                        null,
                        n().createElement('title', null, 'Subpage1'),
                        n().createElement('meta', {
                            name: 'description',
                            content: 'This is Subpage1',
                        })
                    ),
                    n().createElement('p', null, 'Subage1')
                )
            },
        },
    ]
    var i = function () {
            return n().createElement('div', null, 'Four Oh Four')
        },
        m = function (e) {
            return n().createElement(
                c.NavLink,
                {
                    to: { pathname: e.path },
                    className: 'navbar-link',
                    exact: !0,
                },
                e.name
            )
        },
        s = function (e) {
            return n().createElement(
                'li',
                { key: e.key },
                n().createElement(m, { path: e.path, name: e.name })
            )
        },
        p = function (e) {
            var t = e.routes
            return n().createElement(
                'ul',
                { className: 'navbar' },
                t.map(function (e, t) {
                    var r = e.name,
                        a = e.path
                    return n().createElement(s, { key: t, name: r, path: a })
                })
            )
        },
        E = function () {
            return n().createElement(
                n().Fragment,
                null,
                n().createElement(p, { routes: u }),
                n().createElement(
                    c.Switch,
                    null,
                    u.map(function (e, t) {
                        var r = e.path,
                            a = e.exact,
                            l = e.component
                        return n().createElement(
                            c.Route,
                            { key: t, path: r, exact: a },
                            l
                        )
                    }),
                    n().createElement(c.Route, {
                        key: '404',
                        render: function () {
                            return n().createElement(i, null)
                        },
                    })
                )
            )
        },
        d = function () {
            return n().createElement(E, null)
        },
        h = a()()
    h.use(a().static('public')),
        h.get('*', function (e, t) {
            var r = (0, l.renderToString)(
                    n().createElement(
                        c.StaticRouter,
                        { location: e.url },
                        n().createElement(d, null)
                    )
                ),
                a = o.Helmet.renderStatic()
            t.send(
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
        h.listen(80, function () {
            return console.log('App listening on port 80!')
        })
})()
