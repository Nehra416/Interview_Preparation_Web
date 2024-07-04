import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Nav_bar = () => {
    const location = useLocation
    // useEffect(()=>{

    // })
    return (
        <div>
            <div className='flex justify-between items-center text-xl bg-gray-100 drop-shadow-xl font-semibold h-[12vh] z-50 fixed top-0 left-0 w-full'>
                <ul className='flex gap-8 ml-10 '>
                    <li className='hover:text-gray-500 cursor-pointer'><Link to="/">Home</Link></li>
                    <li className='hover:text-gray-500 cursor-pointer'><Link to="/JS">Java Script</Link></li>
                    <li className='hover:text-gray-500 cursor-pointer'><Link to="/react">React JS</Link></li>
                    <li className='hover:text-gray-500 cursor-pointer'><Link to="/Html">HTML</Link></li>
                    <li className='hover:text-gray-500 cursor-pointer'><Link to="">More</Link></li>
                </ul>
                <ul className='flex gap-8 mr-10 '>
                    <li className='hover:text-gray-300 cursor-pointer bg-cyan-700 py-1 px-4 rounded'><Link to="/login">Log In</Link></li>
                    <li className='hover:text-gray-300 cursor-pointer bg-cyan-700 py-1 px-4 rounded'><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>
        </div>
    )
}
