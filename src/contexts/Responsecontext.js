import axios from "axios";
import { createContext, useReducer } from "react";
import responseReducer from "./reducers/responsereducer";


const reponseContext = createContext();

const initialState = {
    isLoading:false,
    Taskresponse : []
}

const ResponseProvider = ({children})=>{

    const [state, dispatch] = useReducer(responseReducer , initialState);
    

    const getResponseData = async ()=>{
        try {
            dispatch({type:"API_LOADING"});
                const token = localStorage.getItem("x-auth-token");
                const axiosconfig = {
                    headers:{
                      "Accept":"application/json",
                      "x-auth-token":token
                    }
                  }
                const reponse = await axios.get("https://pro-planet-server.onrender.com/get-responses" , axiosconfig);
                console.log(reponse.data);
                dispatch({type:"SET_API_DATA" , payload:reponse.data});

        } catch (error) {
            console.log(error);
        }
    }


    const ApproveResponse = async (userid , task_level ,submitid)=>{
        try {
            const token = localStorage.getItem("x-auth-token");
            const reponseBodyparamter = {
                userid:userid,
                task_level:task_level,
                submitid:submitid
            }
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }

              const response = await axios.post("http://localhost:5000/approve-weekly-task" , reponseBodyparamter , axiosconfig);
              if(response.status===200){
                window.location.reload();
              }
              else{
                alert("Some Error")
              }

        } catch (error) {
            console.log(error);
        }
    }


    // DECLINE WEEKLY TASK RESPONSE 
    const declineWeeklyResponse = async (submitid) =>{
        try {
            const token = localStorage.getItem("x-auth-token");
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }
              const bodyPara = {
                submitid:submitid
              }

              const response = await axios.post("https://pro-planet-server.onrender.com/decline-req" , bodyPara , axiosconfig);
              if(response.status===200){
                window.location.reload();
              }else{
                alert("Some Error")
              }
            
        } catch (error) {
            console.log(error);
        }
    }


    // DECLINE PRO PLANET VERIFY REQ

    const declineProplanetreq = async (id , postid)=>{
      try {
        const bodyPara ={
          id:id,
          postid:postid
        }
        const token = localStorage.getItem("x-auth-token");
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }

              const response = await axios.post("https://pro-planet-server.onrender.com/decline-pro-planet-req" , bodyPara , axiosconfig);
              if(response.status===200){
                window.location.reload();
            }
            else{
                alert("Some Error");
            }
      } catch (error) {
        console.log(error);
      }
    }
    return <reponseContext.Provider value={{...state , getResponseData , ApproveResponse, declineWeeklyResponse , declineProplanetreq}}>{children}</reponseContext.Provider>
}

export {ResponseProvider , reponseContext};