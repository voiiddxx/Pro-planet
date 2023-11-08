import React, { useContext, useState } from 'react'
import "./Register.css"
import earthimage from "./login.svg"
import { authContext } from '../contexts/Authcontext'
import { useNavigate } from 'react-router'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
  const navigate = useNavigate();
  const {Register} = useContext(authContext);
   
  const handleSubmit =async (e)=>{
    toast.info('Registering Your Account 🔥', {
      position: "top-right",
      theme: "dark",
      });
    e.preventDefault();
    const data = await Register(username , email , password);
    if(data === 200){
      navigate("/Login");
    }
    else{
      toast.error('Invalid Credentials', {
        theme: "colored",
        });
      
    }
    

  }

  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
    <div className="register-main">
        <div className="register-left">
          <img src={earthimage} alt="greencityimage" />
        </div>
        <div className="register-right">
          <p>Hellow!🖐️</p>
          <h1>Welcome To The Planet Pulse 🌱</h1>
          <form >
            <p>username</p>
            <input className='register-input' type="text" placeholder='Enter Your Username' onChange={(e)=>{
              setusername(e.target.value)
            }} />
            <p>Email Address</p>
            <input className='register-input' type="email" placeholder='Enter Your Email Address' onChange={(e)=>{
              setemail(e.target.value)
            }}  />
            <p>Password</p>
            <input className='register-input' type="password" placeholder='Enter Your password'
            onChange={(e)=>{
              setpassword(e.target.value)
            }}
             />
    <p></p>
            <input className='submit-button' type="submit" value="Get Started" onClick={handleSubmit} />

            <div onClick={()=>{
              navigate("/Login")
            }} className="existing-text">
              <p>Already have an account? <span>Login</span> </p>
            </div>
            
          </form>

        </div>
    </div>
    <ToastContainer />
    </>
  )
}

export default Register