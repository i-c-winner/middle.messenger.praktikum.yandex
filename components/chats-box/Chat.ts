import AbstractComponent from "../AbstractComponent";
import LastMessage from "./LastMessage";
import {Props} from "../../utils/types";

class Chat extends AbstractComponent{
  myProps:Props
  constructor(props) {
    super(props);
    this.props= props
  }

  init(){
    this.myProps={
      ...this.props,
      classes:['chat__messege'],
      parentId:'chat',
      id: 'chat-messege',
    }
  }

  renderElement(){
    this.container.appendChild(this.element)
    this.lastMessage=new LastMessage(this.myProps)
  }

  render(){
    this.renderElement()
  }
}

export default Chat