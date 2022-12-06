function loadFormInfos(char){
  for(let property in char){
    const input = document.getElementById(property)
    if(input != null){
      input.value = char[property]
    }
  }
}

export default loadFormInfos