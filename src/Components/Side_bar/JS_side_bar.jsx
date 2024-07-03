import React from 'react'
import { Link } from 'react-router-dom'

export const JS_side_bar = () => {
    return (
        <div className='h-[88vh] w-[25vw] bg-slate-500 pt-7 overflow-auto mt-[12vh]' style={{ boxShadow: '-20px 5px 20px 10px gray' }}>
            <ol className='list-decimal list-outside font-medium pl-7'>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#1">What is JavaScript?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#2">Is JavaScript a case-sensitive language?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#3">How can you create an object in JavaScript?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#4">Define anonymous function.</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#5">What is a name function in JavaScript & how to define it?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#6">Can you assign an anonymous function to a variable and pass it as an argument to another function?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#7">What is the purpose of ‘This’ operator in JavaScript?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#8">What is Callback?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#9">What is Closure? Give an example.</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#10">Difference between “ == “ and “ === “ operators.</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#11">Difference between var and let keyword in javascript.</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#12">What do you mean by Self Invoking Functions?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#13">Mention some advantages of javascript.</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#14">What are the types of errors in javascript?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#15">What is recursion in a programming language?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#16">What is DOM?</Link></li>
            </ol>
        </div>
    )
}
