import AbstractComponent from "../AbstractComponent";
import {Props} from "../../utils/types";

class LastMessage extends AbstractComponent{
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
    const element=document.createElement('p')
    element.innerText='finish'
    this.container.appendChild(element)

  }

  render(){
    this.renderElement()
  }
}

export default LastMessage