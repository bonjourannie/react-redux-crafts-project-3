export const addMaterials = (material, craftId) => {

    return (dispatch) => {
        fetch('localhost:3000/crafts/`{craftId}/materials', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(material)
        })
        .then(resp => resp.json())
        .then(material => dispatch({type: 'ADD_MATERIAL', payload: material}))
    }

}