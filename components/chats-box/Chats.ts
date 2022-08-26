import AbstractComponent from "../AbstractComponents";

class Chats extends AbstractComponent{
  constructor(props) {
    super(props);
    this.props=props

  }
  init(){
    console.log(this.element)
  }
  render(){
    return 'this is chats'
  }
}

export default Chats