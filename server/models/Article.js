const mongoose = require('mongoose')

module.exports = mongoose.model('Article', new mongoose.Schema({
    title: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    body: { type: String },
}))


