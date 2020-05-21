import React from 'react';
import './App.css';

class App extends React.Component{

componentDidMount(){
  fetch('http://localhost:3001/crafts', {
    method: 'GET'
  })
  .then(resp => resp.json())
  .then(resp => console.log(resp[0]))
}


  render(){
    return(
      <div className="App">
        APP
      </div>
    )
  }
}


export default App;
