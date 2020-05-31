import React, { Component } from 'react'

class Comments extends Component {

    state = {}


    
    render () {
    return (
        <div>
            {this.props.comments && this.props.comments.map(comment =>
                <li key={comment.id}>
                    {comment.body}
                </li>
            )}
        </div>
    )}
}

export default (Comments)

//functional component 
//map over materials and display
//connect gives access to  dispatchToProps in handleDelete