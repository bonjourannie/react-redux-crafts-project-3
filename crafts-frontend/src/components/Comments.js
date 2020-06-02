import React from 'react'

const Comments = (props) => {

    // let craft = props.crafts.filter(craft => craft.id == props.match.params.id)[0]

    return (
        <div>
            {props.comments && props.comments.map(comment =>
                <li key={comment.id}>
                    {comment.body}
                </li>
            )}
        </div>
    )
}

export default (Comments)

//functional component 
//map over comments and display