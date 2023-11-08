import React, { useContext, useState } from 'react'
import "./Assigntaskmodal.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import {  faImage  } from '@fortawesome/free-regular-svg-icons'
import axios from 'axios'
import { Taskcontext } from '../../../contexts/Taskcontext'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Assigntaskmodal = ({close}) => {

  const {AssingTask} = useContext(Taskcontext);
  const [taskTitle, settaskTitle] = useState("");
  const [taskDetail, settaskDetail] = useState("");
  const [taskGuidlines, settaskGuidlines] = useState("");
  const [taskrefImage, settaskrefImage] = useState(null);
  const [tasklevel, settasklevel] = useState("easy");
  const handleAssignTask = async()=>{
    close();
    if(taskrefImage!=null){
      toast.info('Task Submitting..🔥', {
        position: "top-right",
        theme: "dark",
        });
      let formdata = new FormData();
      formdata.append("file" , taskrefImage[0]);
      formdata.append("upload_preset" , "qouutdij");
      axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formdata , {
          onDownloadProgress:(ProgressEvent)=>{
            console.log("Uploading..." ,Math.round( ProgressEvent.loaded/ProgressEvent.total));
          }
      }).then(response=>{
          console.log(response.data.url);
          AssingTask(taskTitle , taskDetail , taskGuidlines , response.data.url , tasklevel);
          toast.success("Task Assigned" , {
            theme:"dark"
          })
          
      });
     }
     else{
      alert("Please Select Image");
     }
    
  }
  
  return (
    <>
    <div onClick={close} className="close-admin-task-modal"></div>
    <div className="assing-task-main">
        <h1>Assign Weekly Task 🔔</h1>
        <input onChange={(e)=>{
          settaskTitle(e.target.value);
        }} className='task-title' type="text" placeholder='Tast Title' />
        <input onChange={(e)=>{
          settaskDetail(e.target.value)
        }} className='taskdetail' type="text" placeholder='Tast Details' />
        <input onChange={(e)=>{
          settaskGuidlines(e.target.value)
        }} className='taskdetail' type="text" placeholder='Tast Guidlines' />
        <div onClick={()=>{
          document.querySelector(".refimage").click();
        }} className="image">
          
        <FontAwesomeIcon icon={faImage} size='xl' color='#212121;' />
        <input type="file" hidden className='refimage' onChange={(e)=>{
          settaskrefImage(e.target.files);
        }} />
        <p>Upload Refrence Image</p>
        </div>

       <div className="dropdown">
        <select onChange={(e)=>{
          settasklevel(e.target.value);
        }} >
          <option value="Easy">Easy🍀</option>
          <option value="Medium">Medium💡</option>
          <option value="Hard">Hard 🚀</option>
        </select>
       </div>

        <div onClick={()=>{
         handleAssignTask();
        }}  className="assing-task-button">
          <p>Assign</p>
        </div>

    </div>
    <ToastContainer
      autoClose={1000}
      limit={1} />
    </>
  )
}

export default Assigntaskmodal