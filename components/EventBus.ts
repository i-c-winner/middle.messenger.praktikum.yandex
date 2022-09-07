type Listeners={
  [key:string]: Function[]
}

class EventBus {
  listeners: Listeners={}

  on(event: string, callback: Function):void{
    if (!this.listeners[event]){
      this.listeners[event]=[]
    } this.listeners[event].push(callback)
  }

  off(event:never, callback: Function): void{
    if (!this.listeners[event]) throw  new Error('Нет такого правила')
    this.listeners[event].filter((listner: never)=>{
      return listner!==callback
    })
  }

  emit(event: string, ...args: any){
    if(!this.listeners[event]) throw new Error("Нет такого правила")
    this.listeners[event].map((listener: Function)=>{

      listener(...args)
    })
  }

}

export default EventBus
