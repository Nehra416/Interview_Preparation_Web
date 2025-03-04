import { createContext, useContext, useState } from "react";
const LoginContext = createContext();

export const ContextProvider = ({ children }) => {
    const [logIn, setLogIn] = useState(false)

    return (
        <LoginContext.Provider value={{ logIn, setLogIn }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
};

export default LoginContext;