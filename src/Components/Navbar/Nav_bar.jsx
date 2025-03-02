import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import menu from '../Images/menu.png'
import cross from '../Images/cross.png'
import qa2 from '../Images/qa2.png'
import axios from 'axios'
import { useLoginContext } from '../../LoginContext'

export const Nav_bar = (props) => {
    const { logIn, setLogIn } = useLoginContext();
    const naivgate = useNavigate()

    const logOut = () => {
        // console.log("login value : ", logIn)
        localStorage.removeItem('userLogIn')
        setLogIn(false)
        naivgate("/login")
        // setLogIn(!logIn)
    }

    const [allData, setAllData] = useState([]); // array *** 
    const location = useLocation();
    // console.log(location) // location is a object and we extract pathname from it
    const { pathname } = location;
    // console.log(pathname)

    const [sideMenu, setSideMenu] = useState(false)
    const handleSideMenu = () => {
        console.log(sideMenu)
        setSideMenu(!sideMenu)
    }

    const [sideBar, setSideBar] = useState(false)
    const handleSideBar = () => {
        console.log(sideBar)
        setSideBar(!sideBar)
    }

    const getData = async () => {
        console.log("function is call");
        // console.log(location.pathname)

        await axios.get(`http://localhost:5000${location.pathname}`)
            .then((response) => {
                console.log(response.data) // array ko array ke hi state me save kerna parega 
                setAllData(response.data); // Set the data array from the response object
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        // don't clearity of need absolute top 0 for login page??
        <div className='top-0 absolute'>
            <div className='flex justify-between items-center text-xl bg-gray-300 drop-shadow-xl font-semibold h-[12vh] z-50 fixed top-0 left-0 w-full'>
                <ul className='sm:flex hidden gap-8 ml-10 '>
                    <li className={`hover:text-gray-500 cursor-pointer ${pathname === "/" ? 'text-cyan-700' : ''}`}><Link to="/">Home</Link></li>
                    <li className={`hover:text-gray-500 cursor-pointer ${pathname === "/html" ? 'text-cyan-700' : ''}`}><Link to="/html">HTML</Link></li>
                    <li className={`hover:text-gray-500 cursor-pointer ${pathname === "/js" ? 'text-cyan-700' : ''}`}><Link to="/js">Java Script</Link></li>
                    <li className={`hover:text-gray-500 cursor-pointer ${pathname === "/react" ? 'text-cyan-700' : ''}`}><Link to="/react">React JS</Link></li>
                    <li className={`hover:text-gray-500 cursor-pointer ${pathname === "/add" ? 'text-cyan-700' : ''}`}><Link to="/add">Add</Link></li>
                </ul>
                <ul className='sm:flex hidden gap-8 mr-10 '>

                    {(logIn || localStorage.getItem('userLogIn')) ?
                        <li className={`hover:text-gray-300 cursor-pointer bg-cyan-700 py-1 px-4 rounded ${pathname === "/login" ? 'text-gray-300' : ''}`} onClick={logOut}>Log Out</li>
                        : <li className={`hover:text-gray-300 cursor-pointer bg-cyan-700 py-1 px-4 rounded ${pathname === "/login" ? 'text-gray-300' : ''}`}><Link to="/login">Log In</Link></li>
                    }
                    <li className={`hover:text-gray-300 cursor-pointer bg-cyan-700 py-1 px-4 rounded ${pathname === "/signup" ? 'text-gray-300' : ''}`}><Link to="/signup">Sign Up</Link></li>
                </ul>

                {/* img for side bar */}
                <img src={qa2} alt="menu" className={`w-10 absolute left-5 sm:hidden ${pathname === "/login" ? 'hidden' : ''} ${pathname === "/signup" ? 'hidden' : ''}`} onClick={handleSideBar} />

                {/* heading in navbar is that which page is opend */}
                <p className="sm:hidden left-[35%] absolute">
                    {`${pathname === "/html" ? 'HTML' : ''} ${pathname === "/js" ? 'Java Script' : ''} ${pathname === "/react" ? 'React' : ''} ${pathname === "/add" ? 'Add Ques.' : ''}`}
                </p>

                {/* img for menu */}
                <img src={menu} alt="menu" className={`w-7 absolute right-5 sm:hidden ${sideMenu ? 'hidden' : 'block'}`} onClick={handleSideMenu} />
                <img src={cross} alt="cross" className={`w-7 absolute right-5 sm:hidden ${sideMenu ? 'block' : 'hidden'}`} onClick={handleSideMenu} />
            </div>

            {/* mobile navBar */}
            <div className={`sm:hidden ${sideMenu ? 'block' : 'hidden'} w-full fixed text-center mt-[12vh] text-xl bg-gray-300 drop-shadow-xl`} style={{ boxShadow: '0px 0px 40px  black' }}>
                <ul className={`flex flex-col gap-3 py-4`}>
                    <li className={`hover:text-gray-500 cursor-pointer ${pathname === "/" ? 'text-cyan-700' : ''}`} onClick={handleSideMenu}><Link to="/">Home</Link></li>
                    <li className={`hover:text-gray-500 cursor-pointer ${pathname === "/html" ? 'text-cyan-700' : ''}`} onClick={handleSideMenu}><Link to="/html">HTML</Link></li>
                    <li className={`hover:text-gray-500 cursor-pointer ${pathname === "/js" ? 'text-cyan-700' : ''}`} onClick={handleSideMenu}><Link to="/js">Java Script</Link></li>
                    <li className={`hover:text-gray-500 cursor-pointer ${pathname === "/react" ? 'text-cyan-700' : ''}`} onClick={handleSideMenu}><Link to="/react">React JS</Link></li>
                    <li className={`hover:text-gray-500 cursor-pointer ${pathname === "/add" ? 'text-cyan-700' : ''}`} onClick={handleSideMenu}><Link to="/add">Add Question</Link></li>
                </ul>
                <ul className='sm:hidden flex flex-col justify-center gap-5 mx-10 pb-5 '>
                    <li className={`hover:text-gray-300 cursor-pointer bg-cyan-700 py-1 px-4 rounded ${pathname === "/login" ? 'text-gray-300' : ''}`} onClick={handleSideMenu}><Link to="/login">Log In</Link></li>
                    <li className={`hover:text-gray-300 cursor-pointer bg-cyan-700 py-1 px-4 rounded ${pathname === "/signup" ? 'text-gray-300' : ''}`} onClick={handleSideMenu}><Link to="/signup">Sign Up</Link></li>
                </ul>
            </div>

            {/* side bar for mobile */}
            <div className={`${sideBar ? 'block' : 'hidden'} sm:hidden fixed h-[88vh] w-[80vw] bg-slate-500 pt-7 overflow-auto mt-[12vh]`} style={{ boxShadow: '0px 0px 100px 10px black' }}>
                <ol className='side_bar list-decimal list-outside font-medium pl-8'>

                    {allData.map((item, index) => {
                        return (
                            <li key={index} onClick={handleSideBar}><Link to={"#" + index}>{item.Q}</Link></li>
                        )
                    })}
                </ol>
            </div>

        </div >


    )
}
