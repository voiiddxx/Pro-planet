import React, { useContext, useState } from 'react'
import "./verifymodal.css"
import axios from "axios";
import { authContext } from '../../../contexts/Authcontext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Verifymodal = ({close}) => {
    const {proPlanetverification} = useContext(authContext);
    const [question, setquestion] = useState("");
    const [Image, setImage] = useState(null)
    

    //=====UPLOADING IMAGE ON CLOUDINARY AND GETTING THE IMAGE URL====//
    const handleImage = ()=>{

        if(Image!=null){
            toast.info("Please Wait..💡" , {
                theme:"dark"
            });

            let formdata = new FormData();
        formdata.append("file" , Image[0]);
        formdata.append("upload_preset" , "qouutdij");


        axios.post("https://api.cloudinary.com/v1_1/dwkmxsthr/upload" , formdata , {
            onDownloadProgress:(ProgressEvent)=>{
                
              console.log("Uploading..." ,Math.round( ProgressEvent.loaded/ProgressEvent.total));
            }
        }).then(response=>{
            console.log(response.data.url);
            proPlanetverification(question , response.data.url);
            toast.success("Sent For Approval" , {
                theme:"dark"
            })

        })
        } else{
            toast.error("Please Select Image" , {
                theme:"dark"
            })
        }
        
    }



    // API CONNECTION FOR VERIFYING THE QUESTION //

    const VerifyNow =async ()=>{
       handleImage();
        }


      
    
  return (
    <>
    <div onClick={close} className="verify-modal-main"></div>
        <div className="verify-main">
            <h1>Pro Planet Verification 🚀</h1>
            <p><span>Note</span>
            <br />
            1. In Case if You Found Uploading Fake Images, Then  Strict Action Will be taken
            <br />
            2. Uploaded Images Must Have Geo tag
            </p>

            
            {/* ============================================================ */}
            <div className="question">
                <input className='ques1' type="file" hidden onChange={(e)=>{
                    setImage(e.target.files);
                    setquestion("Solar Avaibility");
                
                }} />
                <h2>💡Step I</h2>
                <h3>Any Renewable/Solay Energy</h3>
                <p>To Clear This Step if You Use Any kind of renewable source of energy to reduce the electricity then click a picture and upload on the server</p>

                <div className="result">
                    <p onClick={()=>{
                        document.querySelector(".ques1").click()
                    }}>Select Image</p>
                    <p onClick={()=>{
                        VerifyNow();
                    }} >Upload</p>
                   
                </div>
                <div className="result-border"></div>
            </div>
            
            {/* ============================================================ */}
            <div className="question">
                <input type="file" hidden className='image-ques2' onChange={(e)=>{
                    setImage(e.target.files);
                    setquestion("Green House")
                    
                
                }} />
                <h2>💡Step II</h2>
                <h3>Green House</h3>
                <p>If Your House is Equiped With more than 4 plants then click the picture with geo tag and upload on the server</p>
                
                <div className="result">
                    <p onClick={()=>{
                        document.querySelector(".image-ques2").click()
                    }}>Select Image</p>
                    <p onClick={VerifyNow}>Upload</p>
                 
                </div>
                <div className="result-border"></div>
            </div>


            
            {/* ============================================================ */}
            <div className="question">
                <input className='ques3' type="file" hidden onChange={(e)=>{
                    setImage(e.target.files);
                    setquestion("Electric Vehicle Avaibility")
                
                }} />
                <h2>💡Step III</h2>
                <h3>Electric Vehicle</h3>
                <p>To Clear This Step if You have electirc vehicle then click picture wiht geo tag and upload on the server</p>
                <div className="result">
                    <p onClick={()=>{
                        document.querySelector(".ques3").click()
                    }} >Select Image</p>
                    <p onClick={VerifyNow}>Upload</p>
                </div>
                <div className="result-border"></div>
            </div>
            
            {/* ============================================================ */}
            <div className="question">
                <input className='ques4' type="file" hidden onChange={(e)=>{
                    setImage(e.target.files);
                    setquestion("Garbage Sepreate Collector");
                    
                
                }} />
                <h2>💡Step IV</h2>
                <h3>Garbage Collection</h3>
                <p>if You Use Sepreate Dustbit for wet garbage and dry garbage then click picture and upload on the server</p>
                <div className="result">
                    <p onClick={()=>{
                        document.querySelector(".ques4").click()
                    }} >Select Image</p>
                    <p onClick={VerifyNow} >Upload</p>
                </div>
                <div className="result-border"></div>
            </div>
            {/* ============================================================ */}           
            <div className="question">
                <input type="file" className='ques5' hidden onChange={(e)=>{
                    setImage(e.target.files);
                    setquestion("Eco Friendly Activity");                    
                
                }} />
                <h2>💡Step V</h2>
                <h3>Eco Friendly</h3>
                <p>In the case if you use any other facility which lead to eco frindly then click picture and upload on the server</p>
                <div className="result">
                    <p onClick={()=>{
                        document.querySelector(".ques5").click()
                    }}>Select Image</p>
                    <p onClick={VerifyNow}>Upload</p>
                </div>
                <div className="result-border"></div>
            </div>

           
        </div>
        <ToastContainer
      autoClose={1000}
      limit={1} />
    </>
  )
}

export default Verifymodal