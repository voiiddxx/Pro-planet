import React, { useContext, useEffect, useState } from 'react'
import "./Viewtask.css"
import taskData from "./task.svg"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faImage  } from '@fortawesome/free-regular-svg-icons'
import { Taskcontext } from '../../../contexts/Taskcontext'
import { authContext } from '../../../contexts/Authcontext'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Viewtask = ( {close , tasklevel}) => {
    
    const {user} = useContext(authContext);
    const [ResponseImage, setResponseImage] = useState(null);
    const {SpecificCategorytask} = useContext(Taskcontext);
    const [responseDetail, setresponseDetail] = useState("");
    

    useEffect(()=>{
        SpecificCategorytask(tasklevel);
    }, []);
    const {task , submitTaskreponse} = useContext(Taskcontext);

    const SubmitForm = async ()=>{
        close();
        try {

            if(ResponseImage!=null){
                toast.info('Task Submitting..🔥', {
                    position: "top-right",
                    theme: "dark",
                    });

                let formdata = new FormData();
                formdata.append("file" , ResponseImage[0]);
                formdata.append("upload_preset" , "qouutdij");
                axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formdata , {
                    onDownloadProgress:(ProgressEvent)=>{
                      console.log("Uploading..." ,Math.round( ProgressEvent.loaded/ProgressEvent.total));
                    }
                }).then(response=>{
                    console.log(response.data.url);
                    submitTaskreponse(user, task , response.data.url , responseDetail);
                    toast.success("Task Submitted" , {
                        theme:"dark"
                    });

                    setResponseImage(null);
                });
               }
               else{
                toast.error("Please Select Image" , {
                    theme:"dark"
                });

               }
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
    <div onClick={close} className="task-close"></div>
        <div className="task-container">
            <div className="task-left-view">
                <img src={taskData} alt="taskveryfyimage" />
            </div>
            <div className="task-right-view">
                <h1>Task: <span>{task.task_title}</span></h1>
                <p> {task.task_detail}</p>
                <h2>Guidlines</h2>
                <p>{task.task_guidlines}</p>
                <h3>Refrence Image For Task Submission</h3>
                <img src={task.task_image} alt="task-image-refrence" className="task-image-refrence" />
                <div className="submission">
                    <h1>Submit Weekly Task</h1>
                    <div className="task-imagesubmit">
                        <input onChange={(e)=>{
                            setResponseImage(e.target.files);
                        }} type="file" className='responseimage' hidden />
                        <div onClick={()=>{
                            document.querySelector(".responseimage").click();
                        }} className="uplod">
                        <FontAwesomeIcon icon={faImage} size='2xl' color='white' />
                        {
                            ResponseImage!=null ? <p>Image Selected 📸</p> :<p>Upload Image For Task Submission</p>
                        }
                        </div>
                    </div>

                    <input onChange={(e)=>{
                        setresponseDetail(e.target.value);
                    }} type="text" className="task-detail" placeholder='Task Additiniols Details' />

                    <div onClick={SubmitForm} className="task-button">
                        <p>Submit</p>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer
      autoClose={1000}
      limit={1} />
    
    </>
  )
}

export default Viewtask