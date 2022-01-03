import React from 'react';
import "./Topbar.css";
import { NavLink, BrowserRouter as Router} from 'react-router-dom';

const Topbar = () => {
    return (
        <nav className="topbar">
            <div className="link-container">
                <NavLink className="nav-link" to="/"><h1 className="link-text">Home</h1></NavLink>
                <NavLink className="nav-link" to="/about"><h1 className="link-text">About</h1></NavLink>
                <NavLink className="nav-link" to="/testimonials"><h1 className="link-text">Testimonials</h1></NavLink>
            </div>
            <button className="button-box"><h1 className="button-text">Explore...</h1></button>
        </nav>
    )
}

export default Topbar;
