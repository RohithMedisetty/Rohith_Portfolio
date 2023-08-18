import "./Contactformstyle.css";
import React, { useState } from 'react'

const Contactform = () => {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [subject,setsubject]=useState('');
  const [Message,setMessage]=useState('');
  const [error,setError]=useState(false);

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(name.length==0||email.length==0||subject.length==0||Message.length==0){
      setError(true);
    }
    if(name&&email&&subject&&Message){
        console.log("Nmae: ", name,"\nEmail: ", email, "\nSubject: ", subject, "\nMessage: ", Message)
    }
  }

  return (
    <div className="form">
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input onChange={e=>setname(e.target.value)}></input>
            {error&&name.length<=0?
            <label style={{color:"#d12e2e",fontSize:"9px"}}>Name can't be empty</label>:""}

            <label>Email</label>
            <input onChange={e=>setemail(e.target.value)} type="email"></input>
            {error&&email.length<=0?
            <label style={{color:"#d12e2e",fontSize:"9px"}}>Email can't be empty</label>:""}

            <label>subject</label>
            <input onChange={e=>setsubject(e.target.value)}></input>
            {error&&subject.length<=0?
            <label style={{color:"#d12e2e",fontSize:"9px"}}>Subject can't be empty</label>:""}

            <label>Message</label>
            <textarea onChange={e=>setMessage(e.target.value)}/>
            {error&&Message.length<=0?
            <label style={{color:"#d12e2e",fontSize:"9px"}}>Message can't be empty</label>:""}

            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Contactform