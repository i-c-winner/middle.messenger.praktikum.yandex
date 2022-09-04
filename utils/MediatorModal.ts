import Modal from "../components/modal/Modal";
import templates from "../components/modal/dataBasa";
import CreaterTemplates from "../components/modal/CreaterTemplates";


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

  this.dispatch=function(templateName){
    const template=this.getTemplate(templateName)
    this.modal.dispatchComponentDidMount(template)
    createrTemplates.createInputsListeners()
    this.setButtonsListeners(createrTemplates.getButtons())
  }
  this.getTemplate=function (type){
    const source=templates[type]
    return createrTemplates.createTemplate(source)
  }

  this.setButtonsListeners= function (buttons){

    buttons.map(button=>{
      this.target=document.getElementById(button.id)
      const update=this.update
      this.target.addEventListener('click', this.hadlerButtonsClick.bind({
        update,
        button,
      }))
    })
  }
  this.update=(name)=>{
    this.target=document.getElementById(button.id)
    this.target.removeEventListener('click', this.handlerButtonsClick)
    const template=this.getTemplate(name)
    this.modal.dispatchComponentDidUpdate(template)
    createrTemplates.createInputsListeners()
    this.setButtonsListeners(createrTemplates.getButtons())
  }

  this.hadlerButtonsClick=function (){
    console.log(this.button)
    if (this.button.clickType==='changeModal'){
      this.update(this.button.target)

    } else {
      console.log(createrTemplates.validationAll())

      // window.location.href=`/pages/${button.target}.html`
    }
  }
}

export default MediatorModal