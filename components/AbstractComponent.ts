import EventBus from "./old/EventBus";
import {Props} from "../utils/types";


class  AbstractComponent{
  props:Props
  element: HTMLElement
  init: Function
  container: Node|null
  EVENTS={
    INIT: 'component-init',
    MOUNT: 'component-did-mount',
    RENDER: 'component-did-render',
    UPDATE: 'component-did-update',
    RENDER_BLOCK: 'render-block'

  }
  eventBus=new EventBus()


  constructor(props:Props) {
    this.eventBus=new EventBus()
    this.props=props
    this.container=null
    this.props = this.getProps()
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
    if (classesForAdd.length!==0) {
      classesForAdd.map(elem=>{
        if (!this.props.classes.includes(elem)) this.props.classes.push(elem)
      })
    }
  }
  _init() {
    this.element=document.createElement(this.props.tagName)
    this.eventBus.emit(this.EVENTS.RENDER)
  }
  _seterProps(){
    this._setClasses()
    this._setId()
  }
  _setId(){
    this.element.id=this.props.id
  }
  _setClasses(){
    this.props.classes.map(style=>{
      this.element.classList.add(style)
    })
  }

  _render() {
    this._seterProps()
  }


  getProps(){
    const eventBus=this.eventBus
    const EVENTS=this.EVENTS
    return new Proxy(this.props, {
      get(target:Props, prop:string){
        if (!target[prop]){
          console.info('Попытка получить несуществующее свойство экземпляра')
        }
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target:Props, prop: string, value:never){
        target[prop]=value
        eventBus.emit(EVENTS.UPDATE)
        return true
      },
      defineProperty(target: Props, prop: string | symbol, attributes: PropertyDescriptor): boolean {
        if (!target[prop]) {
          return false
        } delete target[prop]
      }
    })

  }
}

export default AbstractComponent