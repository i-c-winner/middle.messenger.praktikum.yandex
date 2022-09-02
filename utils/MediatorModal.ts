import Modal from "../components/Modal/Modal";
import {html} from "lit";

function MediatorModal(){
  this.init=function (){
    this.modal=new Modal ({
      tagName: 'div',
      id: 'form',
      classes: ['form'],
      parentId: "root-modal"
    })
    this.dispatch()
  }
  this.dispatch=()=>{
    this.modal.dispatchComponentDidMount(html`<div>dddfdf</div>`)
  }
}
export default MediatorModal