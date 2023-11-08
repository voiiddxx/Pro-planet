import React, { useContext, useEffect } from 'react'
import "./Admintask.css"
import Adminsidebar from '../components/hero/Adminsidebar'
import Ranking from '../Ranking/Ranking'
import Usernav from '../components/Nav/Usernav'
import {  faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { Taskcontext } from '../contexts/Taskcontext'

const Admintask = () => {

    const {getAllTask , deleteSpecifictask} = useContext(Taskcontext);
    useEffect(()=>{
        getAllTask();
    } , []);

    const deleteadminTask = async (taskid)=>{
       const value = await deleteSpecifictask(taskid);
       console.log("the value " , value);
    }

    const {alltask} = useContext(Taskcontext);
    console.log(alltask);
  return ( 
    <div className="admin-task-main-background">
        <Usernav/>
        <div className="admin-task-main">
            <div className="admin-task-left">
                <Adminsidebar/>
            </div>
            <div className="admin-task-mid">
            <h1 className="admin-task-heading">
            Assigned Tasks
        </h1>
      {
        alltask.length >= 1 ? alltask.map((curr , index)=>{
            return   <div className="admin-task-card">
            <div className="admin-card-task-image">
                <img src={curr.task_image} alt="admintaskimage" />
            </div>
            <div className="admin-task-card-text">
                <h1> {curr.task_title}</h1>
                <p>{curr.task_detail}</p>
            </div>
            <div onClick={()=>{
                deleteadminTask(curr._id);            }} className="admin-task-card-button">
            <FontAwesomeIcon icon={faTrash} size='lg' color='white' />
            </div>
        </div>
        }) : <h1>There is no weekly task available</h1>
      }
        

        
            </div>
            <div className="admin-task-right">
                <Ranking/>
            </div>
        </div>
    </div>
  )
}

export default Admintask


