const html = require("../Modal/HTML_Schema") // require the modal for the controllers

const getHtmlQuestions = async (req, res) => {
    const allQues = await html.find({});
    return res.json(allQues);
}

const setHtmlQuestions = async (req, res) => {
    const { Q, ans, ex } = req.body;
    // console.log(req.body);

    if (!Q || !ans) {
        return res.json({ message: "All fields are required" })
    }

    const result = await html.create({
        Q, ans, ex
    })

    // console.log("New Question is Added." + result)
    return res.status(201).json({ msg: "Question is created Succesfully" })
}

module.exports = { getHtmlQuestions, setHtmlQuestions } // export both