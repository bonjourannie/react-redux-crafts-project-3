import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'

class CommentInput extends Component {

    state = {
        body: ''
    } 

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    //pass in event as paramter
    //name of input where the change is will update key in state
    //bracets because it's setting a key of what's evaluated inside it

    handleSumbut = (event) => {
        event.preventDefault()
        this.props.addComment(this.state, this.props.craft.id)
        this.setState({
            body: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSumbut}>
                    <label>Let others know what you think of this craft</label>
                    <br></br>
                    <input type="text" name="body" placeholder="body" value ={this.state.body}  onChange={this.handleChange}/>
                    <br></br>
                    <input type="submit"/>
                </form>
            </div>
        )
    }


}

export default connect(null, {addComment})(CommentInput)

//class component because it's a controlled form 
//handling values & state, must connect to store
//going to submit new comment that will need 
//to be sent to db, then dispatched to redux store
//to update store. so connect component so when I call 
//function to create new comment, it dispatches action to reducer

//doesn't need mapStateToProps because it gets props from Comment Container
//will need mapDispatch or something like that