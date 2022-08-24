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

  constructor(props:Props) {
    this.props = this.getProps.bind(this)(props)
    this._init()
    this._setClasses()
    this._render()
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