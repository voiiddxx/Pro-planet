import React from 'react'
import "./Userhome.css"
import Usernav from '../components/Nav/Usernav'
import Userhomehero from '../components/hero/Userhomehero'

const Userhome = () => {
  return (
    <div className="userhome-main">
      <Usernav/>
      <Userhomehero/>
    </div>
  )
}

export default Userhome