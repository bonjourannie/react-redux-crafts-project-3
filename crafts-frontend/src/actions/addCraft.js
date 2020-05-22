export const addCraft = (formData) => {

    return(dispatch) => {
        fetch('http://localhost:3001/crafts', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(craft => dispatch({type: 'ADD_CRAFT', payload: craft}))
    }
 

}
//formData comes from setState & state
//will dispatch info to reducer, can use dispatch because of thunk
//post request requires object being passed in as 2nd object
//headers tells it we're sending json, method tells it what type of request 
//body stringifys craft object so it can be sent over server as string (instead of object)
//.then statements show new crafts immediately, send it to reducer w/o re-rendere
//2nd .then, we get the data & dispatch it - must pass in action type
//updates store with payload