import React, {Component} from 'react'
import MaterialInput from '../components/MaterialInput'
import MaterialShow from '../components/MaterialShow'

class MaterialsContainer extends Component {

    render(){
        return(
            <div>
                <MaterialInput />
                <MaterialShow transactions={this.props.craft && this.props.crafts.materials} />
            </div>
        )
    }

}
//containers have state & componentDidMount, 
//wil have functions, might have state
//can receive info on craft if passed in as props

export default MaterialsContainer