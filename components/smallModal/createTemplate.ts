import {SMALLMODALID} from "../../static/constants";
import {html} from 'lit'
import tmpl_image from "../../tamplates/tmpl_image";
import templates from "../modal/dataBasa";
import {map} from 'lit/directives/map'
import tmpl_text from "../../tamplates/tmpl_text";

function createTemplate(id){
  switch (id) {
  case SMALLMODALID.HEADER_BUTTON :
    return html` <div class="header__list">
      
        ${templates.headerButton.items.map(item=>{
    return html`
      <div class="header__item">
        ${tmpl_image({
    path: item.imgPath,
    class: 'header__image'
  })}
        ${tmpl_text({
    text: item.text,
    classWrapper: 'header__text'
  })}
      </div>    
    `
  })}
    </div>   
            `
  }
}

export default createTemplate