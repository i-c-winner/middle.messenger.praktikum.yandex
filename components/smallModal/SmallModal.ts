import createTemplate from "./CreateTemplate";
import {render} from "lit";
import {SMALLMODALID} from '../../static/constants'

class SmallModal {
  id: string
  create(props: {
    type: string,
    classes: [...string[]],
    parentId: string
  }){
    const modal=document.createElement('div')
    const template=this._getTemplate.bind(modal)(props.type)
    props.classes.map(classitem=>{
      modal.classList.add(classitem)
    })
    render(template, modal)
    const container: HTMLElement|null=document.getElementById(props.parentId)
    if (container!==null) container.appendChild(modal)
  }

  _getTemplate(type: string){
    if (type===SMALLMODALID.HEADER_BUTTON){
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
