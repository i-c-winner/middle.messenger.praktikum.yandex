import ChatsBox from '../components/Chats-box';
import {html, render} from 'lit'
import tmpl_text from '../tamplates/tmpl_text'
import tmpl_img from '../tamplates/tmpl_image'
const imageMenu = require('../static/images/munePoint.png')
import SmallModal from '../components/smallModal/SmallModal';
import chatsList from '../static/chatsList'

const chatsBox=new ChatsBox({
  parentId: 'main-chats',
  tagName: 'div',
  id: 'chats_box',
  classes: ['chats_box']
}
)
chatsBox.dispatchComponentDidMount()

const element=html`${tmpl_text({
  text: "Vasja",
  classWrapper: 'header__name'})
}
${tmpl_img({path: imageMenu, click: clickHeaderButton, class: 'header__button'})}`
const container=document.querySelector('.main__header') as HTMLElement
render(element, container)
function clickHeaderButton(){
  const elementWithModal=document.getElementById('list')
  if (elementWithModal) elementWithModal.remove()
  const smallModal= new SmallModal()
  smallModal.create({
    parentId: 'header',
    classes: ['small-modal', 'small-modal_header']
  })
}
document.body.addEventListener('keydown',()=>{
  const element=document.querySelector('.small-modal')
  if (element) element.remove()
})
const page=document.getElementById('main-message')
chatsList.map(chat=>{
  const cardChats=document.createElement('div')
  const element=html`${tmpl_text({
    text: chat.text,
    classWrapper: ()=>chat.type==='inner'?'message__text message__text_inner': 'message__text message__text_outer'
  })}
  ${tmpl_img({
    path: chat.img,
    class: 'message__img'
  })}
 ${tmpl_text({
    text: chat.time(),
    classWrapper: 'message__time'
  })}
 `
  render(element, cardChats)
  page.appendChild(cardChats)

})


