import EventBus from "./EventBus";


type Props={
    tagName:string,
    classes: [...string[]],
    text?: string,
    icon?: never
    bind(): never;
  }

class  AbstractComponent{
  private readonly props:Props
  element: HTMLElement;

  EVENTS={
    INIT: 'component-init',
    MOUNT: 'component-did-mount',
    RENDER: 'component-did-render',
    UPDATE: 'component-did-update'
  }
  eventBus=new EventBus()

  constructor(props:Props) {
    this.eventBus=new EventBus()
    this.props = this.getProps.bind(this)(props)
    this._registerEvents()
    this.eventBus.emit(this.EVENTS.INIT)


  }
  _registerEvents(){
    this.eventBus.on(this.EVENTS.INIT, this._init.bind(this))
    this.eventBus.on(this.EVENTS.MOUNT, this.componentDidMount.bind(this))
    this.eventBus.on(this.EVENTS.RENDER, this._render.bind(this))
    this.eventBus.on(this.EVENTS.UPDATE, this.componentDidMount.bind(this))

  }
  componentDidMount(){
    this._setClasses()
    this.eventBus.emit(this.EVENTS.RENDER)
  }
  componentDipUpdate(){

  }
  changeClasses(classesForDelete:[...string[]], classesForAdd:[...string[]]) {
    if (classesForDelete.length!==0){
      classesForDelete.map(element=>{
        this.props.classes= this.props.classes.filter(elem=>elem!==element)
      })
    }
    if (classesForAdd.length!==0)  classesForAdd.map(elem=>this.props.classes.push(elem))
  }
  _init() {
    this.element=document.createElement(this.props.tagName)
    this.eventBus.emit(this.EVENTS.MOUNT)
  }
  _setClasses(){
    this.props.classes.map(style=>{
      this.element.classList.add(style)
    })
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  render(){}

  _render(){
    this.element.innerText=this.props.text
    this.render()
  }
  getProps(props:Props){
    return new Proxy(props, {
      get(target:Props, prop:string){
        if (!target[prop]){
          throw new Error('Попытка получить несуществующее свойство экземпляра')
        }
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target:Props, prop: string, value:never){
        target[prop]=value
        return true
      }
    })

  }
}

export default AbstractComponent