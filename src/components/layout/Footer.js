import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <header style={headerStyle} className="jumbotron mb-0">
            <h1 className=" text-center text-primary">Quiet Time &copy; 2019</h1>
            <div className="container-fluid">
                <Link to="/">Home</Link> | 
                <Link to="/add-devotion"> Add a devotion</Link> |
                <Link to="/about"> About </Link> |
                <Link to="/feedback"> Feedback / Suggestions </Link>


            </div>
        </header>
    )
}

const headerStyle = {
    backgroundColor: 'black'

}

export default Footer;