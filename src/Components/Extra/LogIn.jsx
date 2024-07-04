import React from 'react'
import { Link } from 'react-router-dom'

export const LogIn = () => {
  return (
    <div>
      <div>
        <div className='border-2 rounded text-center w-[440px] p-8 flex flex-col gap-5 mt-[17vh] m-auto bg-gray-100'>
          <h1 className='font-semibold text-4xl pb-5'>LogIn To Your Account</h1>
          <input type="text" placeholder='Nehra416@gmail.com' className='py-2 px-5 font-medium border-2 rounded ' />
          <input type="password" placeholder='Password' className='py-2 px-5 font-medium border-2 rounded' />
          <div className='flex'>
            <input type="checkbox" name="" id="" />
            <p className='pl-1 font-semibold'>Keep LogIn</p>
          </div>
          <input type="button" value="LOG IN" className='py-2 bg-sky-900 border rounded text-gray-200 text-xl cursor-pointer' />
          <div className='flex justify-between'>
            <p className='text-sm font-medium'>Not a Member? <span className='underline hover:no-underline font-semibold cursor-pointer'><Link to="/signup">SignUp</Link></span></p>
            <p className='text-sm font-medium text-blue-800 cursor-pointer hover:text-blue-500'>Forget your Password?</p>
          </div>
        </div>
      </div>
    </div>
  )
}
