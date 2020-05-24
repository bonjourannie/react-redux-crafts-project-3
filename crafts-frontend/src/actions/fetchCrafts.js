
export function fetchCrafts(){
    return (dispatch) => {
        fetch('http://localhost:3001/crafts')
        .then(resp => resp.json())
        .then(crafts => dispatch({
            type: 'FETCH_CRAFTS',
            payload: crafts
        }) )
   } 

}
//update redux store with dispatch & dispatch 
//action to reducer which is responsible for 
//updateing state based on action that comes in

//have to wait to dispatch until we get respnise from fetch
//has to have type