import React, { Component } from 'react'
import MaterialInput from './MaterialInput'
import {connect} from 'react-redux'
import {deleteMaterial} from '../actions/deleteMaterial'

class Materials extends Component {

    state = {}

    // console.log(props.materials)

    handleDelete = (material) => {
        this.props.deleteMaterial(material.id, material.craft_id)
    }

    render () {
    return (
        <div>
            {this.props.materials && this.props.materials.map(material =>
                <li key={material.id}>
                    {material.name} - {material.description}
                    <button onClick ={() => this.handleDelete(material)}>Delete material</button>
                </li>
            )}
        </div>
    )}
}

export default connect(null, {deleteMaterial})(Materials)

//functional component 
//map over materials and display
//connect gives access to  dispatchToProps in handleDelete