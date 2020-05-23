import React from 'react'
import {Redirect} from 'react-router-dom'
import MaterialsContainer from '../containers/MaterialsContainer'

const CraftShow = (props) => {

    // console.log(props)

    let craft = props.crafts[props.match.params.id -1]

    console.log(craft)

    return (
        <div>
            <h2>
                {craft ? craft.name : null}
            </h2>
            <ul>
                {craft ? craft.category : null}
                {craft ? craft.notes : null}
            </ul>
            <MaterialsContainer craft={craft}/>
        </div>
    )


}

export default CraftShow

//show one craft and materials
//functional component because it's just for display (not state)