import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const JS = () => {
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
                <li id={1} className='text-2xl font-semibold pb-3'>What is JavaScript?</li>
                <p>JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages. The general-purpose core of the language has been embedded in Netscape, Internet Explorer, and other web browsers.</p>
                <li id={2} className='text-2xl font-semibold pt-5 pb-3'>Is JavaScript a case-sensitive language?</li>
                <p>Yes, JavaScript is a case sensitive language.  The language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.</p>
                <li id={3} className='text-2xl font-semibold pt-5 pb-3'>How can you create an object in JavaScript?</li>
                <p>JavaScript supports Object concept very well. You can create an object using the object literal as follows −</p>
                {/*  */}
                <li id={4} className='text-2xl font-semibold pt-5 pb-3'>Define anonymous function.</li>
                <p>In JavaScript, an anonymous function is a function that does not have a name. It is typically used for short, one-off tasks where naming the function is not essential.</p>
                <p>Example :</p>
                {/*  */}
                <li id={5} className='text-2xl font-semibold pt-5 pb-3'> What is a name function in JavaScript & how to define it?</li>
                <p>A named function declares a name as soon as it is defined. It can be defined using function keyword as :</p>
                {/*  */}
                <li id={6} className='text-2xl font-semibold pt-5 pb-3'> Can you assign an anonymous function to a variable and pass it as an argument to another function?</li>
                <p>Yes! An anonymous function can be assigned to a variable. It can also be passed as an argument to another function.
                    If you wish to learn JavaScript and build your own applications, then check out our Full Stack developer course online, which comes with instructor-led live training and real-life project experience.
                    It includes training on Web Development, jQuery, Angular, NodeJS, ExpressJS and MongoDB.</p>
                <li id={7} className='text-2xl font-semibold pt-5 pb-3'>What is the purpose of ‘This’ operator in JavaScript?</li>
                <p>In JavaScript, this keyword refers to the object it belongs to. Depending on the context, this might have several meanings. This pertains to the global object in a function and the owner object in a method, respectively.</p>
                <li id={8} className='text-2xl font-semibold pt-5 pb-3'>What is Callback?</li>
                <p>A simple JavaScript function that is sent as an option or parameter to a method is called a callback. The function is called “call back” because it is meant to be invoked after another function has completed running. Functions are objects in JavaScript. This means that other functions can return functions and accept functions as arguments.</p>
                <li id={9} className='text-2xl font-semibold pt-5 pb-3'>What is Closure? Give an example.</li>
                <p>Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope. It gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created. To use a closure, simply define a function inside another function and expose it.</p>
                <li id={10} className='text-2xl font-semibold pt-5 pb-3'>Difference between “ == “ and “ === “ operators.</li>
                <p>Both are comparison operators. The difference between both the operators is that
                    “==” is used to compare values whereas, “ === “ is used to compare both values and
                    types.</p>
                <p>Example:</p>
                {/*  */}
                <li id={11} className='text-2xl font-semibold pt-5 pb-3'>Difference between var and let keyword in javascript.</li>
                <ol className='list-decimal list-outside pt-6'>
                    <li>From the very beginning, the 'var' keyword was used in JavaScript programming
                        whereas the keyword 'let' was just added in 2015.</li>
                    <li>The keyword 'Var' has function scope. Anywhere in the function, the variable
                        specified using var is accessible but in ‘let’ the scope of a variable declared with
                        the 'let' keyword is limited to the block in which it is declared. Let's start with a
                        Block Scope.</li>
                    <li>'var' declares a variable that will be hoisted but 'let' declares a variable that will
                        be hoisted.</li>
                </ol>
                <li id={12} className='text-2xl font-semibold pt-5 pb-3'>What do you mean by Self Invoking Functions?</li>
                <p>Without being requested, a self-invoking expression is automatically invoked
                    (initiated). If a function expression is followed by (), it will execute automatically. A
                    function declaration cannot be invoked by itself.</p>
                <p>Normally, we declare a function and call it, however, anonymous functions may be
                    used to run a function automatically when it is described and will not be called again.
                    And there is no name for these kinds of functions.</p>
                <li id={13} className='text-2xl font-semibold pt-5 pb-3'>Mention some advantages of javascript.</li>
                <p>There are many advantages of javascript. Some of them are</p>
                <ol className='list-decimal list-outside pt-6'>
                    <li >Javascript is executed on the client-side as well as server-side also. There are a
                        variety of Frontend Frameworks that you may study and utilize. However, if you
                        want to use JavaScript on the backend, you'll need to learn NodeJS. It is
                        currently the only JavaScript framework that may be used on the backend.</li>
                    <li >Javascript is a simple language to learn.</li>
                    <li >Web pages now have more functionality because of Javascript.</li>
                    <li >To the end-user, Javascript is quite quick.</li>
                </ol>
                <li id={14} className='text-2xl font-semibold pt-5 pb-3'>What are the types of errors in javascript?</li>
                <ol className='list-decimal list-outside'>
                    <li className='text-2xl font-semibold pt-5 pb-3'>Syntax error:</li>
                    <p>Syntax errors are mistakes or spelling problems in the code that
                        cause the program to not execute at all or to stop running halfway through.
                        Error messages are usually supplied as well.</p>
                    <li className='text-2xl font-semibold pt-5 pb-3'>Logical error:</li>
                    <p>Reasoning mistakes occur when the syntax is proper but the logic
                        or program is incorrect. The application executes without problems in this case.
                        However, the output findings are inaccurate. These are sometimes more difficult
                        to correct than syntax issues since these applications do not display error signals
                        for logic faults.</p>
                </ol>
                <li id={15} className='text-2xl font-semibold pt-5 pb-3'>What is recursion in a programming language?</li>
                <p>Recursion is a technique to iterate over an operation by having a function call itself
                    repeatedly until it arrives at a result.</p>
                {/*  */}
                <p>Example of a recursive function:</p>
                <p>The following function calculates the sum of all the elements in an array by using
                    recursion:</p>
                {/*  */}
                <li id={16} className='text-2xl font-semibold pt-5 pb-3'>What is DOM?</li>
                <ul className='list-disc list-outside pt-6'>
                    <li>DOM stands for Document Object Model. DOM is a programming interface for
                        HTML and XML documents.</li>
                    <li>When the browser tries to render an HTML document, it creates an object based
                        on the HTML document called DOM. Using this DOM, we can manipulate or
                        change various elements inside the HTML document.</li>
                    <li>Example of how HTML code gets converted to DOM:</li>
                </ul>
            </ol>
        </div>
    )
}
