/*! For license information please see server.js.LICENSE.txt */
;(() => {
    var e = {
            634: (e, t, n) => {
                'use strict'
                n.r(t), n.d(t, { default: () => o })
                var r = n(645),
                    a = n.n(r)()(function (e) {
                        return e[1]
                    })
                a.push([
                    e.id,
                    '.navbar{font-family:Impact,Haettenschweiler,"Arial Narrow Bold",sans-serif}',
                    '',
                ])
                const o = a
            },
            645: (e) => {
                'use strict'
                e.exports = function (e) {
                    var t = []
                    return (
                        (t.toString = function () {
                            return this.map(function (t) {
                                var n = e(t)
                                return t[2]
                                    ? '@media '
                                          .concat(t[2], ' {')
                                          .concat(n, '}')
                                    : n
                            }).join('')
                        }),
                        (t.i = function (e, n, r) {
                            'string' == typeof e && (e = [[null, e, '']])
                            var a = {}
                            if (r)
                                for (var o = 0; o < this.length; o++) {
                                    var i = this[o][0]
                                    null != i && (a[i] = !0)
                                }
                            for (var c = 0; c < e.length; c++) {
                                var l = [].concat(e[c])
                                ;(r && a[l[0]]) ||
                                    (n &&
                                        (l[2]
                                            ? (l[2] = ''
                                                  .concat(n, ' and ')
                                                  .concat(l[2]))
                                            : (l[2] = n)),
                                    t.push(l))
                            }
                        }),
                        t
                    )
                }
            },
            422: (e, t, n) => {
                var r = n(634),
                    a = n(718),
                    o = 'string' == typeof r ? [[e.id, r, '']] : r
                ;((t = e.exports = r.locals || {})._getContent = function () {
                    return o
                }),
                    (t._getCss = function () {
                        return '' + r
                    }),
                    (t._insertCss = function (e) {
                        return a(o, e)
                    })
            },
            718: (e) => {
                'use strict'
                var t = {}
                function n(e) {
                    e.forEach(function (e) {
                        if (--t[e] <= 0) {
                            var n = document.getElementById(e)
                            n && n.parentNode.removeChild(n)
                        }
                    })
                }
                e.exports = function (e, r) {
                    for (
                        var a,
                            o = void 0 === r ? {} : r,
                            i = o.replace,
                            c = void 0 !== i && i,
                            l = o.prepend,
                            u = void 0 !== l && l,
                            s = o.prefix,
                            m = void 0 === s ? 's' : s,
                            d = [],
                            p = 0;
                        p < e.length;
                        p++
                    ) {
                        var f = e[p],
                            v = f[0],
                            h = f[1],
                            g = f[2],
                            E = f[3],
                            b = '' + m + v + '-' + p
                        if ((d.push(b), !t[b] || c)) {
                            t[b] = 1
                            var y = document.getElementById(b),
                                S = !1
                            y ||
                                ((S = !0),
                                (y = document.createElement(
                                    'style'
                                )).setAttribute('type', 'text/css'),
                                (y.id = b),
                                g && y.setAttribute('media', g))
                            var x = h
                            E &&
                                'function' == typeof btoa &&
                                ((x +=
                                    '\n/*# sourceMappingURL=data:application/json;base64,' +
                                    ((a = JSON.stringify(E)),
                                    btoa(
                                        encodeURIComponent(a).replace(
                                            /%([0-9A-F]{2})/g,
                                            function (e, t) {
                                                return String.fromCharCode(
                                                    '0x' + t
                                                )
                                            }
                                        )
                                    ) + '*/')),
                                (x +=
                                    '\n/*# sourceURL=' +
                                    E.file +
                                    '?' +
                                    b +
                                    '*/')),
                                'textContent' in y
                                    ? (y.textContent = x)
                                    : (y.styleSheet.cssText = x),
                                S &&
                                    (u
                                        ? document.head.insertBefore(
                                              y,
                                              document.head.childNodes[0]
                                          )
                                        : document.head.appendChild(y))
                        } else t[b]++
                    }
                    return n.bind(null, d)
                }
            },
        },
        t = {}
    function n(r) {
        var a = t[r]
        if (void 0 !== a) return a.exports
        var o = (t[r] = { id: r, exports: {} })
        return e[r](o, o.exports, n), o.exports
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
        (n.r = (e) => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 })
        }),
        (() => {
            'use strict'
            const e = require('react')
            var t = n.n(e)
            const r = require('express')
            var a = n.n(r)
            const o = require('react-dom/server'),
                i = require('react-router-dom'),
                c = require('react-helmet'),
                l = [
                    {
                        path: '/',
                        name: 'Home',
                        exact: !0,
                        component: function () {
                            return t().createElement(
                                t().Fragment,
                                null,
                                t().createElement(
                                    c.Helmet,
                                    null,
                                    t().createElement('title', null, 'Home'),
                                    t().createElement('meta', {
                                        name: 'description',
                                        content: 'This is Home',
                                    })
                                ),
                                t().createElement('p', null, 'Startseite')
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
                                    c.Helmet,
                                    null,
                                    t().createElement(
                                        'title',
                                        null,
                                        'Subpage1'
                                    ),
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
            var u = function () {
                    return t().createElement('div', null, 'Four Oh Four')
                },
                s =
                    (n(422),
                    function (e) {
                        var n = e.routes
                        return t().createElement(
                            'ul',
                            { className: 'navbar' },
                            n.map(function (e, n) {
                                var r = e.name,
                                    a = e.path
                                return t().createElement(
                                    'li',
                                    { key: n },
                                    t().createElement(
                                        i.NavLink,
                                        { to: { pathname: a } },
                                        r
                                    )
                                )
                            })
                        )
                    }),
                m = function () {
                    return t().createElement(
                        t().Fragment,
                        null,
                        t().createElement(s, { routes: l }),
                        t().createElement(
                            i.Switch,
                            null,
                            l.map(function (e, n) {
                                var r = e.path,
                                    a = e.exact,
                                    o = e.component
                                return t().createElement(
                                    i.Route,
                                    { key: n, path: r, exact: a },
                                    o
                                )
                            }),
                            t().createElement(i.Route, {
                                key: '404',
                                render: function () {
                                    return t().createElement(u, null)
                                },
                            })
                        )
                    )
                },
                d = function () {
                    return t().createElement(
                        e.StrictMode,
                        null,
                        t().createElement(m, null)
                    )
                },
                p = a()()
            p.use(a().static('public'))
            var f = c.Helmet.renderStatic()
            p.get('*', function (e, n) {
                var r = (0, o.renderToString)(
                    t().createElement(
                        i.StaticRouter,
                        { location: e.url },
                        t().createElement(d, null)
                    )
                )
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
                            '\n  </head>\n  <body ' +
                            e.bodyAttributes.toString() +
                            '>\n    <div id="app">' +
                            t +
                            '</div>\n  </body>\n  <script src="client.js" defer></script>\n</html>\n'
                        )
                    })(f, r)
                )
            }),
                p.listen(80, function () {
                    return console.log('App listening on port 80!')
                })
        })()
})()
