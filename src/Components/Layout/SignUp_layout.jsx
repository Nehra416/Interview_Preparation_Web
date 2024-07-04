import React from 'react'
import { Nav_bar } from '../Navbar/Nav_bar'
import { Footer } from '../Footer/Footer'
import { SignUp } from '../Extra/SignUp'

export const SignUp_layout = () => {
    return (
        <div>
            <Nav_bar />
            <SignUp />
            <Footer />
        </div>
    )
}
