import React, { Component } from 'react'
import {connect} from 'react-redux'

class MaterialInput extends Component {

    state = {
        name: '',
        description: ''
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
        this.props.addMaterial(this.state)
        this.setState({
            name: '', 
            category: '', 
            notes: ''
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSumbut}>
                    <label>Add materials to your craft</label>
                    <br></br>
                    <input type='text' placeholder='name' value ={this.state.name} name="name" onChange={this.handleChange}/>
                    <br></br>
                    <input type='text' placeholder='description' value={this.state.category} name="description" onChange={this.handleChange}/>
                    <br></br>
                    <input type="submit"/>
                </form>
            </div>
        )
    }


}

export default connect(null)(MaterialInput)

//class component because it's a controlled form 
//handling values & state, must connect to store
//going to submit new material that will need 
//to be sent to db, then dispatched to redux store
//to update store. so connect component so when I call 
//function to create new material, it dispatches action to reducer

//doesn't need mapStateToProps because it gets props from Material Container
//will need mapDispatch or something like that