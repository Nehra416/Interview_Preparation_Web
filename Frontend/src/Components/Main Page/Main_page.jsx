import React from 'react'
import "../Main Page/Main_page.css"
import coding from "../Images/coding.png"
import coding2 from "../Images/coding2.png"
import coding3 from "../Images/coding3.png"
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

export const Main_page = () => {
    return (
        <div className='main h-[100vh]'>

            <div className='flex justify-center items-center sm:mx-20 mx-2 sm:pt-0 pt-5 text-center '>
                <img src={coding2} className='sm:w-36 w-20' />
                <h1 className='text-gray-100 md:text-2xl text-xl'><span className='md:text-4xl text-2xl text-gray-300 font-bold '>Welcome</span> in the Interviewbit website.</h1>
            </div>

            <div className='flex md:flex-row flex-col sm:my-0 mt-10 items-center justify-center sm:gap-20 '>
                <div className='text-gray-100 leading-tight '>
                    <h1 className='md:text-[80px] text-3xl font-semibold'>Web Developer</h1>
                    <p className='md:text-7xl text-2xl sm:pt-7 ml-14 text-gray-300'>Interview <br /><span className='ml-14'>Questions</span></p>
                </div>
                <div className='relative '>
                    <img src={coding} className='md:w-80 w-52' />
                </div>
            </div>

            <div className='  text-center'>
                <button className='text-white px-4 py-2 bg-cyan-800 rounded text-xl hover:text-2xl box-border transition-width duration-500'><Link to="/js">Let's Start &rarr;</Link></button>
            </div>
        </div>
    )
}
