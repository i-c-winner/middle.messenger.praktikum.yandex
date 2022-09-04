import Modal from "../components/modal/Modal";
import templates from "../components/modal/dataBasa";
import CreaterTemplates from "../components/modal/CreaterTemplates";
import {html} from 'lit'
import tmpl_button from "../tamplates/tmpl_button";



const createrTemplates=new CreaterTemplates({})
function MediatorModal(){
  this.init=function(){
    this.modal=new Modal ({
      tagName: 'form',
      id: 'form',
      classes: ['form'],
      parentId: "root-modal",
    })
    this.dispatch('loginIn')
  }

  this.dispatch=function(templateName){
    const template=this._getTemplate(templateName)
    this.modal.dispatchComponentDidMount(template)
    createrTemplates.createInputsListeners()
  }
  this._getTemplate=function (type){
    const source=templates[type]

    return html`
      ${ createrTemplates.createTemplate(source)}
      <div class="form__buttons">
     ${tmpl_button({
    id: 'login_button',
    class: 'form__button',
    click: this.clickLogin,
    text: 'Войти'
  })}
        ${tmpl_button({
    id: 'registration',
    class: 'form__button',
    click: this.clickRegistration.bind(this),
    text: type==='loginIn'? 'Нет акаунта?': 'Регистрация'
  })}
      </div>
    `
  }

  this.update=(name)=>{
    const template=this._getTemplate(name)
    this.modal.dispatchComponentDidUpdate(template)
    createrTemplates.createInputsListeners()
  }
  this.clickRegistration=function (event){
    event.preventDefault()
    this.update('registration')
  }

}

export default MediatorModal