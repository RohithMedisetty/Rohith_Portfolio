import "./Skillsetstyle.css"

import React from 'react'
import htmlimage from "../assets/html.png";
import cssimage from "../assets/css.png";
import jsimage from "../assets/js.png";
import reactimage from "../assets/react.png";
import nodeimage from "../assets/node.png";
import jqueryimage from "../assets/jquery.png";
import javaimage from "../assets/java.png";
import sqlimage from "../assets/sql.png";
import springimage from "../assets/spring.jpeg";
import gitimage from "../assets/git.png";
import jiraimage from "../assets/jira.png";
import bootstrapimage from "../assets/bootstrap.jpeg";
import resume from "../files/Resume.pdf"

const Skillset = () => {
  return (
    <div className="skillsetcontainer">
      <div className="skillsheading">Skills</div>
    <div className="skillset">
        
        <img src= {htmlimage} alt="html" className="imgd" />
        <img src= {cssimage} alt="html" className="imgd" />
        <img src= {jsimage} alt="html" className="imgd" />
        <img src= {bootstrapimage} alt="html" className="imgd" />
        <img src= {reactimage} alt="html" className="imgd" />
        <img src= {nodeimage} alt="html" className="imgd" />
        <img src= {jqueryimage} alt="html" className="imgd" />
        <img src= {sqlimage} alt="html" className="imgd" />
        <img src= {javaimage} alt="html" className="imgd" />
        <img src= {springimage} alt="html" className="imgd" />
        <img src= {gitimage} alt="html" className="imgd" />
        <img src= {jiraimage} alt="html" className="imgd" />

        </div> 
        <div className='rsmbtn'>
      <a href={resume} download="Rohith_Resume">
            <button className="resumebtn">Resume</button>
        </a>
        </div>
    </div>
  )
}

export default Skillset