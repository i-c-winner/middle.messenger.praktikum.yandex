import createTemplate from "./CreateTemplate";
import {render} from "lit";
import {SMALLMODALID} from '../../static/constants'

class SmallModal {
  private id: string;

  create(props){
    const modal=document.createElement('div')
    const template=this._getTemplate.bind(modal)(props.type)
    props.classes.map(classitem=>{
      modal.classList.add(classitem)
    })
    render(template, modal)
    const container=document.getElementById(props.parentId)
    container.appendChild(modal)
  }

  _getTemplate(type){
    if (type===SMALLMODALID.HEADER_BUTTON){
      console.log(this)
      this.id=SMALLMODALID.HEADER_BUTTON
      return createTemplate(SMALLMODALID.HEADER_BUTTON)
    }
    if (type===SMALLMODALID.FOOTER_BUTTON) {
      this.id=SMALLMODALID.FOOTER_BUTTON
      return createTemplate(SMALLMODALID.FOOTER_BUTTON)
    }
  }
}

export default SmallModal