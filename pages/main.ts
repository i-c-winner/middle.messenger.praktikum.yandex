import ChatsBox from "../components/Chats-box";

const chatsBox=new ChatsBox({
  parentId: 'main-chats',
  tagName: 'div',
  id: 'chats_box',
  classes: ['chats_box']
}
)
chatsBox.dispatchComponentDidMount()