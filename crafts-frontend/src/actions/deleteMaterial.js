export const deleteMaterial = (materialId, craftId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/crafts/${craftId}/materials/${materialId}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(craft => dispatch({type: 'DELETE_MATERIAL', payload: craft}))
    }

}

//use dispatch because it's an asyncronous request