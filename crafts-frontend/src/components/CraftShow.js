import React from 'react'
import CraftEdit from './CraftEdit'
import MaterialsContainer from '../containers/MaterialsContainer'
import CommentsContainer from '../containers/CommentsContainer'

const CraftShow = (props) => {

    console.log(props)

    // let craft = props.crafts[props.match.params.id -1]
    let craft = props.crafts.filter(craft => craft.id == props.match.params.id)[0]

    console.log(craft)
    // debugger;
    return (
        <div>
            <h2>
                {craft ? craft.name : null}
            </h2>
            <ul>
                category: {craft ? craft.category : null}<br></br>
                notes: {craft ? craft.notes : null}
            </ul>
            <MaterialsContainer craft={craft}/>
            <CraftEdit craft={craft} />
            <CommentsContainer craft={craft}/>
            
        </div>

    )


}

export default CraftShow

//show one craft and materials
//functional component because it's just for display (not state)