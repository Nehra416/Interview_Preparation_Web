import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const SignUp = () => {
  const navigate = useNavigate();
  // console.log(location)
  const [checkbox, setCheckbox] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    Confirm_password: ""
  })

  const handleData = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value })
  }

  const handleCheckbox = (e) => {
    setCheckbox(!checkbox)
  }

  const Register = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, password, Confirm_password } = formData;
    // console.log("Sending Data: ", { firstName, lastName, email, password, Confirm_password })

    if (!firstName || !lastName || !email || !password || !Confirm_password) {
      toast("PLS! Fill all the Fields....")
    }
    else {
      if (password !== Confirm_password) {
        toast("Password is not Same")
        setFormData({
          firstName,
          lastName,
          email,
          password: "",
          Confirm_password: ""
        })
      }
      else {
        if (checkbox) {
          axios.post("${SERVER_URL}/signup", { firstName, lastName, email, password, Confirm_password })
            .then((response) => {
              console.log("Response is : ", response);
              // console.log(response.data.msg)

              if (response.data.msg !== "same email") {
                toast("New User is Successfully Created")
                navigate("/login")  // redirect to the login page after the account created
              } else {
                toast("Already a Account is created on this email")
              }

            })
            .catch((err) => console.log("Error : ", err))
        }
        else toast("PLS Accept all the Terms and Conditions.")
      }
    }
  }

  return (
    <div>
      <div className='text-center sm:m-auto mx-[8%] sm:mt-[16vh] mt-[16vh] flex flex-col gap-4 sm:w-[450px] border-2 rounded sm:p-7 p-4 pt-3 bg-gray-50 -z-10'>
        <h1 className='text-4xl font-semibold '>Register</h1>
        <p className='font-semibold pb-2'>Create your account. It's free and only takes a minute.</p>
        <div className='flex sm:flex-row flex-col gap-5 justify-between'>
          <input type="text" placeholder='First Name' name='firstName' value={formData.firstName} className='border-2 rounded py-1 px-2 font-semibold w-full' onChange={handleData} />
          <input type="text" placeholder='Last Name' name='lastName' value={formData.lastName} className='border-2 rounded py-1 px-2 font-semibold w-full' onChange={handleData} />
        </div>
        <input type="email" placeholder='Nehra416@gmail.com' name='email' value={formData.email} className='border-2 rounded py-1 px-2 font-semibold' onChange={handleData} />
        <input type="password" placeholder='Password' name='password' value={formData.password} className='border-2 rounded py-1 px-2 font-semibold' onChange={handleData} />
        <input type="password" placeholder='Confirm Password' name='Confirm_password' value={formData.Confirm_password} className='border-2 rounded py-1 px-2 font-semibold' onChange={handleData} />
        <div>
          <input type="checkbox" onChange={handleCheckbox} />
          <span className='pl-1'>I accept the <span className='text-cyan-500 hover:underline cursor-pointer'>Terms of Use</span> & <span className='text-cyan-500 hover:underline cursor-pointer'>Privacy Policy</span></span>
        </div>
        <input type="button" value="Register Now" className='bg-sky-900 text-white font-semibold py-2 rounded cursor-pointer' onClick={Register} />
        <p>Already have an account? <span className='cursor-pointer hover:no-underline underline font-semibold'><Link to="/login">Log In</Link></span></p>
      </div>
    </div>
  )
}
