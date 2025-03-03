import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { useLoginContext } from '../../LoginContext';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const LogIn = () => {
  const { setLogIn } = useLoginContext()
  const navigate = useNavigate()
  const [keepLogin, setKeepLogin] = useState(false)
  const [formData, setFormData] = useState(
    {
      email: "",
      password: "",
    }
  )

  const handleData = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [key]: value })
  }


  const getData = (e) => {
    e.preventDefault();
    const { email, password } = formData
    console.log({ email, password })

    axios.post("${SERVER_URL}/login", { email, password })
      .then((response) => {
        console.log(response)
        if (response.status === 201) {
          toast(`Welcome ${response.data}`)
          setLogIn(true) // so we navigate to the add page
          navigate("/add") // navigate to the add question page

          if (keepLogin) {
            localStorage.setItem('userLogIn', true); // store login info in localstorage so that when we refresh the page user stay logIn
          }

          // below code is usefull when we remain on the same page but for now we navigate to the add page.
          // setFormData({
          //   email: "",
          //   password: "",
          // })
        } else if (response.data === "pwd wrong") {
          toast("Check your Password.")
        }
        else {
          toast("Account doesn't exist on this email")
        }
      })
      .catch((err) => {
        console.log("Error : ", err)
      })
  }

  return (
    <div>
      <div>
        <div className='border-2 rounded text-center mx-[5%] sm:mx-[20%] md:mx-[30%] sm:p-8 py-8 px-3 flex flex-col gap-5 mt-[17vh] m-auto bg-gray-100'>
          <h1 className='font-semibold sm:text-4xl text-2xl pb-5'>Login To Your Account</h1>
          <input type="text" placeholder='Nehra416@gmail.com' name='email' onChange={handleData} value={formData.email} className='py-2 px-5 font-medium border-2 rounded ' />
          <input type="password" placeholder='Password' name='password' onChange={handleData} value={formData.password} className='py-2 px-5 font-medium border-2 rounded' />
          <div className='flex'>
            <input type="checkbox" name="" onChange={() => setKeepLogin(!keepLogin)} />
            <p className='pl-1 font-semibold'>Keep LogIn</p>
          </div>
          <input type="button" value="LOG IN" onClick={getData} className='py-2 bg-sky-900 border rounded text-gray-200 text-xl cursor-pointer' />
          <div className='flex justify-between'>
            <p className='text-sm font-medium'>Not a Member? <span className='underline hover:no-underline font-semibold cursor-pointer'><Link to="/signup">SignUp</Link></span></p>
            <p className='text-sm font-medium text-blue-800 cursor-pointer hover:text-blue-500'>Forget your Password?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
