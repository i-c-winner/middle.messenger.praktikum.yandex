import AbstractComponent from "./AbstractComponent";
import Chat from "./Chat";
import {Props} from "../utils/types";

class Chats extends AbstractComponent{
  private chat: Chat;
  constructor(props) {
    super(props);
  }

  dispatchComponentDidMount() {
    this.chat=new Chat({
      tagName: 'div',
      classes: ['chat'],
      id: 'chat',
      parentId: 'chats'
    })
    this.chat.dispatchComponentDidMount(null)
  }
}

export default Chats