import EventBus from "./EventBus";
import {Props} from "../utils/types";
import {render, TemplateResult} from "lit";


class AbstractComponent {
  props: Props
  private element: HTMLElement
  init: Function
  private static EVENTS = {
    INIT: 'component-init',
    MOUNT: 'component-did-mount',
    RENDER: 'component-did-render',
    UPDATE: 'component-did-update',
  }
  private eventBus: EventBus;

  constructor(props: Props) {
    this.eventBus = new EventBus()
    this.props = props
    this.props = this.getProps()
    this._registerEvents()
    this.eventBus.emit(AbstractComponent.EVENTS.INIT)
  }

  _registerEvents() {
    this.eventBus.on(AbstractComponent.EVENTS.INIT, this._init.bind(this))
    this.eventBus.on(AbstractComponent.EVENTS.MOUNT, this._componentDidMount.bind(this))
    this.eventBus.on(AbstractComponent.EVENTS.RENDER, this._render.bind(this))
    this.eventBus.on(AbstractComponent.EVENTS.UPDATE, this._componentDidUpdate.bind(this))
  }

  componentDidMount() {
    this.eventBus.emit(AbstractComponent.EVENTS.RENDER)
  }

  dispatchComponentDidMount(template: TemplateResult<1> | undefined){
    console.log(template)
    this.eventBus.emit(AbstractComponent.EVENTS.MOUNT, template)
  }
  _componentDidMount(template: TemplateResult<1> | undefined){
    render(template, this.element)
  }
  dispatchComponentDidUpdate(template: TemplateResult<1> | undefined){
    this.eventBus.emit(AbstractComponent.EVENTS.UPDATE, template)
  }

  _componentDidUpdate(template: TemplateResult<1> | undefined){
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
    this.eventBus.emit(AbstractComponent.EVENTS.RENDER)
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
    const container=document.getElementById(this.props.parentId)
    if (container!==null) container.appendChild(this.element)
  }


  getProps(){
    const eventBus=this.eventBus
    const EVENTS=AbstractComponent.EVENTS
    return new Proxy(this.props, {
      get(target, prop: never){
        if (!target[prop]){
          console.info('Попытка получить несуществующее свойство экземпляра')
        }
        const value:any = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target:Props, prop: never, value:never){
        target[prop]=value
        eventBus.emit(EVENTS.RENDER)
        return true
      },
      defineProperty(target: Props, prop: never): boolean {
        if (!target[prop]) {
          return false
        } delete target[prop]
        return true
      }
    })

  }
}

export default AbstractComponent
