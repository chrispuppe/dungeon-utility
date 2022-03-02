const createCard = (charObj, charId) => {
    let characterCard = document.createElement('Div')
    let characterName = document.createElement('span')
    let characterRace = document.createElement('span')
    let characterAc = document.createElement('span')
    let characterHp = document.createElement('span')

    characterName.textContent = charObj[charId].name
    characterCard.appendChild(characterName)
    characterRace.textContent = charObj[charId].race
    characterCard.appendChild(characterRace)
    characterAc.textContent = charObj[charId].ac
    characterCard.appendChild(characterAc)

    let tallyUpButton = document.createElement('button')
    tallyUpButton.textContent = "+"
    tallyUpButton.className = 'tally-up-button'
    tallyUpButton.name = `${charId}`
    tallyUpButton.addEventListener('click', hpUp)
    characterCard.appendChild(tallyUpButton)

    characterHp.textContent = charObj[charId].hp
    characterCard.appendChild(characterHp)

    let tallyDownButton = document.createElement('button')
    tallyDownButton.textContent = "-"
    tallyDownButton.className = 'tally-down-button'
    tallyDownButton.name = `${charId}`
    tallyDownButton.addEventListener('click', hpDown)
    characterCard.appendChild(tallyDownButton)

    let deleteButton = document.createElement('button')
    deleteButton.className = 'delete-button'
    deleteButton.textContent = 'Delete'
    deleteButton.name = `${charId}`
    deleteButton.addEventListener('click', deleteCharacter)
    characterCard.appendChild(deleteButton)

    let updateButton = document.createElement('button')
    updateButton.className = 'update-button'
    updateButton.textContent = 'Update'
    updateButton.name = `${charId}`
    updateButton.addEventListener('click', updateStart)
    characterCard.appendChild(updateButton)

    document.querySelector('ul').appendChild(characterCard)
}

const getCharacters = () => {
    axios.get('http://localhost:4444/characters')
    .then((res) => {
        const data = res.data
        // console.log(data)
        for (let i = 0; i < data.length; i++) {
            createCard(data, i)
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
    // console.log(character)


    axios.post('http://localhost:4444/character', character)
    .then((res) => {
        let charObj = res.data
        let newCharId = res.data.length - 1
        createCard(charObj,newCharId)

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

const updateStart = (event) => {
    event.preventDefault()

    let charId = event.target.name
    console.log(charId)

    
    
    axios.get(`http://localhost:4444/character/${charId}`)
    .then((res) => {
        const character = res.data
        // console.log(data)
        let nameInput = document.querySelector("#name-input")
        let raceInput = document.querySelector("#race-input")
        let acInput = document.querySelector("#ac-input")
        let hpInput = document.querySelector("#hp-input")
        let buttonToBeChanged = document.querySelector("#character-add")

        buttonToBeChanged.textContent = "Save"
        buttonToBeChanged.name = `${charId}`
        buttonToBeChanged.addEventListener('click', updateSave)

        nameInput.value = character.name
        raceInput.value = character.race
        acInput.value = character.ac
        hpInput.value = character.hp
        
    })
    .catch((err) => console.log(err))
}

const updateSave = (event) => {
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

    let charId = event.target.name
    console.log(charId)
    axios.put(`http://localhost:4444/character/${charId}`, character)
    .then((res) => {
        document.querySelector('#character-list').innerHTML = ''
        getCharacters()
    })
    .catch((err) => console.log(err))

    let buttonToBeChanged = document.querySelector("#character-add")

    buttonToBeChanged.textContent = "Add"
    buttonToBeChanged.name = ""
    document.querySelector('form').addEventListener('submit', addCharacter)

    nameInput.value = ''
    raceInput.value = ''
    acInput.value = ''
    hpInput.value = ''
}

const hpUp = (event) => {
    event.preventDefault()
    let charId = event.target.name
    console.log('up', charId)
    axios.put(`http://localhost:4444/character/up/${charId}`)
    .then((res) => {
        document.querySelector('#character-list').innerHTML = ''
        getCharacters()
    })
    .catch((err) => console.log(err))
}

const hpDown = (event) => {
    event.preventDefault()
    let charId = event.target.name
    console.log('down', charId)
    axios.put(`http://localhost:4444/character/down/${charId}`)
    .then((res) => {
        document.querySelector('#character-list').innerHTML = ''
        getCharacters()
    })
    .catch((err) => console.log(err))
}

getCharacters()