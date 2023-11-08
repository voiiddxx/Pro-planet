const appliedReducer = ( state , action)=>{
    switch (action.type) {
        case "APPROVE_API_LOADING":
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        case "APPROVE_SET_API_DATA":
            return{
                ...state,
                isLoading:false,
                applieduser:action.payload,
            }
        case "APPROVE_API_ERROR":
            return {
                ...state,
                isError:true,
                isLoading:false
            }
    
        default:
            return state;
    }
}

export default appliedReducer;