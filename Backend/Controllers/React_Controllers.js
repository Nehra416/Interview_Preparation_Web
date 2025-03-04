const react = require("../Modal/React_Schema") // require the modal for the controllers

const getReactQuestions = async (req, res) => {
    const allQues = await react.find({});
    return res.json(allQues);
}

const setReactQuestions = async (req, res) => {
    const { Q, ans, ex } = req.body;
    // console.log(req.body);

    if (!Q || !ans) {
        return res.json({ message: "All fields are required" })
    }

    const result = await react.create({
        Q, ans, ex
    })

    // console.log("New Question is Added." + result)
    return res.status(201).json({ msg: "Question is created Succesfully" })
}

module.exports = { getReactQuestions, setReactQuestions } // export both