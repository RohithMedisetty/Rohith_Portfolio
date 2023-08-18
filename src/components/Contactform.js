import "./Contactformstyle.css";
import React from 'react'

const Contactform = () => {
  return (
    <div className="form">
        <form>
            <label>Your Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>subject</label>
            <input type="text"></input>
            <label>Message</label>
            <textarea rows="6" placeholder="Type Your Message" />
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Contactform