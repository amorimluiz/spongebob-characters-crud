class API {

  #request = new XMLHttpRequest
  #url = "http://localhost:8080"

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

    return this.#request.responseText
  }

  put(url, body){
    this.#request.open('PUT', `${this.#url}/${url}`, true)
    this.#request.setRequestHeader('Content-type', 'application/json')
    this.#request.onload = () => {
      console.log(this.#request.responseText)
    }
    this.#request.send(JSON.stringify(body))

    return this.#request.responseText
  }

  delete(url, id){
    this.#request.open('DELETE', `${this.#url}/${url}/${id}`, true)
    this.#request.send()

    this.#request.onload = () => {
      console.log(this.responseText)
    }
    return this.responseText
  }
}

export default API