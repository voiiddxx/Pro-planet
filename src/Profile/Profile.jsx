import React, { useContext } from 'react'
import "./Profile.css"
import Usernav from '../components/Nav/Usernav'
import Sidebar from '../components/hero/Sidebar';
import { userContext } from '../contexts/Usercontext';
import { authContext } from '../contexts/Authcontext';
import Ranking from '../Ranking/Ranking';
const Profile = () => {

  const {user} = useContext(authContext);
  const {userpost} = useContext(userContext);
  console.log("this is ",userpost);
  console.log(localStorage.getItem("x-auth-token"));
  return (
    <div className="profile">
      <Usernav/>

      <div className="profile-main-content">
        <div className="profile-left"><Sidebar/></div>
        <div className="profile-mid-th">
    <div className="prodile-upper">
      <div className="upper-user">
        <div className="user-text">
          <h1 onClick={()=>{
            console.log(user?.pro_planet_level);
          }} > {user?.username}<span> Pro Planet Level  {user?.pro_planet_level} </span> </h1>
          <p>{user?.email}</p>

          <div className="profile-cards-uppr">
          <div className="rating-container">
            <p>Your Rating: {user?.pro_planet_rating}</p>
          </div>
          <div className="rating-container">
            <p>Total Completed task : {user?.total_completed_task}</p>
          </div>
          </div>
          <div className="profile-cards-uppr">
         
          
          </div>
        </div>
        <div className="image-div-user">
          <img src={user?.userprofile} alt="youareuser" />
        </div>

      </div>

      {/* //====Posts===== */}
      <div className="bottom-user">
       
      {
        userpost.length < 1 ? <div className="post-loading">
          <p>There is no post available 🍀</p>
        </div> :
        userpost.map((curr , index)=>{
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

export default Profile