 import React, {Component} from 'react';
 import CraftList from '../components/CraftList'
 import CraftInput from '../components/CraftInput'

 class CraftsContainer extends Component {

    render(){
        return (
            <div>
                <CraftInput />
                <CraftList />
            </div>
        )
    }

 }

 export default CraftsContainer