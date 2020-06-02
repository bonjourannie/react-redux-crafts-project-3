import React, {Component} from 'react'
import CommentInput from '../components/CommentInput'
import Comments from '../components/Comments'

class CommentsContainer extends Component {

    render(){
        return(
            <div>
                <p>Comments</p>
                <Comments comments={this.props.craft && this.props.craft.comments} />
                <CommentInput craft={this.props.craft}/>
            </div>
        )
    }

}
//containers have state & componentDidMount, 
//wil have functions, might have state
//can receive info on craft if passed in as props

export default CommentsContainer