const mongoose = require('mongoose')

module.exports = mongoose.model('Category', new mongoose.Schema({
    name: { type: String },
    parent: { type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }
}))


