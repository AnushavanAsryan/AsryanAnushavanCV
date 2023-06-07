// import { Link } from 'react-router-dom';
// import { Search } from "@mui/icons-material";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import "../css/Header.css"
const Header = () => {
    return(
      <div className="Header">
        <h2 className="Name">Anushavan Asryan | Front_End Developer</h2>
        <div className="phoneBlock">
          <p className="phone">PHONE: <a href="tel:+374 (96) 29 21 97" className="phoneNumber">+374 (96) 29 21 97</a></p>
        </div>
        <div className="emailBlock">
          <p className="email">Email: <a href="mailto:asryana44@gmail.com" className="emailSend">asryana44@gmail.com</a></p>
        </div>
      </div>


    )
}
export default Header