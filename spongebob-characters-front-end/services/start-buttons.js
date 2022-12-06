import API from "./api.js"
const api = new API
const home = "../index.html"

function startButtons(req, url){
  const cancelButton = document.getElementById('cancel-button')
  cancelButton.addEventListener('click', () => {
    location.href = home
  })
  const form = document.getElementById('character-form')
  form.addEventListener('submit', () => {
    event.preventDefault()
    sendRequest(req, url)
    location.href = home
  })
}

function sendRequest(req, url){
  const formData = new FormData(document.getElementById('character-form'))
  const propertys = ['name', 'gender', 'specie', 'profession']

  let char = {
    'appearances': Number(formData.get('appearances'))
  }

  propertys.map(property => {
    char[property] = formData.get(property)
  })

  if(formData.get('alive') != null){
    char['alive'] = Boolean(formData.get('alive'))
  }

  makeRequest(req, url, char)  
}

function makeRequest(req, url, char){
  if(req == 'PUT')
    console.log(api.put(url, char))
    
  if(req == 'POST')
    console.log(api.post(url, char))

  if(req == 'DELETE')
    console.log(api.delete(url))
}

export default startButtons