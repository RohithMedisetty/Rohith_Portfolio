import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import Contactform from '../components/Contactform';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="CONTACT." text="let's have a chat"/>
      <Contactform />
      <Footer />
    </div>
  )
}

export default Contact