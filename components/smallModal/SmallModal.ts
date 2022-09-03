import createTemplate from "./createTemplate";
import {render} from "lit";
import {SMALLMODALID, SMALMODALID} from '../../static/constants'

class SmallModal {

  create(props){
    if (!document.getElementById(SMALLMODALID.HEADER_BUTTON)){
      const template=createTemplate(SMALLMODALID.HEADER_BUTTON)
      const modal=document.createElement('div')
      modal.id=SMALLMODALID.HEADER_BUTTON
      modal.classList.add(props.class)
      render(template, modal)
      const container=document.getElementById(props.parentId)
      container.appendChild(modal)
    }
  }
}

export default SmallModal