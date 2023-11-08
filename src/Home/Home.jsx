import React from 'react'
import Nav from '../components/Nav/Nav'
import Hero from '../components/hero/Hero'
import "./Home.css"
import aboutmain from "./aboutmain.svg"

const Home = () => {

 

  return (
    <>
    <Nav/>
    <Hero/>
    <div className="about">
    <div className="about-text">
    <h1>Get To Know About The Pro Planet person Platform</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem illum officiis nobis saepe reprehenderit quae quam facilis <br /> ut, non iusto consequatur velit dolorum earum assumenda ipsa iste alias. Odit tempora cumque doloremque! Tenetur nisi, optio nostrum natus doloremque consequuntur ad necessitatibus vero nam eaque aspernatur! <br /> Eveniet veniam minima pariatur laudantium non inventore voluptates maxime molestiae ex? Ratione delectus praesentium nobis!</p>
    </div>
    <div className="about-image">
      <img src={aboutmain} alt="aboutmain" />
    </div>
    </div>
    <div className="footer">
      <p>Created By Nikhil Kumar 💚</p>
    </div>
    </>
  )
}

export default Home