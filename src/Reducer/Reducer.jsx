
function reducer(state,action){
    if(action.type==="increase"){
        return state+1
    }

    if(action.type==="decrease"){
        return state-1
    }
}

export default reducer