import React from 'react'
import "../Main Page/Main_page.css"
import cmt from '../Images/cmt.png'
import js from '../Images/js.png'
import react from '../Images/react.png'
import html from '../Images/html.png'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'

export const Main_page = () => {
    return (
        <div className='main'>
            <div className='flex justify-center items-center mx-20 text-center h-[20vh]'>
                <img src={logo} className='w-36' />
                <h1 className='text-gray-100 text-2xl '><span className='text-4xl text-gray-300 font-bold '>Welcome</span> in the Interviewbit website where you can increase your progress with us.</h1>
            </div>
            <div className='flex h-[70vh] items-center justify-center gap-20'>
                <div className='text-gray-100 leading-tight '>
                    <h1 className='text-[80px] font-semibold'>Web Developer</h1>
                    <p className='text-7xl ml-10 text-gray-300'>Interview <br /><span className='ml-14'>Questions</span></p>
                </div>
                <div className='relative'>
                    <img src={cmt} className='w-[340px]' />
                    <img src={js} className='w-40 absolute top-10 left-3' />
                    <img src={html} className='w-32 absolute top-7 right-8' />
                    <img src={react} className='w-28 absolute top-[12rem] right-[3rem] z-50' />
                    <img src={cmt} className='w-[200px] absolute top-44 right-0' />
                </div>
            </div>
            <div className='h-[10vh] text-center'>
                <button className='text-white px-4 py-2 bg-cyan-800 rounded text-xl hover:text-2xl box-border transition-width duration-500'><Link to="/JS">Let's Start &rarr;</Link></button>
            </div>
        </div>
    )
}
