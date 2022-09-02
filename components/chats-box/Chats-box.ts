import Chats from "./Chats";
import AbstractComponent from '../AbstractComponent'



class ChatsBox extends AbstractComponent{
  private chats: Chats;

  constructor(props) {
    super(props)
  }
  dispatchComponentDidMount() {
    this.chats=new Chats({
      tagName: 'div',
      classes: ['chats'],
      id: 'chats',
      parentId: 'chats_box'
    })
    this.chats.dispatchComponentDidMount()
  }

}

export default ChatsBox