import React from 'react'
import { Nav_bar } from '../Navbar/Nav_bar'
import { React_side_bar } from '../Side_bar/React_side_bar'
import { React_JS } from '../Content/React_JS'
import { Footer } from '../Footer/Footer'

export const React_layout = () => {
    return (
        <div>
            <Nav_bar />
            <div className='flex'>
                <React_side_bar />
                <React_JS/>
            </div>
            <Footer />
        </div>
    )
}
