import React, { useState } from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <div className="navbar">
        <div className="right-nav">
            <p>Home</p>
            <p>Planet Hub</p>
            <p>Weekly Task</p>
            <p>About</p>
            <p>Logout</p>
        </div>
        <div className="mid-nav">
            <p>Pro Planet</p>
        </div>
        <div className="left-nav">
            <p>Logout</p>
        </div>

    </div>
  )
}

export default Nav