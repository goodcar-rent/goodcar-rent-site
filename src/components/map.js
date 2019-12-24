import React from 'react'
import './map.css'

export function Map () {
  return (
      <div className="block100">
        <div id="map"
            dangerouslySetInnerHTML={{
              __html: `<a class="dg-widget-link" href="http://2gis.ru/novosibirsk/firm/70000001033450038/center/82.9117798805237,55.02040829831389/zoom/16?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=bigMap">Посмотреть на карте Новосибирска</a>
                <div class="dg-widget-link">
                <a href="http://2gis.ru/novosibirsk/center/82.911775,55.020286/zoom/16/routeTab/rsType/bus/to/82.911775,55.020286╎GoodCar.rent?utm_medium=widget-source&utm_campaign=firmsonmap&utm_source=route">Найти проезд до GoodCar.rent</a>
                </div>
                <script type="text/javascript">
                function mapLoad() {
                    new DGWidgetLoader({"width":"100%","height":600,"borderColor":"#a3a3a3","pos":{"lat":55.02040829831389,"lon":82.9117798805237,"zoom":16},"opt":{"city":"novosibirsk"},"org":[{"id":"70000001033450038"}]});  
                }
                setTimeout(function(){
                    var elem = document.createElement('script');
                    elem.type = 'text/javascript';
                    elem.onload = mapLoad; 
                    elem.src = '//widgets.2gis.com/js/DGWidgetLoader.js';
                    document.getElementsByTagName('body')[0].appendChild(elem);
                }, 3300);
                <noscript style="color:#c00;font-size:16px;font-weight:bold;">Виджет карты использует JavaScript. Включите его в настройках вашего браузера.</noscript>
            `}}
        />
      </div>
  )
}


