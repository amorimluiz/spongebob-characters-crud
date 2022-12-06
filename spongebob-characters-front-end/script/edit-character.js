import API from "../services/api.js"
import startButtons from "../services/start-buttons.js"
import loadFormInfos from "../services/load-form-infos.js"
const api = new API

function main(){
  const id = localStorage.getItem('char-id')
  const char = api.get(`character/${id}`)
  loadFormInfos(char)
  startButtons('PUT', `att-character/${id}`)
}

main()