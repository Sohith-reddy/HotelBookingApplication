const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const campGroundSchema = new Schema({
    title: {
        type: String,
        required:true,
    },
    price: {
        type: Number,
        required:true,
    },
    description: {
        type: String,
        required:true,
    },
    location: {
        type: String,
        required:true,
    }
})

module.exports = mongoose.model('Campground', campGroundSchema);