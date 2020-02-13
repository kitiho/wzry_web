const mongoose = require('mongoose')

module.exports = mongoose.model('Item', new mongoose.Schema({
    name: { type: String },
    icon:{type:String}
}))


