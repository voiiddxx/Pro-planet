import React, {  useContext, useEffect, useState } from 'react'
import "./Approvemain.css"
import Adminsidebar from '../components/hero/Adminsidebar'
import Usernav from '../components/Nav/Usernav'
import {useLocation} from 'react-router-dom';
import "../components/Verifyquestion/Ques.css"
import axios from 'axios';
import { VerifyContext } from '../contexts/reducers/Verifycontext';
import { reponseContext } from '../contexts/Responsecontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ranking from '../Ranking/Ranking';

const Approvemain = () => {
  const location = useLocation();
  const [UserQuestions, setUserQuestions] = useState([]);
  const {declineProplanetreq} = useContext(reponseContext);

  //  APECIFIC USER CONTEXT
   const specificUser = async ()=>{
    try {
        const token = localStorage.getItem("x-auth-token");
        const axiosconfig = {
            headers:{
              "Accept":"application/json",
              "x-auth-token":token
            }
             
          }
        const response = await axios.get("https://pro-planet-server.onrender.com/get-specific-user?username="+location.state.userData.username , axiosconfig );
        setUserQuestions(response.data.ques);

    } catch (error) {
        console.log(error);
    }
}
useEffect(()=>{
  specificUser();
},[])

////=-====-=-=--=-==//


//=====approval integreation ===//
const {ApprovaltoProPlanetverification}= useContext(VerifyContext);




  
  return (
    <>
    <div className="question-main">
        <Usernav/>
        <div className="question-main-content">
            <div className="left">
        <Adminsidebar/></div> 
           <div className="mid">
            <div className="mid-upper">
              <img className='applied-user-image-main' src= {location.state.userData.userprofile}alt="applieduserimagecard" />
             <div className="ques-upper-text-detail">
             <h1>{location.state.userData.username}</h1>
             <p>{location.state.userData.email}</p>
             </div>
              <br />
              
              
            </div>
            
{/*==================================================  */}
<div  className="ques-list">
  {
    UserQuestions.length!=0 ? 
    UserQuestions.map((curr , index)=>{
      return  <div  className="ques-card">
      <div className="ques-image">
          <img src={curr.quesImage}  className='ques-image-card'  alt="quesimage" />
      </div>
      <div className="ques-text">
          <h1> <span>Title:</span> {curr.question}</h1>
          <p >  <span>Location</span> Baba farid Group of Institution </p>
          <p className='detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sequi labore corrupti perspiciatis quos explicabo, quasi temporibus molestiae iusto nesciunt!</p>
    
          <div className="ques-button">
              <div className="button-one">
                
                  <p onClick={()=>{
                    toast.info("Please Wait" , {
                      theme:"dark"
                    })
                    ApprovaltoProPlanetverification(location.state.userData._id , curr._id);
                  
                  }}>Approve</p>
              </div>
              <div onClick={()=>{
                 toast.info("Please Wait" , {
                  theme:"dark"
                })
                declineProplanetreq(location.state.userData._id , curr._id);
              }} className="button-two">
                  <p>Decline</p>
              </div>
          </div>
      </div>
    </div>
    })
     : <p>there is no data</p>
  }
</div>
           </div>
           <div className="right">
            <Ranking/>
           </div>
        </div>
    </div>
    <ToastContainer
      autoClose={1000}
      limit={1} />
    </>
  )
}

export default Approvemain

