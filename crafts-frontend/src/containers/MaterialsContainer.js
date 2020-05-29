import React, {Component} from 'react'
import MaterialInput from '../components/MaterialInput'
import Materials from '../components/Materials'

class MaterialsContainer extends Component {

    render(){
        return(
            <div>
                <MaterialInput craft={this.props.craft}/>
                <Materials materials={this.props.craft && this.props.craft.materials} />
            </div>
        )
    }

}
//containers have state & componentDidMount, 
//wil have functions, might have state
//can receive info on craft if passed in as props

export default MaterialsContainer