import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import {Route,Routes} from 'react-router-dom';
import Register from "./Component/Register/Register";
import Login from "./Component/Register/Login";
import About from "./Component/AboutUs/About";
import Navbar1 from "./Component/Navbar/Navbar1";
import Home from "./Component/Home/Home"
import Footer from "./Component/Footer/Footer"
import Firstp from "./Component/HelpLink/Helplink1/Firstp"
import Help from "./Component/HelpLink/Helplink2/Help"
import Learn from "./Component/Car/Learn";
import Credits from "./Component/shop/Credits"
import Deal from "./Component/Deals/Deal";
import Offers from "./Component/Offers/Offers";
const App = () => {
  return (
        <>
          <Navbar1/>

          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Sign" element={<Register/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/About" element={<About/>} />
             <Route path="/Helplink1" element={<Firstp/>} />
             <Route path="/Helplink2" element={<Help/>}/>
            <Route path="/Learn" element={<Learn/>}/>
            <Route path="/Use" element={<Credits/>}/>
            <Route path="/Shop" element={<Deal/>}/>
             <Route path="/Deals" element={<Offers/>}/> 

          </Routes>

          <Footer/>
        </>
  );
};

export default App;
