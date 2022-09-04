import {html} from "lit";
import tmpl_input from "../../tamplates/tmpl_input";
import tmpl_button from "../../tamplates/tmpl_button";
import tmpl_text from "../../tamplates/tmpl_text";
import Validator from "../../utils/Validator";


class CreaterTemplates{
  private inputsName: [...string[]];

  private buttons: [
      ...{
      clickType: string,
      target: string,
    id:string
      }[]
  ]
  private validator: any;
  constructor(props) {

    this.validator=new Validator()
  }
  createTemplate(source){
    this.inputsName=[]
    this.buttons=[]
    return html`
      ${source.texts.map(text=>{
    return html`${tmpl_text({
      text: text.text,
      classWrapper: text.classWrapper
    })}`
  })}
         ${source.inputs.map(input=>{
    this.inputsName.push(input.name)
    return  html`${tmpl_input({
      placeholder: input.placeholder,
      type: input.type,
      class: input.class,
      name: input.name
    })}`
  })}<div class="form__buttons">
             ${source.buttons.map(button=>{
    this.buttons.push({
      id:button.id,
      clickType: button.clickType,
      target: button.target
    })
    return html`${
      tmpl_button({
        text: button.text,
        class: 'form__button',
        id: button.id,
        click: this.stopReset
      })
    }`
  })}  
           </div>       
        `
  }
  stopReset(event){
    event.preventDefault()
  }
  getButtons() {
    return this.buttons
  }
  createInputsListeners(){
    const form=document.forms[0]
    this.inputsName.map(name=>{
      form[name].addEventListener('focus', (event)=>event.target.parentNode.style="border: 1px solid blue")
      form[name].addEventListener('blur', (event)=>event.target.parentNode.style='none')
    })
  }

  validationAll(){
    return  this.validator.validationAll(this.inputsName)
  }

}

export default CreaterTemplates