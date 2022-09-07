import AbstractComponent from "./AbstractComponent";
import Chat from "./Chat";
import constants from '../components/constants.js'


type ChatsProps={
  tagName: string,
  classes: [...string[]],
  id: string,
  parentId: string,
}
class Chats extends AbstractComponent<ChatsProps>{
  constructor(props: ChatsProps) {
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