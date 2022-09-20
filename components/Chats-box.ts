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
  private static _instance: any;

  constructor(props: ChatsBoxProps) {
    if (ChatsBox._instance) {
      return ChatsBox._instance
    }
    super(props)
    ChatsBox._instance=this
  }
  componentDidMount() {
    this.dispatchComponentDidMount()
  }

  dispatchComponentDidMount() {
    console.log('ddd')
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
