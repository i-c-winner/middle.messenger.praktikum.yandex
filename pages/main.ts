import {ChatsBox} from "../components/chats-box";

const chatsBox=new ChatsBox({
  parentId: 'main_chats',
  tagName: 'div',
  id: 'chats_box',
  classes: ['chats_box']
}
)
chatsBox.dispatchComponentDidMount()