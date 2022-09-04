import createTemplate from "./createTemplate";
import {render} from "lit";
import {SMALLMODALID} from '../../static/constants'

class SmallModal {

  create(props){
    const template=this._getTemplate(props.type)
    const modal=document.createElement('div')
    modal.id=SMALLMODALID.HEADER_BUTTON
    props.classes.map(classitem=>{
      modal.classList.add(classitem)
    })
    render(template, modal)
    const container=document.getElementById(props.parentId)
    container.appendChild(modal)
  }

  _getTemplate(type){
    if (type===SMALLMODALID.HEADER_BUTTON) return createTemplate(SMALLMODALID.HEADER_BUTTON)
    if (type===SMALLMODALID.FOOTER_BUTTON) return createTemplate(SMALLMODALID.FOOTER_BUTTON)
  }
}

export default SmallModal