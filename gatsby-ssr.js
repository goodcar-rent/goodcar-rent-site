/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react'
export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <script
      key="modernizr"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `!(function(e, n, A) {
              function o(e) {
                var n = r.className,
                  A = Modernizr._config.classPrefix || ''
                if ((l && (n = n.baseVal), Modernizr._config.enableJSClass)) {
                  var o = new RegExp('(^|\\\\s)' + A + 'no-js(\\\\s|$)')
                  n = n.replace(o, '$1' + A + 'js$2')
                }
                Modernizr._config.enableClasses &&
                  ((n += ' ' + A + e.join(' ' + A)),
                  l ? (r.className.baseVal = n) : (r.className = n))
              }
              function t(e, n) {
                return typeof e === n
              }
              function a() {
                var e, n, A, o, a, i, r
                for (var l in f)
                  if (f.hasOwnProperty(l)) {
                    if (
                      ((e = []),
                      (n = f[l]),
                      n.name &&
                        (e.push(n.name.toLowerCase()),
                        n.options && n.options.aliases && n.options.aliases.length))
                    )
                      for (A = 0; A < n.options.aliases.length; A++)
                        e.push(n.options.aliases[A].toLowerCase())
                    for (o = t(n.fn, 'function') ? n.fn() : n.fn, a = 0; a < e.length; a++)
                      (i = e[a]),
                        (r = i.split('.')),
                        1 === r.length
                          ? (Modernizr[r[0]] = o)
                          : (!Modernizr[r[0]] ||
                              Modernizr[r[0]] instanceof Boolean ||
                              (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])),
                            (Modernizr[r[0]][r[1]] = o)),
                        s.push((o ? '' : 'no-') + r.join('-'))
                  }
              }
              function i(e, n) {
                if ('object' == typeof e) for (var A in e) c(e, A) && i(A, e[A])
                else {
                  e = e.toLowerCase()
                  var t = e.split('.'),
                    a = Modernizr[t[0]]
                  if ((2 == t.length && (a = a[t[1]]), 'undefined' != typeof a))
                    return Modernizr
                  ;(n = 'function' == typeof n ? n() : n),
                    1 == t.length
                      ? (Modernizr[t[0]] = n)
                      : (!Modernizr[t[0]] ||
                          Modernizr[t[0]] instanceof Boolean ||
                          (Modernizr[t[0]] = new Boolean(Modernizr[t[0]])),
                        (Modernizr[t[0]][t[1]] = n)),
                    o([(n && 0 != n ? '' : 'no-') + t.join('-')]),
                    Modernizr._trigger(e, n)
                }
                return Modernizr
              }
              var s = [],
                r = n.documentElement,
                l = 'svg' === r.nodeName.toLowerCase(),
                f = [],
                u = {
                  _version: '3.6.0',
                  _config: {
                    classPrefix: '',
                    enableClasses: !0,
                    enableJSClass: !0,
                    usePrefixes: !0,
                  },
                  _q: [],
                  on: function(e, n) {
                    var A = this
                    setTimeout(function() {
                      n(A[e])
                    }, 0)
                  },
                  addTest: function(e, n, A) {
                    f.push({ name: e, fn: n, options: A })
                  },
                  addAsyncTest: function(e) {
                    f.push({ name: null, fn: e })
                  },
                },
                Modernizr = function() {}
              ;(Modernizr.prototype = u), (Modernizr = new Modernizr())
              var c
              !(function() {
                var e = {}.hasOwnProperty
                c =
                  t(e, 'undefined') || t(e.call, 'undefined')
                    ? function(e, n) {
                        return n in e && t(e.constructor.prototype[n], 'undefined')
                      }
                    : function(n, A) {
                        return e.call(n, A)
                      }
              })(),
                (u._l = {}),
                (u.on = function(e, n) {
                  this._l[e] || (this._l[e] = []),
                    this._l[e].push(n),
                    Modernizr.hasOwnProperty(e) &&
                      setTimeout(function() {
                        Modernizr._trigger(e, Modernizr[e])
                      }, 0)
                }),
                (u._trigger = function(e, n) {
                  if (this._l[e]) {
                    var A = this._l[e]
                    setTimeout(function() {
                      var e, o
                      for (e = 0; e < A.length; e++) (o = A[e])(n)
                    }, 0),
                      delete this._l[e]
                  }
                }),
                Modernizr._q.push(function() {
                  u.addTest = i
                }),
                Modernizr.addAsyncTest(function() {
                  function e(e, n, A) {
                    function o(n) {
                      var o = n && 'load' === n.type ? 1 == t.width : !1,
                        a = 'webp' === e
                      i(e, a && o ? new Boolean(o) : o), A && A(n)
                    }
                    var t = new Image()
                    ;(t.onerror = o), (t.onload = o), (t.src = n)
                  }
                  var n = [
                      {
                        uri:
                          'data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=',
                        name: 'webp',
                      },
                      {
                        uri:
                          'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==',
                        name: 'webp.alpha',
                      },
                      {
                        uri:
                          'data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA',
                        name: 'webp.animation',
                      },
                      {
                        uri:
                          'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
                        name: 'webp.lossless',
                      },
                    ],
                    A = n.shift()
                  e(A.name, A.uri, function(A) {
                    if (A && 'load' === A.type)
                      for (var o = 0; o < n.length; o++) e(n[o].name, n[o].uri)
                  })
                }),
                a(),
                o(s),
                delete u.addTest,
                delete u.addAsyncTest
              for (var p = 0; p < Modernizr._q.length; p++) Modernizr._q[p]()
              e.Modernizr = Modernizr
            })(window, document)`,
      }}
    />,
  ])
  setPostBodyComponents([
    <script key="yametrika"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          setTimeout(function(){
             (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
             m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.defer=1,k.src=r,a.parentNode.insertBefore(k,a)})
             (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          
             ym(50703043, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:false
             });
          }, 2000);
         `,
      }}
    />,
    <noscript key="noscript-yametrika">
      <div>
        <img
          src='https://mc.yandex.ru/watch/50703043'
          style={{ position: "absolute", left: "-9999px" }}
        />
      </div>
    </noscript>,
    <script key="fbpixel"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          setTimeout(function(){
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.defer=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1273628269511577');
            fbq('track', 'PageView');
          }, 2300);
         `,
      }}
    />,
    <noscript key="noscript-fbpixel">
      <img
        src='https://www.facebook.com/tr?id=1273628269511577&ev=PageView&noscript=1'
        height={1} width={1}
        style={{ display: "none" }}
      />
    </noscript>,
    <script key="ga"
      type="text/javascript"
      src="https://www.googletagmanager.com/gtag/js?id=UA-23824119-2"
      defer
    />,
    <script key="ga-init"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          setTimeout(function(){
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-23824119-2'
          }, 2600);
         `,
      }}
    />,
    <script key="lazyloadjs-init"
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
          window.lazyLoadOptions = {
          elements_selector: ".lazy",
          };         
        `,
      }}
    />,
    <script key="lazyloadjs-script"
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/vanilla-lazyload@12.4.0/dist/lazyload.min.js"
      async
    />,
  ])
}
