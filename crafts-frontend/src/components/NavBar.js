import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {
    return (
        <div>
            <h3>Welcome to the crafts closet!</h3>
            <p>check out crafts and make your own</p>
            <Link to='/crafts' >See all Crafts </Link><br></br>
            <Link to='/crafts/new'> Add a Craft </Link>
        </div>
    )
}

export default NavBar
//stateless