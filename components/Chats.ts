import AbstractComponent from "./AbstractComponent";
import Chat from "./Chat";
import constants from '../components/constants.js'

class Chats extends AbstractComponent{
  private chat: Chat;
  constructor(props) {
    super(props);
  }

  dispatchComponentDidMount() {
    constants.user.map(user=>{
      const chat=new Chat({
        tagName: 'div',
        classes: ['chat'],
        id: 'chat',
        parentId: 'chats',
        message: user.message,
        name: user.name,
        counter: user.counter
      })
      chat.dispatchComponentDidMount()
    }
    )

  }
}

export default Chats