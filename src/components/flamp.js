import React from 'react'
import './flamp.css'

export function Flamp (props) {
  return (
    <div className="flamp">
      <div className="wrapper">
        <div id="flamp"
          dangerouslySetInnerHTML={{
            __html: `<a class="flamp-widget" 
              href="//novosibirsk.flamp.ru/firm/goodcar_rent_kompaniya_po_prokatu_i_arende_legkovykh_avtomobilejj-70000001033450038"  
              data-flamp-widget-type="responsive-new" 
              data-flamp-widget-id="70000001033450038" 
              data-flamp-widget-width="100%" 
              data-flamp-widget-count="1">Отзывы о GoodCar.rent на Флампе</a>
              <script>!function(d,s){var js,fjs=d.getElementsByTagName(s)[0];js=d.createElement(s);
              js.async=1;js.src="//widget.flamp.ru/loader.js";fjs.parentNode.insertBefore(js,fjs);}(document,"script");
              </script>`
          }}
        />
      </div>
    </div>
  )
}
