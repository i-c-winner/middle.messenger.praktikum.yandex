import EventBus from "./EventBus";
import {Props} from "../utils/types";
import {render} from "lit";


class  AbstractComponent{
  props:Props
  private element: HTMLElement
  init: Function
  private EVENTS={
    INIT: 'component-init',
    MOUNT: 'component-did-mount',
    RENDER: 'component-did-render',
    UPDATE: 'component-did-update',
  }
  private eventBus: EventBus;

  constructor(props:Props) {
    this.eventBus=new EventBus()
    this.props=props
    this.props = this.getProps()
    this._registerEvents()
    this.eventBus.emit(this.EVENTS.INIT)
  }
  _registerEvents(){
    this.eventBus.on(this.EVENTS.INIT, this._init.bind(this))
    this.eventBus.on(this.EVENTS.MOUNT, this._componentDidMount.bind(this))
    this.eventBus.on(this.EVENTS.RENDER, this._render.bind(this))
    this.eventBus.on(this.EVENTS.UPDATE, this._componentDidUpdate.bind(this))
  }
  componentDidMount(){
    this.eventBus.emit(this.EVENTS.RENDER)
  }

  dispatchComponentDidMount(template){
    this.eventBus.emit(this.EVENTS.MOUNT, template)
  }
  _componentDidMount(template){
    render(template, this.element)
  }
  dispatchComponentDidUpdate(template){
    this.eventBus.emit(this.EVENTS.UPDATE, template)
  }

  _componentDidUpdate(template){
    render(template, this.element)
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
    document.getElementById(this.props.parentId).appendChild(this.element)
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
        eventBus.emit(EVENTS.RENDER)
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