import React, { useState } from 'react'
// for example highlighter (npm i react-syntax-highlighter)
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
// react icons..
import { FiClipboard } from "react-icons/fi";
import { FaCheck } from "react-icons/fa6";

const Ex_Highlighter = (props) => {
    const [copy, setCopy] = useState(true)

    return (
        <div>
            <div className='flex justify-between bg-gray-500 py-1 px-2 text-white mr-5 rounded-t-lg'>
                <p>Example Code</p>
                {
                    copy ?
                        <button className='flex items-center gap-1'
                            onClick={() => {
                                navigator.clipboard.writeText(props.ex);
                                setCopy(false)
                                setTimeout(() => {
                                    setCopy(true)
                                }, 3000);
                            }}>
                            <FiClipboard />
                            Copy code
                        </button>
                        :
                        <button className='flex items-center gap-1'>
                            <FaCheck />
                            Copied!
                        </button>
                }
            </div>
            <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ padding: '20px', borderBottomLeftRadius: "10px", borderBottomRightRadius: "10px", marginRight: "20px" }} >
                {props.ex}
            </SyntaxHighlighter>
        </div>
    )
}

export default Ex_Highlighter
