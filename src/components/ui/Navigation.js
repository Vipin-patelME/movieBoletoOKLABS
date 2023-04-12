import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
        <ul className="menu">
            <li className="submenu" style={{color:"yellowgreen", fontWeight:"bold", fontSize:"24px"}}>Vipin Patel</li>
                <li>
                <Link to="/" className="active">Home</Link>
                <ul className="submenu">
                    <li>
                    <Link to="/" className="active">Home One</Link>
                    </li>
                    <li>
                    <Link to="/">Home Two</Link>
                    </li>
                </ul>
                </li>
                <li>
                <Link to="/">movies</Link>
                <ul className="submenu">
                    <li>
                    <Link to="movie-grid">Movie Grid</Link>
                    </li>
                    <li>
                    <Link to="movie-list">Movie List</Link>
                    </li>
                    <li>
                    <Link to="movie-details">Movie Details</Link>
                    </li>
                    <li>
                    <Link to="movie-details-2">Movie Details 2</Link>
                    </li>
                    <li>
                    <Link to="movie-ticket-plan">Movie Ticket Plan</Link>
                    </li>
                    <li>
                    <Link to="movie-seat-plan">Movie Seat Plan</Link>
                    </li>
                    <li>
                    <Link to="movie-checkout">Movie Checkout</Link>
                    </li>
                    <li>
                    <Link to="movie-popcorn">Movie Food</Link>
                    </li>
                </ul>
                </li>
            
                <li>
                <Link to="#0">pages</Link>
                <ul className="submenu">
                    <li>
                    <Link to="sign-in">Sign In</Link>
                    </li>
                    <li>
                    <Link to="sign-up">Sign Up</Link>
                    </li>
                </ul>
                </li>
                <li>
                <Link to="#0">blog</Link>
                <ul className="submenu">
                    <li>
                    <Link to="blog">Blog</Link>
                    </li>
                    <li>
                    <Link to="blog-details">Blog Single</Link>
                    </li>
                </ul>
                </li>
                <li>
                <Link to="contact">contact</Link>
                </li>
                <li className="header-button pr-0">
                <Link to="sign-up">join us</Link>
                </li>
            </ul>
        </>
  )
}

export default Navigation