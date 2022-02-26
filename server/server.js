const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

function randomReply(res, replyList) {
  let randomIndex = Math.floor(Math.random() * replyList.length);
  let randomMessage = replyList[randomIndex];

  res.status(200).send(randomMessage);
}

const compliments = ["Gee, you're a smart cookie!",
"Cool shirt!",
"Your Javascript skills are stellar.",
];

app.get("/api/compliment", (req, res) => {
  randomReply(res, compliments)
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Courtesy begins in the home.",
					 "Don’t just spend time. Invest it.",
					 "Don’t just think, act!",
           "Now is a good time to sell stock.",
           "Pennies from heaven find their way to your doorstep this year!",
  ];

  // choose random compliment
  randomReply(res, fortunes)
});

app.delete("/api/compliment", (req, res) => {
  for (let i = 0;i < compliments.length;i) {
    compliments.pop()
  }
  // console.log(compliments)
  res.status(200)
})

app.post("/api/compliment", (req, res) => {
    // console.log(req.body.value)
    // console.log("Before", compliments)
    const testCompliment = req.body.value
    // const newComplimentText = document.querySelector('textarea').value
    compliments.push(testCompliment)
    // console.log("After", compliments)
    res.status(200)
    return
})

app.listen(4000, () => console.log("Server running on 4000"));


// *******************************************************************

// require('dotenv').config()
// const express = require('express')
// const app = express()
// const cors = require('cors')
// const {SERVER_PORT} = process.env
// const {seed, getCountries, getCities, createCity, deleteCity} = require('./controller.js')

// app.use(express.json())
// app.use(cors())

// // DEV
// app.post('/seed', seed)

// // COUNTRIES
// app.get('/countries', getCountries)

// // CITIES
// app.post('/cities', createCity)
// app.get('/cities', getCities)
// app.delete('/cities/:id', deleteCity)

// app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))