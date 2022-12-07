import startButtons from "../services/start-buttons.js"
import setInputsAttribute from "../services/setInputsAttibute.js"

function main(){
  startButtons('POST', 'add-character')
  setInputsAttribute("required")
}

main()