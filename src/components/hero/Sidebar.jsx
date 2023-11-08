import React, { useContext, useState } from 'react'
import "./Userhomehero.css"
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faIdBadge,faUser  } from '@fortawesome/free-regular-svg-icons'
import {faCloud, faHome, faRankingStar, faSignOut, faTasks} from '@fortawesome/free-solid-svg-icons'
import { authContext } from '../../contexts/Authcontext'
import { useNavigate } from 'react-router'
import { userContext } from '../../contexts/Usercontext'
import axios from 'axios'
import Verifymodal from '../Modals/Verify/Verifymodal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = () => {
    
  const {user} = useContext(authContext);
  const navigate = useNavigate();
  const [imagetoupdate, setimagetoupdate] = useState(null);
  const {updateImage} = useContext(userContext);

  const [VerifyMoadlselect, setVerifyMoadlselect] = useState(false);
  


  const [ImageModal, setImageModal] = useState(false);

  const handleimage = ()=>{
    setImageModal(false);
    toast.info('Profile Updating..🔥', {
      position: "top-right",
      theme: "dark",
      });
    if(imagetoupdate!=null){
      let formdata = new FormData();
      formdata.append("file" , imagetoupdate[0]);
      formdata.append("upload_preset" , "qouutdij");
      axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formdata , {
          onDownloadProgress:(ProgressEvent)=>{
            console.log("Uploading..." ,Math.round( ProgressEvent.loaded/ProgressEvent.total));
          }
      }).then(response=>{
          updateImage(response.data.url);
          toast.success("Updated" , {
            theme:"colored"
          });
          
      });
     }
     else{
      toast.info("Please Select Image" , {
        theme:"colored"
      });
     }
     setimagetoupdate(null);
     
  }


  const closemodal = ()=>{
    setVerifyMoadlselect(false);
  }

  return (
    <>
    <div className="ush-left">
            <div className="ush-left-first">
                <img onClick={()=>{
                  setImageModal(true);
                 
                }} src= {user?.userprofile} alt="useimage" />
                <p> Hellow, <span>{user.username}</span></p>
              
            </div>
            <div className="ush-left-border"></div>

            <div className="ush-left-buttons">
                <div onClick={()=>{
                  navigate("/Userhome")
                }} className="ush-left-nav">
                <FontAwesomeIcon icon={faHome} size='lg' color='blue' />
                <p>Home</p>
                </div>
               
                <div onClick={()=>{
                  navigate("/Profile")
                }} className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faUser} size='lg' color='orange' />
                <p>Profile</p>
                </div>
                <div onClick={()=>{
                  navigate("/Task")
                }} className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faTasks} size='lg' color='red' />
                <p>Weekly Tasks</p>
                </div>
                <div onClick={()=>{
                  setVerifyMoadlselect(true);
                }} className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faIdBadge} size='lg' color='green' />
                <p>Pro Person verification</p>
                </div>
                <div className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faCloud} size='lg' color='violet' />
                <p>About Us</p>
                </div>
                <div onClick={()=>{
                  localStorage.removeItem("x-auth-token");
                  navigate("/Login");
                }} className="ush-left-nav-regular">
                <FontAwesomeIcon icon={faSignOut} size='lg' color='black' />
                <p>Logout Now</p>
                </div>
            </div>
        </div>


        {
          ImageModal!==false ? <div className="image-div">
            <div className="image-container">
              <h1>Update Image💡</h1>
          <input onChange={(e)=>{
            setimagetoupdate(e.target.files);
          }} type="file" hidden className='image-upload-input' />
              <div onClick={()=>{
                document.querySelector(".image-upload-input").click();
              }} className="image-input">
                {
                  imagetoupdate!=null ? <p>Image Selected Successfully📸</p> : <p>Select Image 📸</p>
                }
              </div>
              <div onClick={handleimage} className="image-button-upload">
              
                <p>Update</p>
              </div>
              <div onClick={()=>{
                setImageModal(false)
              }} className="close-button">
                <p>Close</p>
              </div>
              
            </div>
          </div> : <div></div>
        }
        {
          VerifyMoadlselect!==false ? <Verifymodal close={closemodal}/> : <div></div>
        }
         <ToastContainer
      autoClose={1000}
      limit={1} />
    </>
  )
}

export default Sidebar