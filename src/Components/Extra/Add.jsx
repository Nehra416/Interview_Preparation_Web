import axios from 'axios'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const Add = () => {
    const [dbPath, setDbPath] = useState()
    const [data, setData] = useState({
        Q: "",
        ans: "",
        ex: ``
    })

    const handleData = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setData({ ...data, [key]: value })
    }

    const postData = (e) => {
        e.preventDefault();
        const { Q, ans, ex } = data;
        console.log("Data Send : ", { Q, ans, ex })

        // need a if else condition for question type checkBoxes.
        dbPath ?
            axios.post(`${SERVER_URL}/${dbPath}`, { Q, ans, ex })
                .then((response) => {
                    console.log(response)

                    if (response.status === 201) {
                        toast("New Question is Added.")
                        setData({
                            Q: "",
                            ans: "",
                            ex: ``
                        })

                    } else if (response.status === 200) toast("PLS! Fill Both Question and Answer Fields.") // when all fill are not fill then response will come with status 200

                })
                .catch((err) => console.log("Error :", err))
            : toast("Please select Questions Type.")

    }

    // function for set the db collection file path
    const handlePath = (path) => {
        setDbPath(`${path}`)
    }

    return (
        <div className='mx-2'>
            <h1 className='text-center font-semibold sm:text-2xl text-xl mt-[15vh]'>Now, You can add your own Questions in this Website :)</h1>
            {/* <p className='text-center font-semibold sm:text-2xl text-xl mt-4 underline underline-offset-4'>Boost Your Preparation !!</p> */}
            <p className='text-center font-semibold sm:text-2xl text-xl mt-6 text-gray-500'>Please select which one type Question you want to Add in Web.</p>
            <div className='flex sm:justify-center text-justify items-center sm:flex-row flex-col sm:gap-5 gap-3 sm:text-xl text-base font-semibold mt-7'>

                {/* for taking type of question add by checkBoxes */}
                <div className='flex gap-2 '>
                    <input type="radio" id='html' name='Qtype' onChange={() => handlePath('html')} />
                    <label htmlFor="html" className='cursor-pointer'>HTML Question</label>
                </div>
                <div className='flex gap-2 '>
                    <input type="radio" id='js' name='Qtype' onChange={() => handlePath('js')} />
                    <label htmlFor="js" className='cursor-pointer'>JS Question</label>
                </div>
                <div className='flex gap-2 '>
                    <input type="radio" id='react' name='Qtype' onChange={() => handlePath('react')} />
                    <label htmlFor="react" className='cursor-pointer'>React Question</label>
                </div>
            </div>

            <form className=' sm:mx-[15%] mx-[5%] mt-7 text-lg '>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-xl font-semibold '>Enter Your Question</label>
                    <input type="text" placeholder='Question' name='Q' value={data.Q} onChange={handleData} className='border-2 my-2 mb-5 pl-2 font-medium h-10 rounded-lg' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-xl font-semibold '>Enter Your Answer</label>
                    {/* <input type="text" placeholder='Answer' name='ans' value={data.ans} onChange={handleData} className='border-2 my-2 pl-2 font-medium h-10' /> */}
                    <textarea name="ans" placeholder='Answer' rows={3} value={data.ans} onChange={handleData} className='border-2 rounded-lg my-2 mb-5 pl-2 font-medium'></textarea>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="" className='text-xl font-semibold '>Enter Your Example (Optional!)</label>
                    {/* <input type="text" placeholder='Example' name='ex' value={data.ex} onChange={handleData} className='border-2 my-2 pl-2 font-medium h-10' /> */}
                    <textarea name="ex" placeholder='Example' rows={4} value={data.ex} onChange={handleData} className='border-2 rounded-lg my-2 mb-5 pl-2 font-medium text-nowrap'></textarea>
                </div>
            </form>
            <div className='flex justify-center'>
                <button className='py-2 px-6 mt-4 rounded-lg bg-green-500 text-white hover:text-gray-300 text-lg font-semibold' onClick={postData}>Submit</button>
            </div>
        </div >
    )
}

export default Add
