import AbstractComponent from "./AbstractComponent";
import {html} from "lit";

class Chat extends AbstractComponent{

  constructor(props) {
    super(props);
    this.props=props
  }
  dispatchComponentDidMount() {
    console.log(this.props)
    const template=html`
      <div class="chat__img-box">
        <div class="chat__img"></div>
        <div class="chat__name">${this.props.name}</div>
      </div>
      <div class="chat__message">${this.props.message}</div>
      <div class="chat__counter">${this.props.counter}</div>
   
    `
    super.dispatchComponentDidMount(template);
  }
}

export default Chat