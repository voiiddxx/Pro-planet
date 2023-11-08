import axios from "axios";
import postreducer from "../contexts/reducers/postreducer"

const { createContext, useReducer, useEffect } = require("react");

const userContext = createContext();

const initialState ={
    isPostLoading:false,
    isPostError:false,
    posts:[],
    userpost:[],
    otheruser:[],
    otherpost:[]
}

const UserProvider = ({children})=>{

    

    const [state, dispatch] = useReducer(postreducer, initialState);

    const AddPostNow =async (title , postimage)=>{
        const token = localStorage.getItem("x-auth-token");
        try {
            const bodyParameter = {
                title:title,
                postimage:postimage
            }
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }
            const response = await axios.post("https://planet-pulse-bphm.onrender.com/post" , bodyParameter ,axiosconfig);
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


    const GettingallPost = async ()=>{
        try {
            dispatch({type:"POST_API_LOADING"});
            const token = localStorage.getItem("x-auth-token");
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }
            const response = await axios.get("https://planet-pulse-bphm.onrender.com/get-all-post" , axiosconfig );
            const PostData = await response.data;
            dispatch({type:"POST_API_SET_DATA" , payload:PostData});
        } catch (error) {
            console.log(error);
        }
    }


    // APECIFIC USER CONTEXT
    const specificUser = async (username)=>{
        try {
            const token = localStorage.getItem("x-auth-token");
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }
            const response = await axios.get("https://planet-pulse-bphm.onrender.com/get-specific-user?username="+username , axiosconfig );
            console.log(response.data);
            dispatch({type:"SPECIFIC_SET_DATA" , payload:response.data});

        } catch (error) {
            console.log(error);
        }
    }

    // GET OTHER USER POST
     const getOtheruserpost = async (username)=>{
        try {
            const token = localStorage.getItem("x-auth-token");
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }
            const response = await axios.get("https://planet-pulse-bphm.onrender.com/specific-user-post?username="+username , axiosconfig );
            dispatch({type:"SPECIFIC_SET_DATA_POST" , payload:response.data});

        } catch (error) {
            console.log(error);
        }
     }


    const gettinSepcificUserPost =  async()=>{
        try {
            const token = localStorage.getItem("x-auth-token");
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }
              const response = await axios.get("https://planet-pulse-bphm.onrender.com/get-user-post" , axiosconfig);
              dispatch({type:"SET_USER_POST_DATA" ,payload:response.data});

        } catch (error) {
            console.log(error);
        }
    }



    // UPDATING THE USER IMAGE

    const updateImage = async(userprofile)=>{
        try {
            const token = localStorage.getItem("x-auth-token");
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }
              const bodyPara = {
                userprofile:userprofile
              }
              const response = await axios.patch("https://planet-pulse-bphm.onrender.com/update-profile" , bodyPara , axiosconfig);
              if(response.status===200){
                window.location.reload();
              }
              

        } catch (error) {
            console.log(error);
        }
    }
    
    useEffect(()=>{
        gettinSepcificUserPost();
    } , []);


    
    return <userContext.Provider value={{...state, AddPostNow , GettingallPost , gettinSepcificUserPost , specificUser , updateImage , getOtheruserpost}}>{children}</userContext.Provider>
}

export {userContext , UserProvider};