import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "./reducers/userReducer"

const authContext = createContext();

const initialState = {
    isLoading:false,
    isError:false,
    user:{

    }
}


const AuthProvider = ({children})=>{

    const [state, dispatch] = useReducer(reducer, initialState);
    

    const Register = async (username , email , password)=>{
        
        console.log(username , email , password);
        try {
            const bodyPara = {
                username:username,
                email:email,
                password:password
            };

            const axiosheader = {
                headers:{
                    "Accept":"application/json",
                }
            }
            const response = await axios.post("https://planet-pulse-bphm.onrender.com/register" , bodyPara , axiosheader);
            console.log(response.data);

            return response.status;
        
        } catch (err) {
           console.log(err); 
        }

    }


    const login = async (username , password)=>{
        try {
            const bodyPara = {
                username:username,
                password:password
            };

            const axiosheader = {
                headers:{
                    "Accept":"application/json",
                }
            }
            const response = await axios.post("https://planet-pulse-bphm.onrender.com/login",bodyPara , axiosheader );
            localStorage.setItem("x-auth-token" , response.data.token);
            return response.status;
            
        } catch (error) {
            console.log(error);
        }

    }

    

    const GetCurruser = async ()=>{
        try {
            dispatch({type:"API_LOADING"})
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":localStorage.getItem("x-auth-token")
                }
              }
            const response = await axios.get("https://planet-pulse-bphm.onrender.com/get-curr-user" , axiosconfig );
            const value = await response.data;
            dispatch({type:"SET_API_DATA" , payload:value});

        } catch (error) {
            console.log(error);
            dispatch({type:"SET_API_ERROR"});
        }
    }


    const proPlanetverification = async(question , quesImage)=>{
        
        try {
            const bodyParameter = {
                question:question,
                quesImage:quesImage
            }
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":localStorage.getItem("x-auth-token")
                }
              }


                const response = await axios.post("https://planet-pulse-bphm.onrender.com/post-ques" ,bodyParameter , axiosconfig );
                console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        GetCurruser();
    } , []);

    return <authContext.Provider value={{...state,Register , login , GetCurruser , proPlanetverification}}>{children}</authContext.Provider>
}

export {authContext , AuthProvider};