function main(){
  const data = JSON.parse(localStorage.getItem('page-data'))
  startScript(data)
  setInfos(data)
}

function setInfos(data){
  const headTitle = document.getElementById('head-title')
  const formTitle = document.getElementById('form-title')
  headTitle.innerHTML = formTitle.innerHTML = data['title'] 
  document.getElementById('send-button').innerHTML = data['button-action']
}

function startScript(data){
  const scr = document.createElement('script')
  scr.setAttribute('type', 'module')
  scr.setAttribute('src', `../script/${data['script']}-character.js`)
  const head = document.getElementsByTagName('head')[0]
  head.appendChild(scr)
}

main()