const mongoose = require('mongoose')

const memosSchema = mongoose.Schema({
    title: {
        type: String,
        // required: true,
        // unique: true,
        // lowercase: true
    },
    desc: {
        type: String,
        // unique: true,
        // required: true
    }
});
module.exports = mongoose.model("memoSchema", memosSchema)