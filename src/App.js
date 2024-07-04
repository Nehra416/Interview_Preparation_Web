import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Main_page } from "./Components/Main Page/Main_page";
import { JS_layout } from "./Components/Layout/JS_layout";
import { React_layout } from "./Components/Layout/React_layout";
import { Html_layout } from "./Components/Layout/Html_layout";
import { Login_layout } from "./Components/Layout/Login_layout";
import { SignUp_layout } from "./Components/Layout/SignUp_layout";

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main_page />} />
          <Route path="/JS" element={<JS_layout />} />
          <Route path="/react" element={<React_layout />} />
          <Route path="/Html" element={<Html_layout />} />
          <Route path="/Login" element={<Login_layout />} />
          <Route path="/signup" element={<SignUp_layout />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
