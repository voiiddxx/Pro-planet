const postReducer = (state , action)=>{
    switch (action.type) {
        case "POST_API_LOADING":
            return {
                ...state,
                isLoading:true,
            }
            
        case "POST_API_SET_DATA":
            return {
                ...state,
                isLoading:false,
                posts:action.payload
            }
            case "SET_USER_POST_DATA":
                return {
                    ...state,
                    isLoading:false,
                    userpost:action.payload
                }
            case "SPECIFIC_SET_DATA_POST":
                return {
                    ...state,
                    isLoading:false,
                    otherpost:action.payload
                }
       
            case "SPECIFIC_SET_DATA":
                return {
                    ...state,
                    isLoading:false,
                    otheruser:action.payload
                }
       
            
        case "POST_API_ERROR":
            return {
                ...state,
                isLoading:false,
                isError:true
            }
            
    
        default:
            return state;
    }
}

export default postReducer;