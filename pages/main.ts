import ChatsBox from '../components/Chats-box';
import {html, render} from 'lit'
import tmpl_text from '../tamplates/tmpl_text'
import tmpl_img from '../tamplates/tmpl_image'
const imageMenu = require('../static/images/munePoint.png')
const clip = require('../static/images/clip.png')
const array=require('../static/images/array.png')
import SmallModal from '../components/smallModal/SmallModal';
import chatsList from '../static/chatsList'
import {SMALLMODALID} from '../static/constants'


createChatsSection()
function createChatsSection(){
  const chatsBox=new ChatsBox({
    parentId: 'main-chats',
    tagName: 'div',
    id: 'chats_box',
    classes: ['chats_box']
  }
  )
  chatsBox.dispatchComponentDidMount()
}

createMessageSection()
function createMessageSection() {
  const page=document.getElementById('main-message')
  createHeader()
  createrMessagesBody(page)
  createFooter(page)
}

function createHeader() {
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
      classes: ['small-modal', 'small-modal_header'],
      type: SMALLMODALID.HEADER_BUTTON
    })
  }
}

function createrMessagesBody(page){
  document.body.addEventListener('keydown',(event)=>{
    if (event.key==='Escape'){
      const element=document.querySelector('.small-modal')
      if (element) element.remove()
    }

  })

  const messages=document.createElement('div')
  messages.classList.add('messages')

  chatsList.map(chat=>{
    const cardChats=document.createElement('div')
    setClasses(cardChats, chat.type)

    const element=html`
      <div class="message__list">
          ${tmpl_text({
    text: chat.text,
    classWrapper:'message__text'
  })}
          ${tmpl_img({
    path: chat.img,
    class: 'message__img'
  })}
          ${tmpl_text({
    text: chat.time(),
    classWrapper: 'message__time'
  })}
      </div>      
 `
    render(element, cardChats)
    messages.appendChild(cardChats)

  })
  page.appendChild(messages)
  function setClasses(container, type) {
    container.classList.add('message')
    if (type==='inner') {
      container.classList.add('message_inner')
    } else {
      container.classList.add('message_outer')
    }

  }
}

function createFooter(page) {
  const footer=document.createElement('div')
  footer.classList.add('footer')
  const element=html`
    ${tmpl_img({
    path: clip,
    class: 'footer__attache',
    click: footerGoLink  
  })}
    <input name="message" class="footer__input" type="text"/>
    ${tmpl_img({
    path: array,
    class: 'footer__link',
    
  })}
    `
  render(element, footer)
  page.appendChild(footer)

  function footerGoLink() {
    const smallModal= new SmallModal()
    smallModal.create({
      parentId: 'header',
      classes: ['small-modal', 'small-modal_header'],
      type: SMALLMODALID.FOOTER_BUTTON
    })
  }
}