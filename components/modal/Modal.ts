import AbstractComponent from "../AbstractComponent";
type ModalProps = {
  tagName: string,
  classes: [...string[]],
  id: string,
  parentId: string,
}

class Modal extends AbstractComponent<ModalProps> {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  private instance: any;
  private static instance: any;

  constructor(props: ModalProps) {
    super(props);
    if (Modal.instance){
      return Modal.instance
    } else {
      Modal.prototype.instance=this
      return this
    }
  }

}
export default Modal
