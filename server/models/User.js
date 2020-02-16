const mongoose = require('mongoose')

module.exports = mongoose.model('User', new mongoose.Schema({
    username: { type: String },
    password: {
        type: String,
        set(val) {
            return require('bcrypt').hashSync(val, 10)
        },
        select: false
    },
}))


