const responseReducer = (state , action)=>{
    switch (action.type) {
        case "API_LOADING":
            return{
                ...state,
                isLoading:true,
            }
        case "SET_API_DATA":
            return{
                ...state,
                isLoading:false,
                Taskresponse:action.payload
            }
            
    
        default:
            break;
    }
}

export default responseReducer;