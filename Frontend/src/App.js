import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main_page } from "./Components/Main Page/Main_page";
import { JS_layout } from "./Components/Layout/JS_layout";
import { React_layout } from "./Components/Layout/React_layout";
import { Html_layout } from "./Components/Layout/Html_layout";
import { Login_layout } from "./Components/Layout/Login_layout";
import { SignUp_layout } from "./Components/Layout/SignUp_layout";
import Add_layout from "./Components/Layout/Add_layout";
import { ToastContainer } from 'react-toastify'; // npm install react-toastify for popups
import 'react-toastify/dist/ReactToastify.css'; // import css of the toastify popups

import { ContextProvider } from "./LoginContext";


function App() {

  return (
    <>
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main_page />} />
            <Route path="/html" element={<Html_layout />} />
            <Route path="/js" element={<JS_layout />} />
            <Route path="/react" element={<React_layout />} />
            <Route path="/add" element={<Add_layout />} />
            <Route path="/login" element={<Login_layout />} />
            <Route path="/signup" element={<SignUp_layout />} />
          </Routes>
        </Router>
      </ContextProvider>
      <ToastContainer />
    </>
  );
}

export default App;
