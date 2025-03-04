const mongoose = require("mongoose")

// Schema -- define the Struncture
const HTML_Schema = new mongoose.Schema({
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
const html = mongoose.model("html", HTML_Schema)

module.exports = html; // export the ques model for futher controllers or quaries