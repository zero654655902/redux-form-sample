export const printValuesReducer=(state=["www"],action)=>{
    switch (action.type){
        case "SUBMIT":
        {
            console.log('4')
            console.log(action.values)
           return state
        }
        default :
            return state

    }
}