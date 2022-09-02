import {html} from "lit";
import tmpl_input from "../../tamplates/tmpl_input";
import tmpl_button from "../../tamplates/tmpl_button";

class CreaterTemplates{
  private inputsName: [...string[]];

  private buttons: [
      ...{
      clickType: string,
      target: string,
    id:string
      }[]
  ]
  constructor(props) {
    this.inputsName=[]
    this.buttons=[]

  }
  createTemplate(source){
    return html`
           <h3>${source.title}</h3>
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
}

export default CreaterTemplates