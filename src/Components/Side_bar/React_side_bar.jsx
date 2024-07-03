import React from 'react'
import { Link } from 'react-router-dom'

export const React_side_bar = () => {
    return (
        <div className='h-[88vh] w-[25vw] bg-slate-500 pt-7 overflow-auto mt-[12vh] ' style={{ boxShadow: '-20px 5px 20px 10px gray' }}>
            <ol className='list-decimal list-outside font-medium pl-7'>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#1">What is React?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#2">What are the features of React?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#3">What are the limitations of React?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#4">What is JSX?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#5">“In React, everything is a component.” Explain.</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#6">What is Props?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#7">What are the limitations of React?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#8">What are the rules that must be followed while using React Hooks?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#9">What is a state in React and how is it used?</Link></li>
                <li className='pb-4 cursor-pointer hover:text-gray-300'><Link to="#10">What are Higher Order Components(HOC)?</Link></li>
            </ol>
        </div>
    )
}
