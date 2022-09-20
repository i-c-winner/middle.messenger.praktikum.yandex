import AbstractComponent from "../AbstractComponent";
import MediatorModal from "../../utils/MediatorModal";

type RootProps= {
  tagName: string,
  classes: [...string[]],
  id: string,
  parentId: string,
}
class ModalRoot extends AbstractComponent <RootProps> {
  private mediatorModal: MediatorModal;
  chatsBox: any;

  constructor(props: never) {
    super(props);
    this.mediatorModal=null
  }
  hide (){
    this.mediatorModal.hide()
  }

  componentDidMount() {
    this.mediatorModal=new MediatorModal()
    switch (window.location.pathname) {

    case '/registration':

      this.mediatorModal.init();
      this.mediatorModal.dispatch('registration');
      break;
    case '/':
      this.mediatorModal.init();
      this.mediatorModal.dispatch('loginIn');

      break;
    }
  }
}
    
export default ModalRoot
