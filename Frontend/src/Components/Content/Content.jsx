import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Ex_Highlighter from './Ex_Highlighter';
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export const Content = (props) => {
  const [allData, setAllData] = useState([]); // array *** 
  const location = useLocation();

  useEffect(() => {
    // console.log("location is:", location)
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // substring is used to remove the hash (#)

      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // Adjust the value to set the gap from the top
          behavior: 'smooth'
        });
      }
    }
  }, [location.hash]);

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
    <div className='sm:max-w-[75vw] w-[100vw] pl-11 mt-[12vh]'>
      <ol className='list-decimal list-outside pt-6'>
        {
          allData.map((item, index) => (
            <div key={index}>
              <li id={index} className='font-semibold sm:text-2xl text-xl'>{item.Q}</li>
              <p id={index} className='sm:text-lg text-base mt-2 mb-4'>
                <span className='text-gray-500 text-xl font-medium'>Ans: </span> {item.ans}
              </p>
              {
                item.ex ?
                  <Ex_Highlighter ex={item.ex} />
                  : ''
              }
            </div>
          ))
        }
      </ol>
    </div>
  )
};