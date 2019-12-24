import React from 'react'
import './map.css'

export function Map () {
  return (
      <div className="block100">
        <div id="map"
            dangerouslySetInnerHTML={{
              __html: `
                <a class="dg-widget-link" 
                    href="http://2gis.ru/novosibirsk/firm/70000001033450038/center/82.9117798805237,55.02040829831389/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap"
                >
                    Посмотреть на карте Новосибирска
                </a>
                <div class="dg-widget-link">
                    <a href="http://2gis.ru/novosibirsk/center/82.911775,55.020286/zoom/16/routeTab/rsType/bus/to/82.911775,55.020286╎GoodCar.rent?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до GoodCar.rent</a>
                </div>
                <script>
                  !function() {
                    function o(o) {
                        var t = document.getElementById(o);
                        t && (t.style.display = "none")
                    }
                    function t(o) {
                        for (var t = document.querySelectorAll("." + o), i = 0; i < t.length; i++)
                            t[i].style.display = "none"
                    }
                    function i(o, t) {
                        var i = "https:" === window.location.protocol ? "https:" : "http:";
                        return i + "//widgets.2gis.com/widget?type=" + o + "&options=" + encodeURIComponent(JSON.stringify(t))
                    }
                    function r(o) {
                        if (!o.src)
                            return "";
                        var t = o.borderColor ? "1px solid " + o.borderColor : "none";
                        return '<iframe frameborder="no" style="border: ' + t + '; box-sizing: border-box;" width="' + o.width + '" height="' + o.height + '" src="' + o.src + '"></iframe>'
                    }
                    window.DG = window.DG || {},
                    DG.Widget = DG.Widget || {},
                    DG.Widget.Components = DG.Widget.Components || {},
                    window.DGWidgetLoader = function(n) {
                        t("dg-widget-link"),
                        o("firmsonmap_biglink"),
                        o("firmsonmap_biglink_photo"),
                        o("firmsonmap_biglink_route"),
                        n = n || {},
                        n.org = n.org || [],
                        n.pos = n.pos || {},
                        n.opt = n.opt || {};
                        var e = n.width || 900;
                        e = e.toString(),
                        "%" != e.slice(-1) && (e = parseInt(e, 10),
                        e = Math.min(1200, e),
                        e = Math.max(500, e));
                        var d = n.height || 600;
                        d = d.toString(),
                        "%" != d.slice(-1) && (d = parseInt(d, 10),
                        d = Math.min(1e3, d),
                        d = Math.max(400, d));
                        for (var s = n.borderColor || "#a3a3a3", a = "", g = 0; g < n.org.length; g++)
                            n.org[g].id && (a += n.org[g].id + ",");
                        a = a.slice(0, -1);
                        var p = {
                            pos: n.pos,
                            opt: n.opt,
                            org: a
                        };
                        window.getElementById('map').appendChild(r({
                            width: e,
                            height: d,
                            borderColor: s,
                            src: i("firmsonmap", p)
                        }))
                    }
                    ,
                    DG.Widget.Components.Loader = function(t) {
                        o("2gis_mini_biglink");
                        var n, e, d = 700, s = 400, a = t.resize;
                        a ? (n = a.w ? parseInt(a.w, 10) : d,
                        e = a.h ? parseInt(a.h, 10) : s) : (n = d,
                        e = s),
                        document.write(r({
                            width: n,
                            height: e,
                            src: i("mini", t)
                        }))
                    }
                  }();

                </script>
                <script charset="utf-8">
                new DGWidgetLoader({
                    "width":"100%","height":600,
                    "borderColor":"#a3a3a3",
                    "pos":{"lat":55.02040829831389,"lon":82.9117798805237,"zoom":16},
                    "opt":{"city":"novosibirsk"},"org":[{"id":"70000001033450038"}]});
                </script>
                <noscript style="color:#c00;font-size:16px;font-weight:bold;">Виджет карты использует JavaScript. Включите его в настройках вашего браузера.</noscript>
              `}}
        />
      </div>
  )
}


