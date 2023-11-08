import React from 'react'
import "./adminhome.css"
import Usernav from '../components/Nav/Usernav'
import Adminsidebar from '../components/hero/Adminsidebar'
import Ranking from '../Ranking/Ranking'
import Userhomemid from '../components/hero/Userhomemid'
const Adminhome = () => {
  return (
    <>
    <div className="admin-home-main">
    <Usernav/>
    <div className="admin-main-content">
    <Adminsidebar/>
    <div className="admin-mid">
    <Userhomemid/>
    </div>

    <div className="admin-right">
      <Ranking/>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Adminhome