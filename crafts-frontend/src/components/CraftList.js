//functional component responsible for rendering list of crafts
import React from 'react'
import CraftShow from './CraftShow'

const CraftList = (props) => {

    return(
        <div>
            {props.crafts.map(craft => 
            <div key={craft.id}> <CraftShow craft={craft} /></div>)}
        </div>
    )

}

export default CraftList