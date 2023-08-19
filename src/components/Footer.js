import "./Footerstyles.css";

import React from 'react';

import {FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="leftfooter">
                <div className="location">
                    <FaHome size={20} 
                    style={{color:"#fff", marginRight:"2rem"}} />
                    <div>
                        <p>2225 Tanglewood DR</p>
                        <p>Hammond,IN</p>
                    </div>
                </div>
                <div className="phone">
                    <h4><FaPhone size={20} 
                    style={{color:"#fff", marginRight:"2rem"}} />
                    219-289-4154
                    </h4>
                </div>
                <div className="Email">
                    <h4><FaMailBulk size={20} 
                    style={{color:"#fff", marginRight:"2rem"}} />
                    medisettyrohith8@gmail.com
                    </h4>
                </div>
            </div>
            <div className="right">
                <h4>
                    About Me
                </h4>
                <p>Frontend Developer | fullstack developer | 
                    MS in computer science at purdue university</p>
                <div className="social">
                    <FaLinkedin size={20} 
                    style={{color:"#fff", marginRight:"2rem"}} 
                    onClick={()=>window.open('https://www.linkedin.com/in/rohith-medisetty-a537411b2/','_blank')} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer