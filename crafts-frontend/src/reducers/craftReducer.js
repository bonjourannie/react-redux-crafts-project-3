//responsible for updating the part of store related to crafts
//every time I dispatch action, update state based on that action
//whatever is returned from reducer is new redux state 
//crafts array now points to array that came back from fetch request
export default function craftReducer (state = {crafts: []}, action){
    // debugger;
    switch(action.type){
        case 'FETCH_CRAFTS':
            return {crafts: action.payload}
        case 'ADD_CRAFT':
            return {...state, crafts: [...state.crafts, action.payload]}
    default:
        return state
    }

}

//ADD_CRAFT add new craft w action.payload
//spread operator gives previous state w/o changing it