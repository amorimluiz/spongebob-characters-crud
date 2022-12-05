import API from "../services/api.js"
const api = new API

function main(){
  const cancelButton = document.getElementById('cancel-button')
  cancelButton.addEventListener('click', () => {
    location.href = `${location.origin}/spongebob-characters-front-end/index.html`
  })

  const form = document.getElementById('character-form')
  form.addEventListener('submit', adicionarPersonagem)
}

function adicionarPersonagem(){
  const formData = new FormData(document.getElementById('character-form'))
  const propertys = ['name', 'gender', 'specie', 'profession', 'appearances', 'alive']

  let char = {}

  propertys.map(property => {
    char[property] = formData.get(property)
  })

  console.log(api.post('add-character', char).message)
}

main()