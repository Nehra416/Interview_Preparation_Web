import React from 'react'
import { Nav_bar } from '../Navbar/Nav_bar'
import { JS_side_bar } from '../Side_bar/JS_side_bar'
import { JS } from '../Content/JS'
import { Footer } from '../Footer/Footer'

export const JS_layout = () => {
    return (
        <div>
            <Nav_bar />
            <div className='flex'>
                <JS_side_bar />
                <JS />
            </div>
            <Footer />
        </div>
    )
}
