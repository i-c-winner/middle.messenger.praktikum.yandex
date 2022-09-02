import Modal from "../components/Modal/Modal";
import templates from "../components/Modal/dataBasa";
import CreaterTemplates from "../components/Modal/CreaterTemplates";

const createrTemplates=new CreaterTemplates()
function MediatorModal(){
  this.init=function(){
    this.modal=new Modal ({
      tagName: 'div',
      id: 'form',
      classes: ['form'],
      parentId: "root-modal",
    })
    this.dispatch()
  }

  this.dispatch=function(){
    const template=this.getTemplate('login')
    this.modal.dispatchComponentDidMount(template)
  }
  this.getTemplate=function (type){
    const source=templates.login
    return createrTemplates.template(source)
  }
}

export default MediatorModal