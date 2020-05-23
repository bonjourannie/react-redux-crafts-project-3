import React from 'react'

const CraftShow = (props) => {

    return (
        <li>
            {props.craft.name}
        </li>
    )


}

export default CraftShow

//show one craft and materials
//functional component because it's just for display (not state)