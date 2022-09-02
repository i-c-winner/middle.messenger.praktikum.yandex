import ChatsBox from "../components/Chats-box";
import {html, render} from 'lit'
import tmpl_text from '../tamplates/tmpl_text'
import tmpl_img from '../tamplates/tmpl_image'
const imageMenu = require('../static/images/munePoint.png')
import MediatorModal from "../utils/MediatorModal";

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
  const mediatorModal=new MediatorModal()
  mediatorModal.initSmallModal()
}

