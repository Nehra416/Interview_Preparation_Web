import React, { useEffect, useState } from 'react'
import "./Side_bar.css"
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const Side_bar = (props) => {
    const [allData, setAllData] = useState([]); // array *** 
    const location = useLocation();

    const getData = async () => {
        console.log("function is call");
        console.log(location.pathname)

        await axios.get(`${SERVER_URL}${location.pathname}`)
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
        <div className='sm:block hidden h-[88vh] max-w-[25vw] w-[25vw] bg-slate-500 pt-7 overflow-auto mt-[12vh]' style={{ boxShadow: '-20px 5px 20px 10px gray' }}>
            <ol className='side_bar list-decimal list-outside font-medium pl-8'>

                {allData.map((item, index) => {
                    return (
                        <li key={index}><Link to={"#" + index}>{item.Q}</Link></li>
                    )
                })}
            </ol>
        </div>
    )
}
