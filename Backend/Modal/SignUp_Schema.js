const mongoose = require("mongoose")

// Schema -- define the Struncture
const SignUp_Schema = new mongoose.Schema({
    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    Confirm_password: {
        type: String,
        require: true
    }

}, { timestamps: true }) // by timestamps true we can store create and update entery time also

// modal -- it is made by schema
const signup = mongoose.model("signup", SignUp_Schema)

module.exports = signup; // export the ques model for futher controllers or quaries