import AbstractComponent from "../AbstractComponents";
import Chat from "./Chat";
import {Props} from "../../utils/types";

class Chats extends AbstractComponent{
  private chat: Chat;
  private myProps: Props
  constructor(props) {
    super(props);
    this.props=props
    this.myProps=props
  }

  init(){
    console.log(this.props, 'props')
    this.myProps={
      ...this.props,
      classes:['chat'],
      parentId:'chats',
      id: 'chat',
    }
  }

  renderElement(){
    this.container.appendChild(this.element)
    this.chat=new Chat(this.myProps)
  }

  render(){
    this.renderElement()
  }
}

export default Chats