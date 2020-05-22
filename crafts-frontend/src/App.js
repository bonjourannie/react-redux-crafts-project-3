import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'
import {fetchCrafts} from './actions/fetchCrafts'

class App extends Component{

componentDidMount(){
  this.props.fetchCrafts({type: 'FETCH_CRAFTS', payload: {name:'scrapbook'}})
}

  render(){

    return(
      <div className="App">
        please show up
        
      </div>
    )
  }
}



export default connect(null, {fetchCrafts})(App);
//optional second argument of action creator, mapDispatchToProps
//mapStateToPropss gives access to values of store as props 
//have to pass mSTP to connect - 
//connects redux store to specific component
// second value adds something to store (mapDispatchTpProps)
//gives access through props to function to dispatch actions on store
