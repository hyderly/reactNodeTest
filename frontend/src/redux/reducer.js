export const sumReducer = (state = {sum: ''}, action) =>{
    switch(action.type){
        case 'Sum_Success':
            return{
                sum: action.payload,
                success: "true"
            }

        case 'Sum_Fail':
            return{
                ...state,
                error: action.payload
            }

        default :
            return state;
    }
}