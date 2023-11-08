import axios from "axios";
import rankingReducer from "./reducers/rankingreducer";
const { createContext, useReducer, useEffect } = require("react");

const rankingContext = createContext();


const initialState = {
    isLoading:false,
    ranking:[]
}
const RankingProvider = ({children})=>{
    const [state, dispatch] = useReducer(rankingReducer , initialState);

    const getRanking = async ()=>{
        dispatch({type:"API_LOADING"});
        try {
            const token = localStorage.getItem("x-auth-token");
            const axiosconfig = {
                headers:{
                  "Accept":"application/json",
                  "x-auth-token":token
                }
              }

              const response = await axios.get("http://localhost:5000/get-ranking" , axiosconfig);
              dispatch({type:"SET_API_DATA" , payload:response.data});
              console.log(response.data);
            
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(()=>{
        getRanking();
    } , [])
    
    return <rankingContext.Provider value={{...state}}>{children}</rankingContext.Provider>
}

export {rankingContext , RankingProvider};