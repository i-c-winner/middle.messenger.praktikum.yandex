class EventBus {
  listeners=[]

  on(event, callback){
    if (!this.listeners[event]){
      this.listeners[event]=[]
    } this.listeners[event].push(callback)
  }
  off(event, callback){
    if (!this.listeners[event]) throw  new Error('Нет такого правила')
    this.listeners[event].filter(listner=>{
      return listner!==callback
    })
  }
  emit(event, ...args){
    if(!this.listeners[event]) throw new Error("Нет такого правила")
    this.listeners[event].map(listener=>{
      listener(...args)
    })
  }
}

export default EventBus