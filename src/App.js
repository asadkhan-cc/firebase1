import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Component/Login";
import About from "./Pages/About";
import Home from "./Pages/Home";
import NoMatch from "./Pages/NoMatch";
import Layout from "./Pages/Layout";
import Signup from "./Component/Signup";
import CreateAccount from "./Component/CreateAccount";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="SignUp" element={<Signup />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
