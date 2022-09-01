import Modal from "../components/Modal/Modal";
import masterModal from "../components/Modal/masterModal";

const modal=new Modal({
  id: 'modal',
  classes: ['form'],
  children: null,
  tagName: 'div'
})
modal.render()
masterModal('login', modal)

