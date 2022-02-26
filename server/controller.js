// const config = require('dotenv')
// const { Sequelize } = require('sequelize')

// const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             rejectUnauthorized: false
//         }
//     }
// })

// module.exports = {
    function rollDice(side, qty){
        let sum = 0
        let min = Math.ceil(1)
        let max = Math.floor(side)
        for(let i = 0; i < qty; i++){
            sum += Math.floor(Math.random() * (max - min + 1) + min)
        }
        return sum
    }
    console.log(rollDice(4, 5))
//     seed: (req, res) => {
//         sequelize.query(
//             `DROP TABLE IF EXISTS cities;
//             DROP TABLE IF EXISTS countries;
//             CREATE TABLE countries (
//                 country_id SERIAL PRIMARY KEY, 
//                 name VARCHAR
//             );
//             CREATE TABLE cities (
//                 city_id SERIAL PRIMARY KEY,
//                 name VARCHAR(60),
//                 rating INT,
//                 country_id INT,
//                 FOREIGN KEY (country_id) REFERENCES countries(country_id)
//             );

//             INSERT INTO cities (name, rating, country_id)
//             values ('New York', 5, 187),
//             ('Columbus', 3, 187),
//             ('Los Angeles', 4, 187),
//             ('Dalas', 5, 187);
//         `).then(() => {
//             console.log('DB seeded!')
//             res.sendStatus(200)
//         }).catch(err => console.log('error seeding DB', err))
//     },
    
//     getCountries: (req, res) => {
//         sequelize.query(
//             'SELECT * FROM countries;'
//         ).then(dbRes => res.status(200).send(dbRes[0])
//         ).catch(err => console.log('error getting countries from DB', err))
//     },

//     createCity: (req, res) => {
//         console.log(req.body)
//         const { name, rating, countryId } = req.body
//         let addcity = 'INSERT INTO cities (name, rating, country_id) VALUES ' 
//             + `('${name}', ${rating}, ${countryId});`
//         // console.log(addcity)
//         sequelize.query(addcity)
//         .then(dbRes => {
//             res.status(200).send(dbRes[0])
//             console.log(dbRes[0])
//         }).catch(err => console.log('error putting city in DB', err))
//     },

//     getCities: (req, res) => {
//         sequelize.query(
//             `SELECT
//             cities.name AS city,
//             countries.name AS country,
//             cities.rating,
//             cities.city_id
//             FROM cities
//             INNER JOIN countries
//             ON cities.country_id = countries.country_id
//             ORDER BY cities.rating DESC;
//         `).then(dbRes => res.status(200).send(dbRes[0])
//         ).catch(err => console.log('error getting cities from DB', err))
//     },

//     deleteCity: (req, res) => {
//         // console.log(req.params)
//         const { id } = req.params
        
//         sequelize.query(
//             `DELETE FROM cities WHERE city_id = ${id};`
//         ).then(dbRes => res.status(200).send(dbRes[0]))
//     }
// }