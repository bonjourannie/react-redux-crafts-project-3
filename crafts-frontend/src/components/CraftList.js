//functional component responsible for rendering list of crafts
import React from 'react'
import {Link} from 'react-router-dom'
// import CraftShow from './CraftShow'

const CraftList = (props) => {

    return(
        <div>
            {props.crafts.map(craft => 
            <li key={craft.id}> 
                <Link to ={`/crafts/${craft.id}`}>{craft.name}</Link>
            </li>)}
        </div>
    )

}

export default CraftList 