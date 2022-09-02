import {html} from "lit";
import {map} from  'lit/directives/map'
import tmpl_input from "../../tamplates/tmpl_input";
import tmpl_button from "../../tamplates/tmpl_button";


class CreaterTemplates{
  private fields: [...string[]];
  constructor(props) {
    this.inputsName=[]

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
    return html`${
      tmpl_button({
        text: button.text,
        class: 'form__button'
      })
    }`
  })}  
           </div>       
        `
  }

  createListeners(){
    const form=document.forms[0]
    console.log(this.fields)
    this.inputsName.map(name=>{
      form[name].addEventListener('focus', (event)=>event.target.parentNode.style="border: 1px solid blue")
      form[name].addEventListener('blur', (event)=>event.target.parentNode.style='none')
    })
  }
}

export default CreaterTemplates