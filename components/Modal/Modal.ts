import AbstractComponent from "../AbstractComponent";

class Modal extends AbstractComponent {
  private static instance: any;
  private instance: this;

  constructor(props) {
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