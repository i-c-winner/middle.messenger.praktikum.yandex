import AbstractComponent from "../AbstractComponent";
type ModalProps= {
  tagName: string,
  classes: [...string[]],
  id: string,
  parentId: string,
}
class Modal extends AbstractComponent<ModalProps> {

  static instance: Modal;

  constructor(props: ModalProps) {
    super(props);
    if (Modal.instance){
      return Modal.instance
    } else {
      Modal.instance=this
      return this
    }
  }

}
export default Modal
