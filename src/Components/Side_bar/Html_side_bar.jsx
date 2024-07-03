import React from 'react'
import { Link } from 'react-router-dom'

export const Html_side_bar = () => {
    return (
        <div className='h-[88vh] w-[25vw] bg-slate-500 pt-7 overflow-auto mt-[12vh]' style={{ boxShadow: '-20px 5px 20px 10px gray' }}>
            <ol className='list-decimal list-outside font-medium pl-7'>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#1">Are the HTML tags and elements the same thing?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#2">What are tags and attributes in HTML?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#3">What are void elements in HTML?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#4">What is the advantage of collapsing white space?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#5">What are HTML Entities?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#6">What are different types of lists in HTML?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#7">What is the ‘class’ attribute in HTML?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#8">Define multipart form data?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#9">Describe HTML layout structure.</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#10">How to optimize website assets loading?</Link></li>
            </ol>
        </div>
    )
}
