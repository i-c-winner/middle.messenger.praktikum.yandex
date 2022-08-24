class EventBus {
  listeners=[]

  on(event:string, callback: Function):void{
    if (!this.listeners[event]){
      this.listeners[event]=[]
    } this.listeners[event].push(callback)
  }
  off(event:string, callback: Function): void{
    if (!this.listeners[event]) throw  new Error('Нет такого правила')
    this.listeners[event].filter(listner=>{
      return listner!==callback
    })
  }
  emit(event:string, ...args){
    if(!this.listeners[event]) throw new Error("Нет такого правила")
    this.listeners[event].map(listener=>{
      listener(...args)
    })
  }

}

export default EventBus