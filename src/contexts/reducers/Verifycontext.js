import axios from "axios";
import appliedReducer from "./appliedreducer";

const { createContext, useReducer, useEffect } = require("react");

const VerifyContext = createContext();
const initialState = {
    isLoading:false,
    applieduser:[],
    isError:false
}

const VerifyProvider = ({children}) =>{

    const [state, dispatch] = useReducer(appliedReducer , initialState);
    const GetAppliedUser = async ()=>{
        const token = localStorage.getItem("x-auth-token");
        try {
            dispatch({type:"APPROVE_API_LOADING"})
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }
            const response = await axios.get("https://pro-planet-server.onrender.com/get-users-only" , axiosconfig );
            const allVal = await response.data;
            dispatch({type:"APPROVE_SET_API_DATA" ,payload:allVal});
             
        } catch (error) {
            dispatch({type:"APPROVE_API_ERROR"});
            console.log(error);
        }
    }



    const ApprovaltoProPlanetverification = async (id , postid)=>{
        try {
            const token = localStorage.getItem("x-auth-token");
            const bodyParame = {
                id:id,
                postid:postid
            }
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }


            const response = await axios.post("https://pro-planet-server.onrender.com/approve-verify-req" , bodyParame , axiosconfig );
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


    useEffect(()=>{
        GetAppliedUser();
    } , [])
    return <VerifyContext.Provider value={{...state,GetAppliedUser , ApprovaltoProPlanetverification}}>{children}</VerifyContext.Provider>
}

export {VerifyContext , VerifyProvider};