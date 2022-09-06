class Fetch{

  get(url: string){
    const xhr=new XMLHttpRequest()
    xhr.open('GET',url)
    xhr.send()
    return new Promise((resolve, reject) =>{
      xhr.onload=()=>{
        resolve(xhr)
      }
      xhr.onerror=(e=>{
        reject({
          error:e,
          answer: xhr

        })
      })
    })
  }

  post (url: string, body: JSON) {
    const xhr=new XMLHttpRequest()
    xhr.open('POST', url)

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore

    xhr.send(body)
    return new Promise((resolve: any, reject: any)=>{
      xhr.onload=()=>{
        resolve(xhr)
      }
      xhr.onerror=(e=>{
        reject({
          error:e,
          answer: xhr

        })
      })
    })
  }

  delete(url: string){
    const xhr=new XMLHttpRequest()
    xhr.open('DELETE', url)

    xhr.send()
    return new Promise((resolve: any, reject: any)=>{
      xhr.onload=()=>{
        resolve(xhr)
      }
      xhr.onerror=(e=>{
        reject({
          error:e,
          answer: xhr

        })
      })
    })
  }

  put(url: string){
    const xhr=new XMLHttpRequest()
    xhr.open('PUT', url)

    xhr.send()
    return new Promise((resolve: any, reject: any)=>{
      xhr.onload=()=>{
        resolve(xhr)
      }
      xhr.onerror=((e: ProgressEvent)=>{
        reject({
          error:e,
          answer: xhr

        })
      })
    })

  }

}

export default Fetch
