import Chats from "./Chats";
import AbstractComponent from '../AbstractComponents'

class ChatsBox extends AbstractComponent{
  private chats: Chats;
  constructor(props) {
    super(props);
    this.props=props

  }
  init(){
    this.props={
      ...this.props,
      classes:['chats']
    }
    this.chats=new Chats(this.props)
  }
  getElement(){
    console.log(this.element.innerText)
    return this.element
  }
  render(){

    return this.element.innerHTML=this.chats.getElement()
  }

}

export default ChatsBox