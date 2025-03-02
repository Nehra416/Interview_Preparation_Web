import React from 'react'
import { Nav_bar } from '../Navbar/Nav_bar'
import { Side_bar } from '../Side_bar/Side_bar'
import { Footer } from '../Footer/Footer'
import { Content } from '../Content/Content'

export const React_layout = () => {
    // const react = [
    //     {
    //         Q: "What is React?",
    //         ans: "React is a JavaScript library for building user interfaces, maintained by Facebook. It allows developers to create single-page applications with a component-based architecture."
    //     },
    //     {
    //         Q: "What is a component in React?",
    //         ans: "A component is a JavaScript function or class that optionally accepts inputs (known as `props`) and returns a React element that describes how a section of the UI should appear."
    //     },
    //     {
    //         Q: "What are the two types of components in React?",
    //         ans: "Functional components and class components."
    //     },
    //     {
    //         Q: "What is JSX?",
    //         ans: "JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML elements and components in a JavaScript file."
    //     },
    //     {
    //         Q: "What is the purpose of the render() method in a class component?",
    //         ans: "The render() method returns the JSX that describes what the UI should look like for that component."
    //     },
    //     {
    //         Q: "What are props in React?",
    //         ans: "Props (short for properties) are read-only attributes used to pass data from a parent component to a child component."
    //     },
    //     {
    //         Q: "What is state in React?",
    //         ans: "State is a built-in object that holds data that may change over the lifetime of a component. It allows components to maintain their own data."
    //     },
    //     {
    //         Q: "What is the useState hook in React?",
    //         ans: "The useState hook is a function that lets you add state to functional components."
    //     },
    //     {
    //         Q: "What is the useEffect hook in React?",
    //         ans: "The useEffect hook lets you perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM."
    //     },
    //     {
    //         Q: "What is a key in React and why is it important?",
    //         ans: "A key is a unique identifier for each element in a list. It helps React identify which items have changed, are added, or are removed, improving performance during re-renders."
    //     },
    //     {
    //         Q: "What is conditional rendering in React?",
    //         ans: "Conditional rendering allows you to render different UI elements based on certain conditions."
    //     },
    //     {
    //         Q: "What is the purpose of props.children?",
    //         ans: "props.children is a special prop that allows components to pass content between their opening and closing tags."
    //     },
    //     {
    //         Q: "What is a higher-order component (HOC)?",
    //         ans: "An HOC is a function that takes a component and returns a new component with additional props or functionality."
    //     },
    //     {
    //         Q: "What is context in React?",
    //         ans: "Context provides a way to pass data through the component tree without having to pass props down manually at every level."
    //     },
    //     {
    //         Q: "How does the context API work?",
    //         ans: "The context API involves creating a context object with React.createContext(), providing a value through a Context.Provider, and consuming the value with Context.Consumer or the useContext hook."
    //     },
    //     {
    //         Q: "What is Redux?",
    //         ans: "Redux is a state management library for JavaScript applications. It provides a centralized store for application state and a predictable way to manage state changes using actions and reducers."
    //     },
    //     {
    //         Q: "What is a reducer in Redux?",
    //         ans: "A reducer is a pure function that takes the current state and an action as arguments and returns a new state. It describes how the state changes in response to actions."
    //     },
    //     {
    //         Q: "What is the purpose of the Redux store?",
    //         ans: "The Redux store holds the application's state and provides methods to dispatch actions and subscribe to state changes. It acts as a single source of truth for the application's state."
    //     },
    //     {
    //         Q: "What is React Router?",
    //         ans: "React Router is a library used for routing in React applications. It allows you to define multiple routes in your application and navigate between different views or pages."
    //     },
    //     {
    //         Q: "What is a route in React Router?",
    //         ans: "A route is a mapping between a URL path and a React component. When the URL matches the route's path, the corresponding component is rendered."
    //     },
    //     {
    //         Q: "What are React Fragments?",
    //         ans: "Fragments are a way to group multiple elements without adding extra nodes to the DOM. They are used to avoid unnecessary wrappers in the component tree."
    //     },
    //     {
    //         Q: "What is server-side rendering (SSR)?",
    //         ans: "Server-side rendering is the process of rendering a React application on the server and sending the fully rendered HTML to the client. This can improve initial load performance and SEO."
    //     },
    //     {
    //         Q: "What is the useCallback hook?",
    //         ans: "The useCallback hook returns a memoized callback function that only changes if its dependencies change. It helps prevent unnecessary re-renders by avoiding the recreation of functions on every render."
    //     },
    //     {
    //         Q: "How can you update state in a functional component?",
    //         ans: "Use the useState hook to initialize and update state in functional components."
    //     },
    //     {
    //         Q: "What are prop drilling and its alternatives?",
    //         ans: "Prop drilling is passing data through many levels of components via props. Alternatives include using context or state management libraries to avoid passing props through intermediate components."
    //     },
    //     {
    //         Q: "How can you update state in a functional component?",
    //         ans: "Use the useState hook to initialize and update state in functional components."
    //     },
    //     {
    //         Q: "What are custom hooks?",
    //         ans: "Custom hooks are reusable functions that encapsulate component logic and state management. They let you share stateful logic between components."
    //     },
    //     {
    //         Q: "What are useEffect dependencies and how do they work?",
    //         ans: "Dependencies are values passed to useEffect that determine when the effect should run. If a dependency changes, the effect re-runs."
    //     },
    //     {
    //         Q: "What is Axios method to fetch API ?",
    //         ans: "Axios is a popular JavaScript library for making HTTP requests, and it works great with React. Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations (create, read, update and delete), as well as handle the responses."
    //     },
    //     {
    //         Q: " What is API ?",
    //         ans: "An API call in React is the process of sending a request to a web API from within React, which allows your application to interact and exchange information with other systems. There are three common ways to make API calls in React: XMLHttpRequest, Fetch API, Axios"
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
