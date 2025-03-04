import React from 'react'
import { Nav_bar } from '../Navbar/Nav_bar'
import { LogIn } from '../Extra/LogIn'
import { Footer } from '../Footer/Footer'

export const Login_layout = () => {
    // const login = []
    
    return (
        <div>
            <Nav_bar />
            <LogIn />
            <Footer />
        </div>
    )
}
