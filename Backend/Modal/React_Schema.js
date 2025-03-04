const mongoose = require("mongoose")

// Schema -- define the Struncture
const React_Schema = new mongoose.Schema({
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

// model -- it is made by schema
const react = mongoose.model("react", React_Schema)

module.exports = react; // export the ques model for futher controllers or quaries