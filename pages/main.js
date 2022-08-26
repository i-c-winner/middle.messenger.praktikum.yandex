import {html, render} from "lit";
import {ChatsBox} from "../components/chats-box";

const chatsBox=new ChatsBox({
  classes:['chats-box'],
  tagName: 'div',
  id:'chats-box'
})
function click(){
  chatsBox.changeClasses([], ['new-proba', 'as'])
}
const button=document.createElement('button')
button.addEventListener('click', click)
const element=html`<div class="main">
    ${chatsBox.getElement()}
</div>`

const container=document.getElementById('root')

render(element, container)

