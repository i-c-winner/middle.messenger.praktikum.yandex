import {SMALLMODALID} from "../../static/constants";
import {html} from 'lit'
import tmpl_image from "../../tamplates/tmpl_image";
import templates from "../modal/dataBasa";
import {map} from 'lit/directives/map'
import tmpl_text from "../../tamplates/tmpl_text";

function createTemplate(id){
  switch (id) {
  case SMALLMODALID.HEADER_BUTTON :
    return html` <ul class="list header__list">
      
        ${templates.headerButton.items.map(item=>{
    return html`
      <li class="modal-item modal-item_header">
        ${tmpl_image({
    path: item.imgPath,
    class: 'modal-img modal-img_header'
  })}
        ${tmpl_text({
    text: item.text,
    classWrapper: 'header__text'
  })}
      </li>    
    `
  })}
    </ul>   
            `
  case SMALLMODALID.FOOTER_BUTTON:
    return html`
        <ul class="list footer__list">
            ${templates.footerButton.items.map(item=>{
    return html`
<li class="modal-item modal-item_footer">
    ${tmpl_image({
    path: item.imgPath,
    class: 'modal-img modal-img_footer'
  })}
    ${tmpl_text({
    text: item.text,
    classWrapper: 'footer__text'
  })}
</li>
`
  })} 
        </ul>
   
    `
  }
}

export default createTemplate