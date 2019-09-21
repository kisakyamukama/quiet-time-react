import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle} className="jumbotron">
            <h1 className=" text-center text-primary">Quiet Time</h1>
            <div>
                <Link to="/">Home</Link> | 
                <Link to="/add-devotion"> Add a devotion</Link> |
                <Link to="/about"> About </Link> |
                <Link to="/feedback"> Feedback / Suggestions </Link>


            </div>
        </header>
    )
}

const headerStyle = {
    backgroundColor: 'aqua'

}

export default Header;