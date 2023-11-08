const userReducer = (state , action)=>{
    switch(action.type){
        case "API_LOADING":
            return {
                ...state,
                isLoading:true,
            }
        case "SET_API_DATA":
            return {
                ...state,
                isLoading:false,
                user:action.payload
            }
      
        case "API_ERROR":
            return {
                ...state,
                isError:true,
                
            }    
    }
}

export default userReducer;