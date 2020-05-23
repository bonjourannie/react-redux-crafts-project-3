import React from 'react'

const CraftShow = (props) => {

    let craft = props.craft[props.match.params.id -1]
    
    console.log(craft)

    return (
        <li>
            {craft ? craft.name : null}
            {craft ? craft.category : null}
            {craft ? craft.notes : null}
        </li>
    )


}

export default CraftShow

//show one craft and materials
//functional component because it's just for display (not state)