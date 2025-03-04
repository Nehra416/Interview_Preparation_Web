import React from 'react'
import { Nav_bar } from '../Navbar/Nav_bar'
import { Footer } from '../Footer/Footer'
import { Side_bar } from '../Side_bar/Side_bar'
import { Content } from '../Content/Content'

export const JS_layout = () => {
    // const js = [
    //     {
    //         Q: "What is JavaScript?",
    //         ans: "JavaScript is a high- level, dynamic programming language primarily used to create interactive effects within web browsers.It is an essential part of web development, allowing for client - side scripting and enhancing user interfaces by manipulating the DOM."
    //     },
    //     {
    //         Q: "What are the data types supported by JavaScript?",
    //         ans: "JavaScript supports several data types including primitive types like undefined, null, boolean, number, string, and symbol. Additionally, it has object types such as Object, Array, Function, Date, and RegExp. JavaScript is dynamically typed, meaning variables can hold values of any type."
    //     },
    //     {
    //         Q: "What is the difference between var, let, and const?",
    //         ans: "var is function-scoped and can be re-declared and updated within its scope. let is block-scoped and allows for re-assignment but not re-declaration within the same block. const is also block-scoped but creates a read-only reference, meaning the variable cannot be reassigned after initialization."
    //     },
    //     {
    //         Q: "Explain the concept of 'hoisting'.",
    //         ans: "Hoisting is JavaScript’s behavior of moving variable and function declarations to the top of their containing scope during compilation. Variables declared with var are hoisted and initialized with undefined, while function declarations are hoisted with their entire definition. let and const declarations are also hoisted but are not initialized and result in a ReferenceError if accessed before initialization."
    //     },
    //     {
    //         Q: "What is a closure in JavaScript?",
    //         ans: "A closure is a function that retains access to its lexical scope even when the function is executed outside that scope. This allows the inner function to access variables from its outer function, enabling data encapsulation and creating private variables."
    //     },
    //     {
    //         Q: "Describe the event loop in JavaScript.",
    //         ans: "The event loop is a mechanism that allows JavaScript to perform non-blocking operations by using a single-threaded event handling system. It continuously checks the message queue and executes tasks from it, ensuring that the main thread remains responsive while asynchronous operations are processed."
    //     },
    //     {
    //         Q: "What is the difference between == and === operators?",
    //         ans: "== is the equality operator that performs type coercion before comparison, meaning it converts the operands to the same type before checking equality. === is the strict equality operator that checks both value and type without performing type coercion. It is generally recommended to use === to avoid unexpected type conversions."
    //     },
    //     {
    //         Q: "What are JavaScript promises?",
    //         ans: "Promises are objects representing the eventual completion or failure of an asynchronous operation. They provide a cleaner way to handle asynchronous operations compared to traditional callback functions. Promises have three states: pending, fulfilled, or rejected, and they use .then(), .catch(), and .finally() methods to handle results or errors."
    //     },
    //     {
    //         Q: "How does this work in JavaScript?",
    //         ans: "this refers to the context in which a function is executed. In a global context or in a regular function, this refers to the global object (or undefined in strict mode). In a method, this refers to the object that owns the method. In arrow functions, this is lexically inherited from the surrounding scope."
    //     },
    //     {
    //         Q: "What is the difference between synchronous and asynchronous code?",
    //         ans: "Synchronous code executes sequentially, meaning each operation must complete before the next one begins. Asynchronous code allows operations to run independently of the main thread, enabling tasks like I/O operations or network requests to proceed without blocking the execution of subsequent code."
    //     },
    //     {
    //         Q: "How can you manage asynchronous operations in JavaScript?",
    //         ans: "Asynchronous operations can be managed using callbacks, promises, or async/await syntax. Callbacks involve passing a function to be executed once an operation completes. Promises provide a cleaner way to handle asynchronous results and errors. Async/await, built on promises, allows for writing asynchronous code in a synchronous-like manner, making it easier to read and maintain."
    //     },
    //     {
    //         Q: "What is the purpose of the bind method?",
    //         ans: "he bind method creates a new function that, when called, has its this keyword set to a specified value, with a given sequence of arguments preceding any provided during the function call. It is useful for ensuring that a function retains the correct context when passed as a callback or used in different scopes."
    //     },
    //     {
    //         Q: "What are JavaScript's data structures?",
    //         ans: "JavaScript includes several data structures: Arrays (for ordered collections), Objects (for key-value pairs), Sets (for unique values), Maps (for key-value pairs with any type of key), and WeakSets/WeakMaps (for collections with weak references to objects). Each has its own use cases and performance characteristics."
    //     },
    //     {
    //         Q: "Explain the difference between null and undefined.",
    //         ans: "null is an intentional absence of value, representing an empty or non-existent value assigned explicitly. undefined indicates that a variable has been declared but not yet assigned a value. While null is an object type, undefined is a type of its own."
    //     },
    //     {
    //         Q: "What is a JavaScript 'callback' function?",
    //         ans: "A callback function is a function passed as an argument to another function, to be executed after the completion of some operation. It is commonly used in asynchronous operations, event handling, and to ensure that certain code runs after a specific task has finished."
    //     },
    //     {
    //         Q: "How does JavaScript handle errors?",
    //         ans: "JavaScript handles errors using try...catch statements. Code that might throw an error is placed inside a try block, and if an error occurs, it is caught by the catch block. The finally block can be used to execute code regardless of whether an error was thrown, often for cleanup purposes."
    //     },
    //     {
    //         Q: "What are higher-order functions?",
    //         ans: "Higher-order functions are functions that take other functions as arguments or return functions as their result. They enable functional programming patterns and can be used to abstract repetitive logic, such as with array methods like .map(), .filter(), and .reduce()."
    //     },
    //     {
    //         Q: "What is the 'spread' operator in JavaScript?",
    //         ans: "The spread operator (...) allows for expanding iterable objects like arrays or strings into individual elements. It can be used to create shallow copies of arrays, merge arrays, or pass elements as arguments to functions, providing a concise and readable syntax for common operations."
    //     },
    //     {
    //         Q: "What is 'destructuring' in JavaScript?",
    //         ans: "Destructuring is a syntax that allows for unpacking values from arrays or properties from objects into distinct variables. It provides a convenient way to extract multiple properties or elements in a single statement, improving code readability and reducing boilerplate code."
    //     },
    //     {
    //         Q: "What is the difference between forEach and map methods?",
    //         ans: "forEach iterates over an array and executes a provided function for each element, but it does not return a new array. map creates a new array populated with the results of calling a provided function on every element of the original array, making it ideal for transformations."
    //     },
    //     {
    //         Q: "What are JavaScript's built-in objects?",
    //         ans: "JavaScript includes several built-in objects like Object, Array, Function, Date, RegExp, Math, and Error. These objects provide useful methods and properties for performing common tasks such as data manipulation, mathematical operations, and error handling."
    //     },
    //     {
    //         Q: "What is a 'template literal' in JavaScript?",
    //         ans: "Template literals are string literals enclosed by backticks (`) that allow for embedded expressions, multi-line strings, and string interpolation. They provide a more powerful and flexible way to work with strings compared to traditional single or double quotes."
    //     },
    //     {
    //         Q: "Explain the concept of 'event bubbling' in JavaScript.",
    //         ans: "Event bubbling is a propagation mechanism where an event starts from the target element and bubbles up through its ancestors in the DOM tree. This allows for event delegation, where a single event listener on a parent element can manage events for multiple child elements."
    //     },
    //     {
    //         Q: "What are 'Arrow Functions' and how do they differ from traditional functions?",
    //         ans: "Arrow functions are a concise syntax for writing functions using the => syntax. They differ from traditional functions in that they do not have their own this context and are not suitable as methods or constructors. They also cannot be used with the arguments object, super, or new."
    //     },
    //     {
    //         Q: "What is the purpose of the async/await syntax?",
    //         ans: "async/await provides a way to write asynchronous code that looks and behaves more like synchronous code. An async function always returns a promise, and the await keyword pauses execution until the promise is resolved or rejected, allowing for cleaner and more readable asynchronous code"
    //     },
    //     {
    //         Q: "What is the fetch API?",
    //         ans: "fetch is a modern web API for making HTTP requests. It provides a more flexible and powerful alternative to XMLHttpRequest, supporting promises and allowing for easier handling of response data. fetch can be used to perform various types of HTTP requests and handle request/response streams."
    //     },
    //     {
    //         Q: "What are 'template strings' and their benefits?",
    //         ans: "Template strings, or template literals, are string literals that allow embedded expressions and multi-line strings. They use backticks (`) and provide benefits like easier string interpolation, improved readability, and the ability to handle multi-line content without the need for newline characters."
    //     },
    //     {
    //         Q: "How do you create and use a 'map' in JavaScript?",
    //         ans: "A Map is a built-in object that holds key-value pairs and maintains the insertion order of keys. It allows for any type of key and provides methods for setting, getting, and deleting values, as well as checking the size of the map. Maps are useful for scenarios requiring a consistent order and easy management of key-value pairs."
    //     },
    //     {
    //         Q: "What is the difference between slice() and splice() methods in arrays?",
    //         ans: "slice() creates a new array with a copy of a portion of the original array without modifying it. splice() modifies the original array by removing, replacing, or adding elements at a specific index. slice() is used for extraction, while splice() is used for manipulation."
    //     },
    //     {
    //         Q: "What is a 'rest parameter' in JavaScript?",
    //         ans: "The rest parameter syntax (...) allows a function to accept an indefinite number of arguments as an array. It is used in function definitions to capture remaining arguments after specific named parameters, enabling more flexible function signatures and handling of variable-length argument lists."
    //     },
    // ]

    return (
        <div>
            <Nav_bar />
            <div className='flex'>
                <Side_bar />
                <Content />
            </div>
            <Footer />
        </div>
    )
}
