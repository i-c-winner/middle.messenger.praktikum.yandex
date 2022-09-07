import AbstractComponent from "./AbstractComponent";
import {html} from "lit";

type ChatProps= {
  tagName: string,
  classes: [...string[]],
  id: string,
  parentId: string,
  name: string,
  message: string,
  counter: number
}
class Chat extends AbstractComponent <ChatProps>{

  constructor(props: ChatProps) {
    super(props);
    this.props=props
  }
  dispatchComponentDidMount() {
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