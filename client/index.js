
const getCharacters = () => {
    axios.get('http://localhost:4444/characters')
    .then((res) => {
        const data = res.data
        console.log(data)
        for (let i = 0; i < data.length; i++) {
            let characterList = document.createElement('li')
            let characterName = document.createElement('span')
            characterName.textContent = data[i].name
            characterList.appendChild(characterName)
            let deleteButton = document.createElement('button')
            deleteButton.className = 'delete-button'
            deleteButton.textContent = 'Delete'
            deleteButton.name = `${i}`
            deleteButton.addEventListener('click', deleteCharacter)
            characterList.appendChild(deleteButton)
            document.querySelector('ul').appendChild(characterList)
        }
    })
    .catch((err) => console.log(err))
}

const addCharacter = (event) => {
    event.preventDefault()
    let nameInput = document.querySelector("#name-input")
    let raceInput = document.querySelector("#race-input")
    let acInput = document.querySelector("#ac-input")
    let hpInput = document.querySelector("#hp-input")

    let character = {
        name: nameInput.value,
        race: raceInput.value,
        ac: parseInt(acInput.value),
        hp: parseInt(hpInput.value)
    }
    console.log(character)


    axios.post('http://localhost:4444/character', character)
    .then((res) => {
        let charObj = res.data
        let newList = document.createElement('li')
        let newSpan = document.createElement('span')
        console.log(charObj)
        newSpan.textContent = charObj[charObj.length -1].name
        newList.appendChild(newSpan)
        let deleteButton = document.createElement('button')
        deleteButton.className = 'delete-button'
        deleteButton.textContent = 'Delete'
        deleteButton.addEventListener('click', deleteCharacter)
        newList.appendChild(deleteButton)
        let newCharId = res.data.length - 1
        deleteButton.name = `${newCharId}`
        document.querySelector('ul').appendChild(newList) 
        nameInput.value = ''
        raceInput.value = ''
        acInput.value = ''
        hpInput.value = ''
    })
    .catch((err) => console.log(err))
}

document.querySelector('form').addEventListener('submit', addCharacter)

const deleteCharacter = (event) => {
    event.preventDefault()

    let charId = event.target.name
    console.log(charId)
    axios.delete(`http://localhost:4444/characters/${charId}`)
    .then((res) => {
        document.querySelector('#character-list').innerHTML = ''
        getCharacters()
    })
    .catch((err) => console.log(err))
}



getCharacters()