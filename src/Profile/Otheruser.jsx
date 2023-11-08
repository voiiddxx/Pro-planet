import React, { useContext, useEffect } from 'react'
import "./Profile.css"
import Usernav from '../components/Nav/Usernav'
import Sidebar from '../components/hero/Sidebar';
import Ranking from '../Ranking/Ranking';
import { useLocation } from 'react-router-dom';
import { userContext } from '../contexts/Usercontext';
const Otheruser = () => {
    const {specificUser , getOtheruserpost} = useContext(userContext);
    const location = useLocation();


    useEffect(()=>{
        specificUser(location.state.username);
        getOtheruserpost(location.state.username);
    } , []);

    const {otheruser , otherpost} = useContext(userContext);


    return (
        <div className="profile">
          <Usernav/>
    
          <div className="profile-main-content">
            <div className="profile-left"><Sidebar/></div>
            <div className="profile-mid-th">
        <div className="prodile-upper">
          <div className="upper-user">
            <div className="user-text">
              <h1> {otheruser.username}<span>⚡</span> </h1>
              <p>{otheruser.email}</p>
    
              <div className="profile-cards-uppr">
              <div className="rating-container">
                <p>Your Rating: {otheruser.pro_planet_rating}</p>
              </div>
              <div className="rating-container">
                <p>Total Completed task : {otheruser.total_completed_task}</p>
              </div>
              </div>
              <div className="profile-cards-uppr">
              
          
              </div>

            
            </div>
            <div className="image-div-user">
              <img src={otheruser.userprofile} alt="youareuser" />
            </div>
    
          </div>
    
          {/* //====Posts===== */}
          <div className="bottom-user">
           
          {
            otherpost.length < 1 ? <p>No Posts</p> :
            otherpost.map((curr , index)=>{
              return  <div className="bottom-user-card">
              <img src= {curr.postimage} alt="post" />
            </div>
            })
          }
          </div>
        </div>
            </div>
            <div className="profile-right"></div>
            <Ranking/>
          </div>
        </div>
      )
}

export default Otheruser
