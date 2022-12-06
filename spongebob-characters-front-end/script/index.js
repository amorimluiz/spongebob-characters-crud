import API from "../services/api.js"

const api = new API

function render(characters){
    const main = document.getElementById('content-div')
    main.innerHTML = ""
    characters.map(char => {
        const div = generateCharacterCard(char)
        if(char.alive){
            main.appendChild(div)
        }
    })
    startCharacterButtons()
}

function generateCharacterCard(char){
    const div = document.createElement('div')
    div.classList.add('character-card')
    div.setAttribute('id', `character-card-${char.id}`)
    div.setAttribute('char-id', char.id)
    div.innerHTML += `<p class="property name"><span class="property-data">${char.name}</span></p>
                      <p class="property">Gênero: <span class="property-data">${char.gender}</span></p>
                      <p class="property">Espécie: <span class="property-data">${char.specie}</span></p>
                      <p class="property">Profissão: <span class="property-data">${char.profession}</span></p>
                      <p class="property">Aparições: <span class="property-data">${char.appearances}</span></p>`

    const buttonsDiv = document.createElement('div')
    buttonsDiv.classList.add('character-buttons-div')
    
    buttonsDiv.innerHTML += generateIconButton('delete', 'fa-solid fa-trash', char.id)
    buttonsDiv.innerHTML += generateIconButton('edit', 'fa-solid fa-pen-to-square', char.id)
    div.appendChild(buttonsDiv)

    return div
}

function generateIconButton(action, icon){
    let button = 
        `<button type="button" class="${action}-button character-card-button" value="${action}"">
            <i class="${icon}"></i>
        </button>`
    return button
}

function sort(characters, sortFunction){
    characters.sort(sortFunction)
    render(characters)
}

function startCharacterButtons(){
    const characterButtons = document.getElementsByClassName('character-card-button')
    for(let i = 0; i < characterButtons.length; i++){
        characterButtons[i].addEventListener('click', () => {
            const id = characterButtons[i].parentElement.parentElement.getAttribute('char-id')
            localStorage.setItem('char-id', id)
            console.log(localStorage.getItem('char-id'))
            location.href = `./pages/${characterButtons[i].value}-character.html`
        })
    }
}

function main(){
    let characters = api.get('characters')
    render(characters)

    const appearanceSortButton = document.getElementById('appearances-sort-button')
    appearanceSortButton.addEventListener('click',  () => {
        sort(characters, (char1, char2) => char1.appearances < char2.appearances? 1 : -1)
    })

    const nameSortButton = document.getElementById('name-sort-button')
    nameSortButton.addEventListener('click',  () => {
        sort(characters, (char1, char2) => char1.name > char2.name? 1 : -1)
    })

    const turnOverButton = document.getElementById('turn-over-button')
    turnOverButton.addEventListener('click',  () => {
        characters = api.get('characters')
        render(characters)
    })

    const newCharacterButton = document.getElementById('new-character-button')
    newCharacterButton.addEventListener('click', () => {
        location.href = "./pages/new-character.html"
    })
}

main()