import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const React_JS = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  return (
    <div className='w-[75vw] pl-10 mt-[12vh]'>
      <ol className='list-decimal list-outside pt-6'>
        <li id={1} className='text-2xl font-semibold pb-3'>What is React?</li>
        <ul className='list-disc list-outside'>
          <li>React is a front-end JavaScript library developed by Facebook in 2011.</li>
          <li>It follows the component based approach which helps in building reusable UI components.</li>
          <li>It is used for developing complex and interactive web and mobile UI.</li>
          <li>Even though it was open-sourced only in 2015, it has one of the largest communities supporting it.</li>
        </ul>
        <li id={2} className='text-2xl font-semibold pb-3 pt-3'>What are the features of React?</li>
        <p>Major features of React are listed below:</p>
        <ul className='list-disc list-outside '>
          <li>It uses the virtual DOM instead of the real DOM.</li>
          <li>It uses server-side rendering.</li>
          <li>It follows uni-directional data flow or data binding.</li>
        </ul>
        <li id={3} className='text-2xl font-semibold pt-3 pb-3'>What are the limitations of React?</li>
        <p>Limitations of React are listed below:</p>
        <ul className='list-disc list-outside'>
          <li>React is just a library, not a full-blown framework</li>
          <li>Its library is very large and takes time to understand</li>
          <li>It can be little difficult for the novice programmers to understand</li>
          <li>Coding gets complex as it uses inline templating and JSX</li>
        </ul>
        <li id={4} className='text-2xl font-semibold pb-3 pt-3'>What is JSX?</li>
        <p>JSX is a shorthand for JavaScript XML. This is a type of file used by React which utilizes the expressiveness of JavaScript along with HTML like template syntax. This makes the HTML file really easy to understand. This file makes applications robust and boosts its performance. Below is an example of JSX:</p>
        {/*  */}
        <li id={5} className='text-2xl font-semibold pb-3 pt-3'> “In React, everything is a component.” Explain.</li>
        <p>Components are the building blocks of a React application’s UI. These components split up the entire UI into small independent and reusable pieces. Then it renders each of these components independent of each other without affecting the rest of the UI.</p>
        <li id={6} className='text-2xl font-semibold pb-3 pt-3'>What is Props?</li>
        <p>Props is the shorthand for Properties in React. They are read-only components which must be kept pure i.e. immutable. They are always passed down from the parent to the child components throughout the application. A child component can never send a prop back to the parent component. This help in maintaining the unidirectional data flow and are generally used to render the dynamically generated data.</p>
        <li id={7} className='text-2xl font-semibold pb-3 pt-3'>What are the limitations of React?</li>
        <p>The few limitations of React are as given below:</p>
        <ul className='list-disc list-outside'>
          <li>React is not a full-blown framework as it is only a library.</li>
          <li>The components of React are numerous and will take time to fully grasp the
            benefits of all.</li>
          <li>It might be difficult for beginner programmers to understand React.</li>
          <li>Coding might become complex as it will make use of inline templating and JSX.</li>
        </ul>
        <li id={8} className='text-2xl font-semibold pb-3 pt-3'>What are the rules that must be followed while using React
          Hooks?</li>
        <p>There are 2 rules which must be followed while you code with Hooks:</p>
        <ul className='list-disc list-outside'>
          <li>React Hooks must be called only at the top level. It is not allowed to call them
            inside the nested functions, loops, or conditions.</li>
          <li>It is allowed to call the Hooks only from the React Function Components.</li>
        </ul>
        <li id={9} className='text-2xl font-semibold pb-3 pt-3'>What is a state in React and how is it used?</li>
        <p>States are the heart of React components. States are the source of data and must be kept as simple as possible. Basically, states are the objects which determine components rendering and behavior. They are mutable unlike the props and create dynamic and interactive components. They are accessed via this.state().</p>
        <li id={10} className='text-2xl font-semibold pb-3 pt-3'>What are Higher Order Components(HOC)?</li>
        <p>Higher Order Component is an advanced way of reusing the component logic. Basically, it’s a pattern that is derived from React’s compositional nature. HOC are custom components which wrap another component within it. They can accept any dynamically provided child component but they won’t modify or copy any behavior from their input components. You can say that HOC are ‘pure’ components.</p>
      </ol>
    </div>
  )
}
