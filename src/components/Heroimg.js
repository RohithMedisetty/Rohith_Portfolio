import "./Heroimgstyle.css";
import React from 'react'
import Introimg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img"
            src={Introimg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi, I'M Rohith</p>
            <h1>Full Stack Developer</h1>
            <div>
                <Link to="/project"
                className="btn">projects</Link>
                <Link to="/contact"
                className="btn btn-light">contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg;