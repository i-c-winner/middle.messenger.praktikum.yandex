class Fetch{
  private xhr: XMLHttpRequest;

  request (props:{
    url: string,
    method: string,
    body?: JSON,
    headers?: any,
    timeout?: number
  }){
    this.xhr=new XMLHttpRequest()
    this.get(props.url)
    this.post(props.url, props.body)
    this.delete(props.url)
  }

  get(url: string){
    this.xhr.open('GET',url)
    this.xhr.send()
    return new Promise((resolve, reject) =>{
      this.xhr.onload=()=>{
        resolve(this.xhr)
      }
      this.xhr.onerror=(e=>{
        reject({
          error:e,
          answer: this.xhr
        })
      })
    })
  }

  post (url: string, body: JSON|undefined) {
    this.xhr.open('POST', url)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    this.xhr.send(body)
    return new Promise((resolve: any, reject: any)=>{
      this.xhr.onload=()=>{
        resolve(this.xhr)
      }
      this.xhr.onerror=(e=>{
        reject({
          error:e,
          answer: this.xhr
        })
      })
    })
  }

  delete(url: string){
    this.xhr.open('DELETE', url)
    this.xhr.send()
    return new Promise((resolve: any, reject: any)=>{
      this.xhr.onload=()=>{
        resolve(this.xhr)
      }
      this.xhr.onerror=(e=>{
        reject({
          error:e,
          answer: this.xhr
        })
      })
    })
  }

  put(url: string){
    this.xhr.open('PUT', url)
    this.xhr.send()
    return new Promise((resolve: any, reject: any)=>{
      this.xhr.onload=()=>{
        resolve(this.xhr)
      }
      this.xhr.onerror=((e: ProgressEvent)=>{
        reject({
          error:e,
          answer: this.xhr

        })
      })
    })
  }
}

export default Fetch
