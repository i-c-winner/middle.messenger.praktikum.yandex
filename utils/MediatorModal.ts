import Modal from "../components/Modal/Modal";
import templates from "../components/Modal/dataBasa";
import CreaterTemplates from "../components/Modal/CreaterTemplates";
import path from 'path'

const createrTemplates=new CreaterTemplates({})
function MediatorModal(){
  this.init=function(){
    this.modal=new Modal ({
      tagName: 'form',
      id: 'form',
      classes: ['form'],
      parentId: "root-modal",
    })
    this.dispatch('login')
  }
  this.initSmallModal=function(){
    this.modal=new Modal ({
      tagName: 'div',
      classes: ['header__modal'],
      parentId: 'header',
      id: 'list'
    })
    this.dispatch('headerButton')
  }

  this.dispatch=function(templateName){
    const template=this.getTemplate(templateName)
    this.modal.dispatchComponentDidMount(template)
    createrTemplates.createInputsListeners()
    this.setButtonsListeners(createrTemplates.getButtons())
  }
  this.getTemplate=function (type){
    const source=templates[type]
    return createrTemplates.createTemplate(source, this.modal.props.id)
  }

  this.setButtonsListeners= function (buttons){
    buttons.map(button=>{
      const target=document.getElementById(button.id)
      target.addEventListener('click', ()=>{
        if (button.clickType==='changeModal'){
          this.update(button.target)
        } else {
          console.log(`/pages/${button.target}`)
          window.location.href=`/pages/${button.target}.html`
        }
      })
    })
  }
  this.update=function(name){
    const template=this.getTemplate(name)
    this.modal.dispatchComponentDidUpdate(template)
    createrTemplates.createInputsListeners()
    this.setButtonsListeners(createrTemplates.getButtons())
  }
}

export default MediatorModal