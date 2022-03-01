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
} = ctrlFuncs

app.get('/characters', getCharacters)
app.post('/character', addCharacter)
app.delete('/characters/:id', deleteCharacter)
// app.put('/characters/:title', updateCharacter)

app.listen(port, () => console.log(`Server running on ${port}`));
