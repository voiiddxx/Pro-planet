const taskReducer = (state , action)=>{
    switch (action.type) {
        case "API_LOADING":
            return {
                ...state,
                isLoading:true,
            }
        case "SET_API_DATA":
            return {
                ...state,
                isLoading:false,
                task:action.payload
            }
        case "ALL_task_loading":{
            return {
                ...state,
                isAllTaskLoading:true,
            }
        }
        case "ALL_TASK_SET_DATA":{
            return {
                ...state,
                isAllTaskLoading:false,
                alltask:action.payload
            }
        }
            
            
    
        default:
            return state;
    }
}

export default taskReducer;