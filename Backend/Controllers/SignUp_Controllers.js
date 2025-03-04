const signup = require("../Modal/SignUp_Schema") // require the modal for the controllers

// const getSignUpQuestions = async (req, res) => {
//     const allQues = await signup.find({});
//     return res.json(allQues);
// }

const userCheck = async (req, res) => {
    const { email, password } = req.body;
    // check by the email in database
    const user = await signup.findOne({ email })
    // console.log(user)
    if (user) {
        if (user.password === password) {
            res.status(201).json(user.firstName);
        } else {
            res.send("pwd wrong")
        }
    }
    else {
        res.json("Create your account")
    }
}

const setSignUpData = async (req, res) => {
    const { firstName, lastName, email, password, Confirm_password } = req.body;
    // console.log(req.body);

    // if (!firstName || !lastName || !email || !password || !Confirm_password) {
    //     return res.json({ message: "All fields are required" }) // ye response me 200 status dega
    // }

    const checlEmail = async () => {
        const result = await signup.findOne({ email })
        // console.log(result)
        if (!result) {

            const result = await signup.create({
                firstName, lastName, email, password, Confirm_password
            })

            // console.log("New User is Added." + result)
            return res.json({ msg: "New User is created Succesfully" })
        } else {
            return res.json({ msg: "same email" })
        }
    }
    checlEmail()

}

module.exports = { userCheck, setSignUpData } // export both