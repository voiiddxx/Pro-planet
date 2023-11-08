import React, { useContext } from 'react'
import "./Approve.css"
import Usernav from '../components/Nav/Usernav'
import Adminsidebar from '../components/hero/Adminsidebar'
import { VerifyContext } from '../contexts/reducers/Verifycontext'
import { useNavigate } from 'react-router'
import Ranking from '../Ranking/Ranking'

const Approve = () => {
  const {applieduser} = useContext(VerifyContext);
  const navigate = useNavigate();
  
  return (
    <>
    <div className="approve-main">
        <Usernav/>
        <div className="approve-main-content">
          <div className="approve-left">
            <Adminsidebar/>
          </div>

          <div className="admin-mid">
        <h1>Applied Users For Pro Planet Person verification 🌍</h1>
        <div className="approve-list">
          {
            applieduser!==0 ? applieduser.map((curr , index)=>{
              return <div className="approve-card">
              <img className='applied-image' src={curr.userprofile} alt="userimage" />
              <h1>{curr.username}</h1>
              <p>{curr.email}</p>
              <div onClick={()=>{
                navigate("/Approvemain" , {state:{userData:curr}});
              }} className="approve-button">
                <p>Explore</p>
              </div>
            </div>
            }) : <h1>There is No any other user</h1>
          }
        </div>
          </div>

          <div className="approve-right-bar">
            <Ranking/>
          </div>
         
        </div>
    </div>
    </>
  )
}

export default Approve