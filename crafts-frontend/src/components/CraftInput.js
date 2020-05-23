import React, {Component} from 'react';
import {connect} from 'react-redux'
import {addCraft} from '../actions/addCraft'



//controlled form, declare state, give it value
class CraftInput extends Component {
    state = {
        name: '', 
        category: '', 
        notes: ''
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
        //debugger;
        event.preventDefault()
        this.props.addCraft(this.state)
        this.setState({
            name: '', 
            category: '', 
            notes: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSumbut}>
                    <label>Add new Craft!</label>
                    <br></br>
                    <input type='text' placeholder='name' value ={this.state.name} name="name" onChange={this.handleChange}/>
                    <br></br>
                    <input type='text' placeholder='category' value={this.state.category} name="category" onChange={this.handleChange}/>
                    <br></br>
                    <input type='text' placeholder='notes' value={this.state.notes} name="notes" onChange={this.handleChange}/>
                   <br></br> <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addCraft})(CraftInput)
//connect will create data to be sent to backend & updating redux store
// don't need mapStateToProps, 2nd arg is action creator alternative to mapDispatchToProps
//passing addCraft gives access to props