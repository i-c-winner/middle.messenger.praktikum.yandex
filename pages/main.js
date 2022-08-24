import {html, render} from "lit";
import tmpl_button from "../tamplates/tmpl_button";
import {ChatsBox} from "../components/chats-box";

const chatsBox=new ChatsBox({
  classes:['proba'],
  tagName: 'div',
  text: 'this is chack'
})
function click(){
  console.log('click')
  chatsBox.changeClasses([], ['new proba', 'as'])
}
const button=document.createElement('button')
button.addEventListener('click', click)
const element=html`
<div style="display: flex; flex-flow: column ">
    ${tmpl_button({
    text: "Страница с ошибкой 404",
    color: "red",
    href: "error404.html"
  })}   
    ${tmpl_button({
    text: "Страница с ошибкой 500",
    color: "red",
    href: "error5__.html"
  })}  
    ${tmpl_button({
    text: "Страница настройки",
    color: "red",
    href: "settings.html"
  })}
</div> `

const container=document.getElementById('root')
document.body.appendChild(button)
render(element, container)

