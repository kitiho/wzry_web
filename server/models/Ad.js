const mongoose = require('mongoose')

module.exports = mongoose.model('Ad', new mongoose.Schema({
    title: { type: String },
    items: [{
        img: { type: String },
        url: { type: String },
    }]
}))


