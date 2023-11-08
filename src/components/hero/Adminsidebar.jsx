import React, { useContext, useState } from 'react'
import "./Userhomehero.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {faCloud, faHome, faSignOut, faTasks , faCheck , faBarcode} from '@fortawesome/free-solid-svg-icons'
import { authContext } from '../../contexts/Authcontext'
import Assigntaskmodal from '../Modals/Task/Assigntaskmodal'
import { useNavigate } from 'react-router'
const Adminsidebar = () => {
  const navigate = useNavigate();
const [TaskModal, setTaskModal] = useState(false);

  const closeTaskModal = ()=>{
    setTaskModal(false);
  } 

    
  const {user} = useContext(authContext);
  return (
    <>
    <div className="ush-left">
            <div className="ush-left-first">
                <img src= {user.userprofile} alt="useimage" />
                <p> Hellow, <span>{user.username}!</span> </p>
            </div>
            <div className="ush-left-border"></div>

            <div className="ush-left-buttons">
                <div onClick={()=>{
                  navigate("/Adminhome")
                }} className="ush-left-nav">
                <FontAwesomeIcon icon={faHome} size='lg' color='blue' />
                <p>Home</p>
                </div>
                <div className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faTasks} size='lg' color='red' />
                <p onClick={()=>{
                  setTaskModal(true);
                }}>Assign Weekly Task</p>
                
                </div>
                <div onClick={()=>{
                  navigate("/Approvetask")
                }} className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faCheck} size='lg' color='green' />
                <p>Approve Task Submission</p>
                </div>
                <div onClick={()=>{
                  navigate("/Approve")
                }} className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faBarcode} size='lg' color='orange' />
                <p>Pro Planet Verification</p>
                </div>
               
                <div onClick={()=>{
                  navigate("/Admintask")
                }} className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faCloud} size='lg' color='violet' />
                <p>Tasks</p>
                </div>
                <div className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faSignOut} size='lg' color='indigo' />
                <p>Logout Now</p>
                </div>
            </div>
        </div>
        {
                  TaskModal!==false ? <Assigntaskmodal close={closeTaskModal} /> :<p></p>
                }
    </>
  )
}

export default Adminsidebar