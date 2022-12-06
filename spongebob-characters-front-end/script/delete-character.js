import loadFormInfos from "../services/load-form-infos.js"
import startButtons from "../services/start-buttons.js"
import API from "../services/api.js"
const api = new API

function main(){
  const id = localStorage.getItem('char-id')
  const char = api.get(`character/${id}`)
  loadFormInfos(char)
  startButtons('DELETE', `delete-character/${id}`)
}

main()