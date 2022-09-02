import AbstractComponent from "../AbstractComponent";
import {html, render} from 'lit'
import tmpl_input from "../../tamplates/tmpl_input";
import tmpl_button from "../../tamplates/tmpl_button";




class Modal extends AbstractComponent {
  private static instance: any;
  private instance: this;
  private masterModal: any;
  constructor(props) {
    super(props);
    if (Modal.instance){
      return Modal.instance
    } else {
      Modal.prototype.instance=this
      return this
    }
  }
  inject(data){
    const element= html`<h3 class="form__title">${data.title}</h3>
      ${data.fields.map(field=>html`${tmpl_input(
    {
      placeholder: field.placeholder,
      class: 'form__input-box'
    }          
  )}`
  )}
    <div class="form__buttons">
        ${data.buttons.map(button=>{
    return  html`${tmpl_button({
      text: button.text,
      class: button.class,
    
    })}`
  })}
    </div>`

    render(element, this.element)
  }

  render() {
    document.getElementById('root-modal').appendChild(this.element)
  }
}
export default Modal