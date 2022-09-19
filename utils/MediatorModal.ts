import Modal from "../components/modal/Modal";
import templates from "../components/modal/dataBasa";
import CreaterTemplates from "../components/modal/CreaterTemplates";
import {html} from 'lit'
import tmpl_button from "../tamplates/tmpl_button";
import {router} from "../pages/modal";

interface Source {
texts: [...{
  text: string,
  classWrapper: string
}[]],
  inputs: [...{
    placeholder: string,
    error: string,
    type: string,
    name: string,
    class: string
  }[]]
}

type TemplateName ='loginIn' | 'registration'
const createrTemplates=new CreaterTemplates()
class MediatorModal {
  private modal: Modal;
  init(){
    this.modal=new Modal ({
      tagName: 'form',
      id: 'form',
      classes: ['form'],
      parentId: "root-modal",
    })
    this.dispatch('loginIn')
  }

  dispatch(templateName: TemplateName){
    const template =this._getTemplate(templateName)

    this.modal.dispatchComponentDidMount(template)
    createrTemplates.createInputsListeners()
  }
  _getTemplate=function (type:TemplateName){
    const  source =templates[type] as Source
    return html`
      ${ createrTemplates.createTemplate(source)}
      <div class="form__buttons">
     ${tmpl_button({
    id: 'login_button',
    class: type==='loginIn'? 'form__button': 'form__button form__button_disable',
    click: this.clickLogin,
    text: 'Войти'
  })}
        ${tmpl_button({
    id: 'registration',
    class: 'form__button',
    click: type==='loginIn'?this.clickRegistration.bind(this): this.registrationAction,
    text: type==='loginIn'? 'Нет акаунта?': 'Регистрация'
  })}
      </div>
    `
  }

  update(name: TemplateName){
    const template=this._getTemplate(name)
    this.modal.dispatchComponentDidUpdate(template)
    createrTemplates.createInputsListeners()
  }
  clickRegistration=function (event: Event){
    event.preventDefault()
    router.go('/pages/modal/registration.html')
  }

  clickLogin=function (event: Event){
    event.preventDefault()
    if (createrTemplates.validationAll())  router.go('/pages/main.html')

  }

  registrationAction=function(event: Event){
    event.preventDefault()
    if (createrTemplates.validationAll()) {
      const inputFields=createrTemplates.getInputsName()
      const form=document.forms[0]
      inputFields.map(name=> {
        console.info(name, ':', form[name].value)
      })
    }


  }
}

export default MediatorModal
