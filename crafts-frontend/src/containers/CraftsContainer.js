 import React, {Component} from 'react';
 import CraftList from '../components/CraftList'
 import CraftInput from '../components/CraftInput'
 import CraftShow from '../components/CraftShow'
 import {connect} from 'react-redux';
 import {Route, Switch} from 'react-router-dom'
 import {fetchCrafts} from '../actions/fetchCrafts'
 import NavBar from '../components/NavBar' 

//container renders other components, passes them data, 
//class components because they deal with state

 class CraftsContainer extends Component {

    componentDidMount(){
        this.props.fetchCrafts()
    }
    //give access to store through props
    //when this container mounts, we have to make request to backend
    //react&redux don't hold state if you refresh

    render(){
        return (
            <div>
                <NavBar /><br></br>  
                <Switch>
                <Route exact path='/crafts' render={(routerProps) => <CraftList {...routerProps} crafts={this.props.crafts}/> }/>
                <Route path='/crafts/new' component={CraftInput}/>
                <Route path='/crafts/:id' render={(routerProps) => <CraftShow {...routerProps} crafts={this.props.crafts}/> }/>    
                </Switch>
            </div>
        )
    }

 }

 const mapStateToProps = state => {
     return {
         crafts: state.crafts
     }
 }

 //get redux store, map whatever is returned as props
 //give this component access through props to the crafts inside state

 export default connect(mapStateToProps, {fetchCrafts})(CraftsContainer);