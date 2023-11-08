import React, { useContext } from 'react'
import "./Hero.css"
import hero from "./earth.png";
import { authContext } from '../../contexts/Authcontext';
import { useNavigate } from 'react-router'

const Hero = () => {


  const {isLoading , user} = useContext(authContext);
  const navigate = useNavigate();
 
    if(isLoading){
      return <div className="loading">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/loading-2872701-2409417.png" alt="loading" />
        <p>Loading Please Wait!</p>
      </div>
    }
    else{
      
  return (
    <div className="hero-main">
        <div className="hero-text">
            <h2>Hey {user?.username}🖐️</h2>
            <h1>Be a Pro Planet Person And Help to Save <span> The Earth 🌍  </span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus repellendus, unde quibusdam ipsam sed ullam eligendi minus cupiditate provident in iure molestiae ratione cumque! Magnam ea odit explicabo, necessitatibus id eum consequuntur laborum delectus.</p>
           <div className="button">
           <p onClick={()=>{
            navigate("/Userhome")
           }} >Explore Now ⚡</p>
           </div>
        </div>
        <div className="hero-image">
            <img src={hero} alt="heroimage" />
        </div>
    </div>
  )
    }
}

export default Hero