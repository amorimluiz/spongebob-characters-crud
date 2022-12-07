class API {

  #request = new XMLHttpRequest
  // #url = "https://spongebob-characters-api.onrender.com"
  #url = "http://localhost:3000"
  
  get(url){
    this.#request.open('GET', `${this.#url}/${url}`, false)
    this.#request.send()
    return JSON.parse(this.#request.responseText)
  }

  post(url, body){
    this.#request.open('POST', `${this.#url}/${url}`, false)
    this.#request.setRequestHeader('Content-type', 'application/json')
    this.#request.onload = () => {
      console.log(this.#request.responseText)
    }
    this.#request.send(JSON.stringify(body))

    return JSON.parse(this.#request.responseText)
  }

  put(url, body){
    this.#request.open('PUT', `${this.#url}/${url}`, false)
    this.#request.setRequestHeader('Content-type', 'application/json')
    this.#request.onload = () => {
      console.log(this.#request.responseText)
    }
    this.#request.send(JSON.stringify(body))
    return JSON.parse(this.#request.responseText)
  }

  delete(url){
    this.#request.open('DELETE', `${this.#url}/${url}`, false)
    this.#request.send()
    return JSON.parse(this.#request.responseText)
  }
}

export default API