import React from 'react'
import twiter from "../Images/twiter.png"
import instagram from "../Images/insta.png"
import fb from "../Images/fb.png"
import linkedIn from "../Images/linkedIn.png"

export const Footer = () => {
    return (
        <div>
            <div className="footer flex justify-evenly py-20 px-20 bg-[#161C2D] text-white mt-10">
                <div className="f1 w-52">
                    <h1 className='font-bold text-2xl'>Nehra</h1>
                    <p className='py-3 text-gray-500'>
                        With lots of unique blocks, you can easily build a page without coding. Build your next landing page.
                    </p>
                    <div className='flex space-x-4'>
                        <img src={twiter} alt="" />
                        <img src={fb} alt="" className='rounded' />
                        <img src={instagram} alt="" />
                        <img src={linkedIn} alt="" className='rounded' />
                    </div>
                </div>
                <div className="f2">
                    <ul className=''>
                        <li className='text-gray-500 pb-5'>Company</li>
                        <li className='leading-loose'>About us</li>
                        <li className='leading-loose'>Careers</li>
                        <li className='leading-loose'>Press</li>
                    </ul>
                </div>
                <div className="f3">
                    <ul>
                        <li className='text-gray-500 pb-5'>Product</li>
                        <li className='leading-loose'>Features</li>
                        <li className='leading-loose'>Pricing</li>
                        <li className='leading-loose'>News</li>
                        <li className='leading-loose'>Help Desk</li>
                        <li className='leading-loose'>Support</li>
                    </ul>
                </div>
                <div className="f4">
                    <ul>
                        <li className='text-gray-500 pb-5'>Services</li>
                        <li className='leading-loose'>Digital MArketing</li>
                        <li className='leading-loose'>Content Writing</li>
                        <li className='leading-loose'>SEO for Business</li>
                        <li className='leading-loose'>UI Design</li>
                    </ul>
                </div>
                <div className="f5">
                    <ul>
                        <li className='text-gray-500 pb-5'>Legal</li>
                        <li className='leading-loose'>Privacy Policy</li>
                        <li className='leading-loose'>Terms & Conditions</li>
                        <li className='leading-loose'>Return Policy</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
