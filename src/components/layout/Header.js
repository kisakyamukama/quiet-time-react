import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
         <header className="jumbotron" role="banner">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mt-0">
              <div className="container-fluid">
                <Link to={'/'} className="navbar-brand">Quiet time</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbar">
                  <ul className="navbar-nav pl-md-5 ml-auto">
                    <li className="nav-item">
                      <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/add-devotion" className="nav-link">Add Devotion</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/addBookLesson" className="nav-link">Add Book Lessons</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/addChurchLesson" className="nav-link">Add Church Lessons</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/feedback" className="nav-link">Feed back</Link>
                    </li>

                  </ul>
                </div>

              </div>
            </nav>
        </header>
    )
}



export default Header;
