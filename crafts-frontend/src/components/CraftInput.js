import React, {Component} from 'react';



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


    render(){
        return(
            <div>
                <form>
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

export default CraftInput
