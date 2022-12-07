function setInputsAttribute(attribute){
  const inputs = document.getElementsByClassName('form-input')
  for(let i = 0; i < inputs.length; i++){
    inputs[i].setAttribute(attribute, true)
  }
}

export default setInputsAttribute