import Chats from "./Chats";
import AbstractComponent from '../AbstractComponents'
import {Props} from "../../utils/types";

class ChatsBox extends AbstractComponent{
  private chats: Chats;
  private myProps:Props
  constructor(props) {
    super(props);
    this.props=props
    this.myProps=props
  }

  init(){
    console.log(this.props, 'props')
    this.myProps={
      ...this.props,
      classes:['chats'],
      parentId:'chats-box',
      id: 'chats',
    }
  }

  renderElement(){
    this.container.appendChild(this.element)
    this.chats=new Chats(this.myProps)
  }

  render(){
    this.renderElement()
  }

}

export default ChatsBox