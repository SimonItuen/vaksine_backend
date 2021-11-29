const  express = require('express');
const router = express.Router();


//Importing countries methods controller
const { getCountries, newCountry}  = require('../controllers/country.js');

router.route('/countries').get(getCountries);

router.route('/country/new').post(newCountry)

module.exports = router;