const createCard = (charObj, charId) => {
    let characterCard = document.createElement('div')
    let characterName = document.createElement('div')
    let characterRace = document.createElement('div')
    let characterAc = document.createElement('div')
    let characterHpDiv = document.createElement('div')

    let hpLabelSpan = document.createElement('span')
    let hpMinusSpan = document.createElement('span')
    let hpNumSpan = document.createElement('span')
    let hpPlusSpan = document.createElement('span')

    characterName.textContent =  `Name: ${charObj[charId].name} `
    characterCard.appendChild(characterName)
    characterRace.textContent = `Race: ${charObj[charId].race} `
    characterCard.appendChild(characterRace)

    characterAc.textContent = `AC: ${charObj[charId].ac} `
    characterCard.appendChild(characterAc)

    hpLabelSpan.textContent = 'HP: '

    let tallyDownButton = document.createElement('button')
    tallyDownButton.textContent = "-"
    tallyDownButton.className = 'tally-down-button'
    tallyDownButton.name = `${charId}`
    tallyDownButton.addEventListener('click', hpDown)
    hpMinusSpan.appendChild(tallyDownButton)    

    hpNumSpan.textContent = ` ${charObj[charId].hp} `

    let tallyUpButton = document.createElement('button')
    tallyUpButton.textContent = "+"
    tallyUpButton.className = 'tally-up-button'
    tallyUpButton.name = `${charId}`
    tallyUpButton.addEventListener('click', hpUp)
    hpPlusSpan.appendChild(tallyUpButton)

    characterHpDiv.appendChild(hpLabelSpan)
    characterHpDiv.appendChild(hpMinusSpan)
    characterHpDiv.appendChild(hpNumSpan)
    characterHpDiv.appendChild(hpPlusSpan)

    characterCard.appendChild(characterHpDiv)

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

    characterCard.classList.add('character-card')

    document.querySelector('ul').appendChild(characterCard)
}

const getCharacters = () => {
    axios.get('http://localhost:4444/characters')
    .then((res) => {
        const data = res.data
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
    
    axios.get(`http://localhost:4444/character/${charId}`)
    .then((res) => {
        const character = res.data
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

    axios.put(`http://localhost:4444/character/${charId}`, character)
    .then((res) => {
        document.querySelector('#character-list').innerHTML = ''
        getCharacters()
    })
    .catch((err) => console.log(err))

    nameInput.value = ''
    raceInput.value = ''
    acInput.value = ''
    hpInput.value = ''

    let buttonToBeChanged = document.querySelector("#character-add")
    buttonToBeChanged.textContent = "Add"
    buttonToBeChanged.name = ""
    buttonToBeChanged.removeEventListener('click', updateSave)
    buttonToBeChanged.addEventListener('submit', addCharacter)
}

const hpUp = (event) => {
    event.preventDefault()
    let charId = event.target.name

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

    axios.put(`http://localhost:4444/character/down/${charId}`)
    .then((res) => {
        document.querySelector('#character-list').innerHTML = ''
        getCharacters()
    })
    .catch((err) => console.log(err))
}

getCharacters()