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
//             insert into countries (name)
//             values ('Afghanistan'),
//             ('Albania'),
//             ('Algeria'),
//             ('Andorra'),
//             ('Angola'),
//             ('Antigua and Barbuda'),
//             ('Argentina'),
//             ('Armenia'),
//             ('Australia'),
//             ('Austria'),
//             ('Azerbaijan'),
//             ('Bahamas'),
//             ('Bahrain'),
//             ('Bangladesh'),
//             ('Barbados'),
//             ('Belarus'),
//             ('Belgium'),
//             ('Belize'),
//             ('Benin'),
//             ('Bhutan'),
//             ('Bolivia'),
//             ('Bosnia and Herzegovina'),
//             ('Botswana'),
//             ('Brazil'),
//             ('Brunei'),
//             ('Bulgaria'),
//             ('Burkina Faso'),
//             ('Burundi'),
//             ('Côte d''Ivoire'),
//             ('Cabo Verde'),
//             ('Cambodia'),
//             ('Cameroon'),
//             ('Canada'),
//             ('Central African Republic'),
//             ('Chad'),
//             ('Chile'),
//             ('China'),
//             ('Colombia'),
//             ('Comoros'),
//             ('Congo'),
//             ('Costa Rica'),
//             ('Croatia'),
//             ('Cuba'),
//             ('Cyprus'),
//             ('Czech Republic'),
//             ('Democratic Republic of the Congo'),
//             ('Denmark'),
//             ('Djibouti'),
//             ('Dominica'),
//             ('Dominican Republic'),
//             ('Ecuador'),
//             ('Egypt'),
//             ('El Salvador'),
//             ('Equatorial Guinea'),
//             ('Eritrea'),
//             ('Estonia'),
//             ('Eswatini'),
//             ('Ethiopia'),
//             ('Fiji'),
//             ('Finland'),
//             ('France'),
//             ('Gabon'),
//             ('Gambia'),
//             ('Georgia'),
//             ('Germany'),
//             ('Ghana'),
//             ('Greece'),
//             ('Grenada'),
//             ('Guatemala'),
//             ('Guinea'),
//             ('Guinea-Bissau'),
//             ('Guyana'),
//             ('Haiti'),
//             ('Holy See'),
//             ('Honduras'),
//             ('Hungary'),
//             ('Iceland'),
//             ('India'),
//             ('Indonesia'),
//             ('Iran'),
//             ('Iraq'),
//             ('Ireland'),
//             ('Israel'),
//             ('Italy'),
//             ('Jamaica'),
//             ('Japan'),
//             ('Jordan'),
//             ('Kazakhstan'),
//             ('Kenya'),
//             ('Kiribati'),
//             ('Kuwait'),
//             ('Kyrgyzstan'),
//             ('Laos'),
//             ('Latvia'),
//             ('Lebanon'),
//             ('Lesotho'),
//             ('Liberia'),
//             ('Libya'),
//             ('Liechtenstein'),
//             ('Lithuania'),
//             ('Luxembourg'),
//             ('Madagascar'),
//             ('Malawi'),
//             ('Malaysia'),
//             ('Maldives'),
//             ('Mali'),
//             ('Malta'),
//             ('Marshall Islands'),
//             ('Mauritania'),
//             ('Mauritius'),
//             ('Mexico'),
//             ('Micronesia'),
//             ('Moldova'),
//             ('Monaco'),
//             ('Mongolia'),
//             ('Montenegro'),
//             ('Morocco'),
//             ('Mozambique'),
//             ('Myanmar'),
//             ('Namibia'),
//             ('Nauru'),
//             ('Nepal'),
//             ('Netherlands'),
//             ('New Zealand'),
//             ('Nicaragua'),
//             ('Niger'),
//             ('Nigeria'),
//             ('North Korea'),
//             ('North Macedonia'),
//             ('Norway'),
//             ('Oman'),
//             ('Pakistan'),
//             ('Palau'),
//             ('Palestine State'),
//             ('Panama'),
//             ('Papua New Guinea'),
//             ('Paraguay'),
//             ('Peru'),
//             ('Philippines'),
//             ('Poland'),
//             ('Portugal'),
//             ('Qatar'),
//             ('Romania'),
//             ('Russia'),
//             ('Rwanda'),
//             ('Saint Kitts and Nevis'),
//             ('Saint Lucia'),
//             ('Saint Vincent and the Grenadines'),
//             ('Samoa'),
//             ('San Marino'),
//             ('Sao Tome and Principe'),
//             ('Saudi Arabia'),
//             ('Senegal'),
//             ('Serbia'),
//             ('Seychelles'),
//             ('Sierra Leone'),
//             ('Singapore'),
//             ('Slovakia'),
//             ('Slovenia'),
//             ('Solomon Islands'),
//             ('Somalia'),
//             ('South Africa'),
//             ('South Korea'),
//             ('South Sudan'),
//             ('Spain'),
//             ('Sri Lanka'),
//             ('Sudan'),
//             ('Suriname'),
//             ('Sweden'),
//             ('Switzerland'),
//             ('Syria'),
//             ('Tajikistan'),
//             ('Tanzania'),
//             ('Thailand'),
//             ('Timor-Leste'),
//             ('Togo'),
//             ('Tonga'),
//             ('Trinidad and Tobago'),
//             ('Tunisia'),
//             ('Turkey'),
//             ('Turkmenistan'),
//             ('Tuvalu'),
//             ('Uganda'),
//             ('Ukraine'),
//             ('United Arab Emirates'),
//             ('United Kingdom'),
//             ('United States of America'),
//             ('Uruguay'),
//             ('Uzbekistan'),
//             ('Vanuatu'),
//             ('Venezuela'),
//             ('Vietnam'),
//             ('Yemen'),
//             ('Zambia'),
//             ('Zimbabwe');
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