import Chats from "./Chats";
import AbstractComponent from '../AbstractComponents'

class ChatsBox extends AbstractComponent{
  private chats: Chats;
  constructor(props) {
    super(props);
    this.props=props

  }
  init(){
    console.log(this.element)
    this.chats=new Chats(this.props)
  }
  render(){
    return this.element.innerText=this.chats.render()
  }

}

export default ChatsBox