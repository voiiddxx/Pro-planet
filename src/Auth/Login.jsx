import React, { useContext, useState } from 'react'
import "./Register.css"
import earthimage from "./login.svg"
import { authContext } from '../contexts/Authcontext'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const navigate = useNavigate();
    const {login} = useContext(authContext);

    const handleLogin =  async(e)=>{
      toast.info('Please Wait🔥', {
        position: "top-right",
        theme: "dark",
        });
        e.preventDefault();
       const data = await login(username , password);
       
       if(data === 200){
        navigate("/Home");
             }
       else{
        toast.error('Invalid Credentials', {
          theme: "colored",
          });
       }
    }
  
    const [username, setusername] = useState("");
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
              
              <p>Password</p>
              <input className='register-input' type="password" placeholder='Enter Your password'
              onChange={(e)=>{
                setpassword(e.target.value)
              }}
               />
      <p></p>
              <input className='submit-button' type="submit" value="Get Started" onClick={handleLogin} />
              <div onClick={()=>{
              navigate("/Register")
            }} className="existing-text">
              <p>Don't have an account <span>Create Now</span> </p>
            </div>
              
            </form>
          </div>
      </div>
      <ToastContainer
      autoClose={1000}
      limit={1} />
      </>
    )
}

export default Login