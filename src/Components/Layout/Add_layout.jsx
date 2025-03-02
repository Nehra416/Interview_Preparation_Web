import React, { useEffect } from 'react'
import { Nav_bar } from '../Navbar/Nav_bar';
import { Footer } from '../Footer/Footer';
import Add from '../Extra/Add';
import { useLoginContext } from '../../LoginContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Add_layout = () => {
    // const add = [];
    const { logIn } = useLoginContext();
    const naivgate = useNavigate()

    // i think navigate function ko return jsx me use nahi kar sakte ??
    const userLogIn = localStorage.getItem('userLogIn')
    console.log(userLogIn)

    useEffect(() => {
        if (!userLogIn && !logIn) {
            naivgate("/login")
            toast("Pls! LogIn First to Add your Questions.")
        }
    }, [userLogIn, logIn])
    // userLogin and logIn dependency is required because when we logout the page this useEfect need to work if it don't work then we don't navigate to the login page from the add after log out.

    // console.log("is login" + logIn)
    return (
        <>
            {
                (userLogIn || logIn) ?
                    <>
                        <Nav_bar />
                        <Add />
                        <Footer />
                    </> : null
            }
        </>
    )
}

export default Add_layout
