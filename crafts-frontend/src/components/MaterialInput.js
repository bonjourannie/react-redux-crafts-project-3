import React, { Component } from 'react'
import {connect} from 'react-redux'

class MaterialInput extends Component {

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