export const addComment = (comment, craftId) => {

    return (dispatch) => {
        fetch(`http://localhost:3001/crafts/${craftId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(comment)
        })
        .then(resp => resp.json())
        .then(craft => dispatch({type: 'ADD_COMMENT', payload: craft}))
    }

}
//send back craft that comment is associated with instead 
//of searching for it & updating it