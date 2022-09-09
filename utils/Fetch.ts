interface Headers {
  [key:string]:string
}
interface Options {
  method: string,
  timeout?: number,
  body?: JSON,
  headers?: Headers
}
class Fetch{
  get(url: string, options: {}){
    return this._request(url, {...options, method: 'GET'})
  }
  put(url: string, options: {}){
    return this._request(url, {...options, method: 'PUT'})
  }
  delete(url: string, options: {}){
    return this._request(url, {...options, method: 'DELETE'})
  }
  set(url: string, options: {}){
    return this._request(url, {...options, method: 'SET'})
  }

  private _request(url: string, options: Options) {
    const xhr=new XMLHttpRequest()
    xhr.open(options.method, url)
    xhr.timeout=options.timeout=0
    const keys=Object.keys(options.headers={})
    keys.map((key)=>{
      if (options.headers!==undefined) xhr.setRequestHeader(key, options.headers[key])
    })
    xhr.send(options.body=undefined)
    return new Promise((resolve, reject)=>{
      xhr.onload=()=>{
        resolve(xhr)
      }
      xhr.onerror=()=>{
        reject(xhr)
      }
      xhr.ontimeout=()=>{
        reject(xhr)
      }
    })
  }
}

export default Fetch
