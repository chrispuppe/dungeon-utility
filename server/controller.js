const characterCards = []

module.exports = {
    getCharacters: (req, res) => {
        res.status(200).send(characterCards)
    },

    getCharacter: (req, res) => {
        let charId = req.params.id
        res.status(200).send(characterCards[charId])
    },

    addCharacter: (req, res) => {
        let character = req.body
        if (character.hp === null) {
            character.hp = 0
        }
        if (character.ac === null) {
            character.ac = 0
        }
        characterCards.push(character)
        res.status(200).send(characterCards)
        // console.log(characterCards)
    },

    updateCharacter: (req, res) => {
        let charId = req.params.id
        characterCards[charId].name = req.body.name
        characterCards[charId].race = req.body.race
        console.log(req.body.hp)
        if (req.body.hp === null){
            characterCards[charId].hp = 0
        } else {
            characterCards[charId].hp = req.body.hp
        }
        if (req.body.ac === null){
            characterCards[charId].ac = 0
        } else {
            characterCards[charId].ac = req.body.ac
        }
        characterCards[charId].ac = req.body.ac
        res.status(200).send(characterCards[charId])
    },

    deleteCharacter: (req, res) => {
        let charToDelete = req.params.id
        characterCards.splice(charToDelete, 1)
        res.status(200).send(characterCards)
    },

    charHpUp: (req, res) => {
        let charId = req.params.id
        characterCards[charId].hp++
        // console.log(characterCards[charId].hp)
        res.status(200).send(characterCards)
    },

    charHpDown: (req, res) => {
        let charId = req.params.id
        characterCards[charId].hp--
        // console.log(characterCards[charId].hp)
        res.status(200).send(characterCards)
    },

    // function rollDice(side, qty){
    //     let sum = 0
    //     let min = Math.ceil(1)
    //     let max = Math.floor(side)
    //     for(let i = 0; i < qty; i++){
    //         sum += Math.floor(Math.random() * (max - min + 1) + min)
    //     }
    //     return sum
    // }
    // console.log(rollDice(4, 5))

}