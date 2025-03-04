const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
require('dotenv').config(); // Load .env variables
const path = require('path');

// require the mongodb connection
const Connection = require("./Config/dbConnection")
Connection() // call the function

// require the routers 
const router = require('./Routes/InterRoutes')

const _dirname = path.resolve();

app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
}));
// middleware to change the client data into json format and set into req.body
app.use(express.json());

// routes
app.use('/', router)

app.use(express.static(path.join(_dirname, "/Frontend/build")));
app.get("*", (_, res) => {
    res.sendFile(path.resolve(_dirname, "Frontend", "build", "index.html"))
})

app.listen(port, () => {
    console.log(`Server is Started on port Number ${port}`);
})