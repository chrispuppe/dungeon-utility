const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const port = 4444

const ctrlFuncs = require("./controller")

const {
  getCharacters,
  addCharacter,
  updateCharacter,
  deleteCharacter,
  charHpUp,
  charHpDown,
  getCharacter,
} = ctrlFuncs

app.get('/characters', getCharacters)
app.get('/character/:id', getCharacter)
app.post('/character', addCharacter)
app.delete('/characters/:id', deleteCharacter)
app.put('/character/:id', updateCharacter)
app.put('/character/up/:id', charHpUp)
app.put('/character/down/:id', charHpDown)

app.listen(port, () => console.log(`Server running on ${port}`));
