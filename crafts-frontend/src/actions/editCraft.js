export const editCraft = (data) => {

    return(dispatch) => {
        fetch(`http://localhost:3001/crafts/${data.id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            method: 'PATCH',
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(craft => dispatch({type: 'EDIT_CRAFT', payload: craft}))
    }
 

}