export const addMaterial = (material, craftId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/crafts/${craftId}/materials`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(material)
        })
        .then(resp => resp.json())
        .then(craft => dispatch({type: 'ADD_MATERIAL', payload: craft}))
    }

}
//send back craft that material is associated with instead 
//of searching for it & updating it