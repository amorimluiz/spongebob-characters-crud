function loadFormInfos(char){
  loadTextInfos(char)
  loadRadio(char)
}

function loadTextInfos(char){
  for(let property in char){
    const input = document.getElementById(property)
    if(input != null){
      input.value = char[property]
    }
  }
}

function loadRadio(char){
  const radios = document.getElementsByName('alive')
  if(char.alive){
    radios[0].checked = true
  }
  else{
    radios[1].checked = true;
  }
}

export default loadFormInfos