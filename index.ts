import Router from "./utils/routing/Router";
import ModalRoot from "./components/modal/ModalRoot";
import ChatsBox from "./components/Chats-box";

const router=new Router()
router
  .use('/', ModalRoot, {
    parentId: 'root-modal',
    tagName: 'div',
    classes: ['modal', 'modal-form'],
    id: 'modal'})
  .use('/registration', ModalRoot,{
    parentId: 'root-modal',
    tagName: 'div',
    classes: ['modal', 'modal-form'],
    id: 'modal'
  })
  .use('/chats', ChatsBox, {
    parentId: 'main-chats',
    tagName: 'div',
    id: 'chats_box',
    classes: ['chats_box']
  })
  .start()

