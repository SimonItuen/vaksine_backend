const Country = require('../models/country');


//Get all countries => /api/v1/countries
exports.getCountries = async (req, res, next) => {
    const countries = await Country.find()
    res.status(200).json({
        status: true,
        data: countries
    });

}
//create new country => /api/v1/new
exports.newCountry = async (req, res, next) => {
    const country = await Country.create(req.body);
    res.status(200).json(
        {
            success: true,
            message: 'Country added',
            data: country
        }
    );
}