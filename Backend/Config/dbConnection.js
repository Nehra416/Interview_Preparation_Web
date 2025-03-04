const { response } = require("express")
const mongoose = require("mongoose") // require mongoose from the mongoose package.

// create and export a function which connect the react app with the mongodb.
const Connection = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => console.log("MongoDB Connected"))
        .catch((err) => console.log("MongoDb error", err))
}

module.exports = Connection;