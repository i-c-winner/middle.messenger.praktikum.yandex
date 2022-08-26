import AbstractComponent from "../AbstractComponents";
import {html, render} from 'lit'

class Chats extends AbstractComponent{
  container:HTMLElement
  constructor(props) {
    super(props);
    this.props=props
  }
  init(){

  }
  getElement(){
    return this.element.innerText
  }

  render(){
    const template=html`<p class="pokl">this. is </p>`

    this.element.innerText=   template.strings[0]
    return this.element
  }
}

export default Chats