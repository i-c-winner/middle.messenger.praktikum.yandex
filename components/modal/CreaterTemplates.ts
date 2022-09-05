import {html} from "lit";
import tmpl_input from "../../tamplates/tmpl_input";
import tmpl_button from "../../tamplates/tmpl_button";
import tmpl_text from "../../tamplates/tmpl_text";
import Validator from "../../utils/Validator";

const validator=new Validator()
class CreaterTemplates{
  private inputsName: [...string[]];

  private validator: any;
  constructor(props) {

    this.validator=new Validator()
  }
  createTemplate(source){
    this.inputsName=[]
    return html`
      ${source.texts.map(text=>{
    return html`${tmpl_text({
      text: text.text,
      classWrapper: text.classWrapper
    })}`
  })}
         ${source.inputs.map(input=>{
    this.inputsName.push(input.name)
    return  html`      
      <div class="form__input-wrapper">
        ${tmpl_input({
    placeholder: input.placeholder,
    type: input.type,
    class: input.class,
    name: input.name
  })}
        ${tmpl_text({
    text: input.error,
    id: `${input.name}_error`,
    classWrapper: 'form__error'
  })}        
      </div>
    `
  })}    
        `
  }
  stopReset(event){
    event.preventDefault()
  }

  createInputsListeners(){
    const form=document.forms[0]
    this.inputsName.map(name=>{
      const error=document.getElementById(`${name}_error`)
      this.clearInputField({
        form,
        name,
        error
      })
      form[name].addEventListener('focus', (event)=>{
        if (validator.oneValidator(name)) {
          this.toogleOn(error)
        } else {
          this.toogleOff(error)
        }
        event.target.parentNode.style="border: 1px solid blue"
      })
      form[name].addEventListener('blur', (event)=>{
        if (validator.oneValidator(name)) {
          this.toogleOn(error)
        } else {
          this.toogleOff(error)
        }
        event.target.parentNode.style='none'
      })
      form[name].addEventListener('input', ()=>{
        if (validator.oneValidator(name)) {
          this.toogleOn(error)
        } else {
          this.toogleOff(error)
        }
        validator.oneValidator(name)
      })
    })
  }
  getInputsName(){
    return this.inputsName
  }
  validationAll(){
    return  this.validator.validationAll(this.inputsName)
  }
  clearInputField(params){
    params.form[params.name].value=''
    this.toogleOn(params.error)
  }
  toogleOn(error){
    error.parentNode.classList.add('form__error_enable')
    error.parentNode.classList.remove('form__error_disable')
  }
  
  toogleOff(error){
    error.parentNode.classList.remove('form__error_enable')
    error.parentNode.classList.add('form__error_disable')
  }
}

export default CreaterTemplates