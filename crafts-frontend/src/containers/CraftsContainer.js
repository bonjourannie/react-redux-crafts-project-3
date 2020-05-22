 import React, {Component} from 'react';
 import CraftList from '../components/CraftList'
 import CraftInput from '../components/CraftInput'
 import {connect} from 'react-redux';

 import {fetchCrafts} from '../actions/fetchCrafts'



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
                <CraftInput /><br></br>
                <CraftList crafts={this.props.crafts}/>
                {/* get crafts from redux store, access through 
                props, then send crafts to craftsList component */}
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