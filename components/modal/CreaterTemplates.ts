import {html} from "lit";
import tmpl_input from "../../tamplates/tmpl_input";
import tmpl_text from "../../tamplates/tmpl_text";
import Validator from "../../utils/Validator";

interface Source {
  texts:[
    ...{
    text: string,
    classWrapper: string
    }[]
  ],
  inputs: [
      ...{
    placeholder: string,
        type: string,
        name: string,
        class: string,
        error: string
      } []
  ]
}
const validator=new Validator()
class CreaterTemplates{
  private inputsName: [...string[]];


  createTemplate(source: Source){
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

  createInputsListeners(){
    const form:HTMLFormElement=document.forms[0]
    this.inputsName.map((name:string)=>{

      const error = document.getElementById(`${name}_error`) as HTMLElement
      this.clearInputField({
        form,
        name,
        error
      })
      form[name].addEventListener('focus', ((event: FocusEvent)=>{
        if (validator.oneValidator(name)) {
          this.toogleOn(error)
        } else {
          this.toogleOff(error)
        }
        const target = event.target as HTMLInputElement|null
        if (target!==null) {
          const element= target.parentElement as HTMLDivElement
          element.classList.add('error-border_enable')
        }
      }))
      form[name].addEventListener('blur', (event: Event)=>{
        if (validator.oneValidator(name)) {
          this.toogleOn(error)
        } else {
          this.toogleOff(error)
        }
        const target = event.target as HTMLInputElement|null
        if (target!==null) {
          const element= target.parentElement as HTMLDivElement
          element.classList.add('error-border_disable')
        }
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
    return  validator.validationAll(this.inputsName)
  }
  clearInputField(params: {
    form: HTMLFormElement,
    name: string,
    error: HTMLElement
  }){
    if (params.form!==null){
      params.form[params.name].value=''
      this.toogleOn(params.error)
    }

  }
  toogleOn(error:HTMLElement){
    const target: HTMLElement|null= error.parentElement
    if (target!==null) {
      target.classList.add('form__error_enable')
      target.classList.remove('form__error_disable')
    }

  }
  
  toogleOff(error:HTMLElement){
    const target: HTMLElement|null= error.parentElement
    if (target!==null) {
      target.classList.add('form__error_disable')
      target.classList.remove('form__error_enable')
    }
  }
}

export default CreaterTemplates
