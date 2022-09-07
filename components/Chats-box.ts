import Chats from "./Chats";
import AbstractComponent from './AbstractComponent'

type ChatsBoxProps={
  tagName: string,
  classes: [...string[]],
  id: string,
  parentId: string,
}

class ChatsBox extends AbstractComponent<ChatsBoxProps>{
  private chats: Chats;

  constructor(props: ChatsBoxProps) {
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