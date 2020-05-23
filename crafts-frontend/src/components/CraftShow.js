import React from 'react'
import {Redirect} from 'react-router-dom'

const CraftShow = (props) => {

    // console.log(props)

    let craft = props.crafts[props.match.params.id -1]

    console.log(craft)

    return (
        <li>
            {/* {craft ? null : <Redirect to='/crafts'/>} */}
            {craft ? craft.name : null}
            {craft ? craft.category : null}
            {craft ? craft.notes : null}
        </li>
    )


}

export default CraftShow

//show one craft and materials
//functional component because it's just for display (not state)