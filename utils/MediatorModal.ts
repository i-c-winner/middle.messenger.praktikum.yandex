import Modal from "../components/modal/Modal";
import templates from "../components/modal/dataBasa";
import CreaterTemplates from "../components/modal/CreaterTemplates";
import {html} from 'lit'
import tmpl_button from "../tamplates/tmpl_button";

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

  dispatch(templateName: any){
    const template=this._getTemplate(templateName) as any
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.modal.dispatchComponentDidMount(template)
    createrTemplates.createInputsListeners()
  }
  _getTemplate=function (type: keyof typeof templates){
    const source: any=templates[type]
    console.log(source, 'sdsfsdf')
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
    click: type==='loginIn'?this.clickRegistration.bind(this): this.registration,
    text: type==='loginIn'? 'Нет акаунта?': 'Регистрация'
  })}
      </div>
    `
  }

  update(name: any){
    const template=this._getTemplate(name)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.modal.dispatchComponentDidUpdate(template)
    createrTemplates.createInputsListeners()
  }
  clickRegistration=function (event: Event){
    event.preventDefault()
    this.update('registration')
  }

  clickLogin=function (event: Event){
    event.preventDefault()
    if (createrTemplates.validationAll()) window.location.href='/pages/main.html'
  }

  registration=function(event: Event){
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
