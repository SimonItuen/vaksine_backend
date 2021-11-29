const mongoose = require('mongoose');

const countrySchema = new mongoose.Schema({
    name_en: String,
    code: String,
    short_trip: String,
    long_trip: String,
    name_bo: String,
    mal_prev_en: String,
    mal_prev_bo: String,
    malaria_free: {
        type: Boolean,
        default: false
    }
});

countrySchema.pre('save', function (next) {
    if (this.malaria_free = false) {
        this.malaria_free = this.mal_prev_en === "";
    }
    next();
});

module.exports = mongoose.model('Country', countrySchema);