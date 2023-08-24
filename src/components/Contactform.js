import { useRef } from "react";
import "./Contactformstyle.css";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


// const config = {
//     // Host : "smtp.elasticemail.com",
//     // Username : "rohithmedisetty75@gmail.com",
//     // Password : "054D870296C15255423D1236DCC7691D5C38",
//     // port: 2525, 
//     SecureToken:'8d5f0303-49dd-478a-89d7-f544fe3a240e',
//     To : 'rohithmedisetty75@gmail.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"

// }
const Contactform = () => {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [subject,setsubject]=useState('');
  const [Message,setMessage]=useState('');
  const [error,setError]=useState(false);
  const form = useRef();

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name.length===0||email.length===0||subject.length===0||Message.length===0){
      setError(true);
    }
    if(name&&email&&subject&&Message){
        console.log("Name: ", name,"\nEmail: ", email, "\nSubject: ", subject, "\nMessage: ", Message)
    }
    
    emailjs.sendForm('service_ksr55fj', 'template_uqldnep', form.current, '-EgoWavbYInGzsRFy')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    
    e.target.reset();
      
  }

  return (
    <div className="form">
        <form ref={form} onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input onChange={e=>setname(e.target.value)} name="user_name"></input>
            {error&&name.length<=0?
            <label style={{color:"#d12e2e",fontSize:"9px"}}>Name can't be empty</label>:""}

            <label>Email</label>
            <input onChange={e=>setemail(e.target.value)} name="useremail" type="email" ></input>
            {error&&email.length<=0?
            <label style={{color:"#d12e2e",fontSize:"9px"}}>Email can't be empty</label>:""}

            <label>subject</label>
            <input onChange={e=>setsubject(e.target.value)} name="user_subject"></input>
            {error&&subject.length<=0?
            <label style={{color:"#d12e2e",fontSize:"9px"}}>Subject can't be empty</label>:""}

            <label>Message</label>
            <textarea onChange={e=>setMessage(e.target.value)} name="user_message"/>
            {error&&Message.length<=0?
            <label style={{color:"#d12e2e",fontSize:"9px"}}>Message can't be empty</label>:""}

            <button className="btn">Submit</button>
        </form>
    </div>
    
  )
}
<script>https://smtpjs.com/v3/smtp.js</script>

export default Contactform