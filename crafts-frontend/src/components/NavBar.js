import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div>
            <Link to='/crafts' >See all Crafts </Link><br></br>
            <Link to='/crafts/new'> Add a Craft </Link>
        </div>
    )
}

export default NavBar