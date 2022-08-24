
import AbstractComponent from '../abstractComponents'
class ChatsBox extends AbstractComponent{
  constructor(props) {
    super(props);
  }
  render(){
    const box=document.body
    box.append(this.element)
  }

}

export default ChatsBox