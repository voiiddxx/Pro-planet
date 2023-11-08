import React, { useEffect } from 'react'
import splashImage from "./splash.jpg"
import "./Splash.css"
import { useNavigate } from 'react-router'
import axios from 'axios';
import about from "./aboutmain.svg"


const Start = () => {

  const navigate = useNavigate();

  const checkingUserPresentorNot = async()=>{
    const axiosconfig = {
      headers:{
        "Accept":"application/json",
        "x-auth-token":localStorage.getItem("x-auth-token")
      }
    }
    try {
      const response = await axios.get("https://pro-planet-server.onrender.com/get-curr-user" , axiosconfig);

      if(response.status === 200){
        if(response.data.category === "user"){
          navigate("/Home")
        }
        else{
          navigate("/Adminhome")
        }
        
      }
      

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    checkingUserPresentorNot();
    
  } , []);
  
  return (
    
    <>
     <div className="splash-main">
        <img src={about} alt="splashImage" className="splash-image" />
        
        <div className="splash-text">
          <h1>Welcome To Pro Planet💚 </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto nobis officia inventore excepturi, cum repellat, odit sit magni fuga cumque nesciunt sed aperiam? Tempora magni possimus dolores assumenda iusto laboriosam sequi dignissimos, aut repellendus.
          </p>
        </div>
  
        <div className="submit-text" onClick={()=>{
          navigate("/Register")
        }} >
          <p>Get Started 👉</p>
        </div>
      </div>
    </>
  )
}

export default Start