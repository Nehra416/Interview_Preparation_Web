import React from 'react'
import { Link } from 'react-router-dom'

export const SignUp = () => {
  return (
    <div>
      <div className='text-center m-auto mt-[16vh] flex flex-col gap-4 w-[450px] border-2 rounded p-7 pt-3 bg-gray-50'>
        <h1 className='text-4xl font-semibold '>Register</h1>
        <p className='font-semibold pb-2'>Create your account. It's free and only takes a minute.</p>
        <div className='flex justify-between'>
          <input type="text" placeholder='First Name' className='border-2 rounded py-1 px-2 w-44 font-semibold' />
          <input type="text" placeholder='Last Name' className='border-2 rounded py-1 px-2 w-44 font-semibold' />
        </div>
        <input type="email" placeholder='Nehra416@gmail.com' className='border-2 rounded py-1 px-2 font-semibold' />
        <input type="password" placeholder='Password' className='border-2 rounded py-1 px-2 font-semibold' />
        <input type="password" placeholder='Confirm Password' className='border-2 rounded py-1 px-2 font-semibold' />
        <div>
          <input type="checkbox" />
          <span className='pl-1'>I accept the <span className='text-green-500 hover:underline cursor-pointer'>Terms of Use</span> & <span className='text-green-500 hover:underline cursor-pointer'>Privacy Policy</span></span>
        </div>
        <input type="button" value="Register Now" className='bg-green-500 text-white font-semibold py-2 rounded'/>
        <p>Already have an account? <span className='cursor-pointer hover:no-underline underline font-semibold'><Link to="/login">Log In</Link></span></p>
      </div>
    </div>
  )
}
