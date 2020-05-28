import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux'

import CraftsContainer from './containers/CraftsContainer'


class App extends Component{ 

  render(){

    return(
      <div className="App">
        <CraftsContainer />
        
      </div>
    )
  }
}



export default App
//optional second argument of action creator, mapDispatchToProps
//mapStateToPropss gives access to values of store as props 
//have to pass mSTP to connect - 
//connects redux store to specific component
// second value adds something to store (mapDispatchTpProps)
//gives access through props to function to dispatch actions on store
