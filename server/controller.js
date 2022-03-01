const characterCards = []

module.exports = {
    getCharacters: (req, res) => {
        res.status(200).send(characterCards)
    },

    addCharacter: (req, res) => {
        let character = req.body
        // console.log(character)
        characterCards.push(character)
        res.status(200).send(characterCards)
        // console.log(characterCards)
    },

    updateCharacter: (req, res) => {

    },

    deleteCharacter: (req, res) => {
        let charToDelete = req.params.id
        characterCards.splice(charToDelete, 1)
        res.status(200).send(characterCards)
    }


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