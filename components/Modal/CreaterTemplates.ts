import {html} from "lit";
import {map} from  'lit/directives/map'
import tmpl_input from "../../tamplates/tmpl_input";
import tmpl_button from "../../tamplates/tmpl_button";


class CreaterTemplates{
  private fields: [...string[]];
  constructor(props) {
    this.fields=[]
  }
  template(source){
    return html`
           <h3>${source.title}</h3>
       ${source.inputs.map(input=>{
    this.fields.push(input.name)
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

}

export default CreaterTemplates