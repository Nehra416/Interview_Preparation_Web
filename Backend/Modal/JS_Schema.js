const mongoose = require("mongoose")

// Schema -- define the Struncture
const JS_Schema = new mongoose.Schema({
    Q: {
        type: String,
        require: true
    },
    ans: {
        type: String,
        require: true
    },
    ex: {
        type: String,
    }
}, { timestamps: true }) // by timestamps true we can store create and update entery time also

// modal -- it is made by schema
const JS = mongoose.model("JS", JS_Schema)

module.exports = JS; // export the ques model for futher controllers or quaries