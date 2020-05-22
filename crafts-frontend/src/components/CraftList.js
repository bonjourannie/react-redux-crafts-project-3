//functional component responsible for rendering list of crafts
import React from 'react'
// import CraftInput from './CraftInput'
// import CraftsContainer from '../containers/CraftsContainer'

const CraftList = (props) => {

    return(
        <div>
            {props.crafts.map(craft => <li key={craft.id}> {craft.name} - {craft.category} - {craft.notes} </li>)}
        </div>
    )

}

export default CraftList