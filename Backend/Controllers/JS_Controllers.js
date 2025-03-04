const JS = require("../Modal/JS_Schema") // require the modal for the controllers

const getJsQuestions = async (req, res) => {
    const allQues = await JS.find({});
    return res.json(allQues);
}

const setJsQuestions = async (req, res) => {
    const { Q, ans, ex } = req.body;
    // console.log(req.body);

    if (!Q || !ans) {
        return res.json({ message: "All fields are required" })
    }

    const result = await JS.create({
        Q, ans, ex
    })

    // console.log("New Question is Added." + result)
    return res.status(201).json({ msg: "Question is created Succesfully" })
}

module.exports = { getJsQuestions, setJsQuestions } // export both