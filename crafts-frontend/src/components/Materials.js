import React, { Component } from 'react'
import MaterialInput from './MaterialInput'
import {connect} from 'react-redux'
import {deleteMaterial} from '../actions/deleteMaterial'

const Materials = (props) => {

    console.log(props.materials)

    const handleDelete = (material) => {
        props.deleteMaterial(material.id, material.craft_id)
    }

    return (
        <div>
            {props.materials && props.materials.map(material =>
                <li key={material.id}>
                    {material.name}
                    {material.description}
                    <button onClick ={() => handleDelete(material)}>Delete material</button>
                </li>
            )}
        </div>
    )
}

export default connect(null, {deleteMaterial})(Materials)

//functional component 
//map over transactions and display
//connect gives access to  dispatchToProps in handleDelete