import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Aboutcontent from '../components/Aboutcontent';
import Skillset from '../components/Skillset';

const About = () => {
  return (
    <div>
      <Navbar/>

      <Heroimg2 heading = "ABOUT ME." text="Frontend Developer | fullstack developer | 
                    MS in computer science at purdue university"/>
      <Skillset />
      {/* <div className='rsmbtn'>
      <a href="%PUBLIC_URL%/Rohith_Medistty_Resume.pdf"
        download="Rohith_Medistty_Resume.pdf">
            <button className="resumebtn">Resume</button>
        </a>
        </div> */}
      
      <Aboutcontent />
      <Footer />
    </div>
  )
}

export default About