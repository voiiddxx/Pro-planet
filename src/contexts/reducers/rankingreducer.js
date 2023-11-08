const rankingReducer = (state , action)=>{
    switch (action.type) {
        case "API_LOADING":
            return {
                ...state,
                isLoading:true
            }
        case "SET_API_DATA":
            return {
                ...state,
                isLoading:false,
                ranking:action.payload
            }
            
    
        default:
            return state;
    }
}
export default rankingReducer;