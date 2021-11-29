const express = require('express');
const app = express();

const _ = require('lodash');

const dotenv = require('dotenv');

const connectDatabase = require('./config/database');

dotenv.config({path: "./config/config.env"});

//Connecting to database
connectDatabase();


app.use(express.json());

_preloadCountries();

const countries = require("./routes/country.js");


app.use("/api/v1", countries);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server has started ${process.env.PORT}`);
})

function _preloadCountries () {
    const country = require('./models/country');
    const {countryData} = require(`./data/country`);
    // if there is not data in the collection, populate it
    country.count().then((count) => {
        if (count === 0) {
            // load prdefined data
            // which I prepare and named according to my collection name

           country.insertMany(countryData).then((results) => {
                _.map(results, (result) => {
                    console.log(`Inserted _id:${result._id} into country`)
                });
            });
        }else {
            console.log(`This is the ${count}`);
        }
    });

}
module.exports = app;
