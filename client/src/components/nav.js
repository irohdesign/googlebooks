import React from "react";
import {Link} from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navList">
            <Link className="navbar-brand" to="/"><h3>Google Books</h3></Link>
            <li className="nav-item"><Link to="/search">Search</Link></li>
            <li className="nav-item"><Link to="/saved">Save</Link></li>
        </nav>
    )
}

export default Nav;