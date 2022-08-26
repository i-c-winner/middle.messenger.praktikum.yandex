
import {ChatsBox} from "../components/chats-box";

const parentId='main'
const container=document.getElementById('root')
const element=document.createElement('div')
element.id=parentId
container.appendChild(element)

const chatsBox=new ChatsBox({
  classes:['chats-box'],
  tagName: 'div',
  id: 'chats-box',
  parentId
})

