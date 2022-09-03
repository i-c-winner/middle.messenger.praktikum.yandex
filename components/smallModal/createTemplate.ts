import {SMALLMODALID} from "../../static/constants";
import {html} from 'lit'
import tmpl_image from "../../tamplates/tmpl_image";
const plusIcon = require('../../static/images/plus.png')

function createTemplate(id){
  switch (id) {
  case SMALLMODALID.HEADER_BUTTON :
    return html`
            ${tmpl_image({
    path: plusIcon,
    alt: "Иконка плюс"
  })}
            `
  }
}

export default createTemplate