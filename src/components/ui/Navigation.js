import React from 'react'

const Navigation = () => {
  return (
    <>
        <ul className="menu">
            <li className="submenu" style={{color:"yellowgreen", fontWeight:"bold", fontSize:"24px"}}>Vipin Patel</li>
                <li>
                <a href="/" className="active">Home</a>
                <ul className="submenu">
                    <li>
                    <a href="/" className="active">Home One</a>
                    </li>
                    <li>
                    <a href="/">Home Two</a>
                    </li>
                </ul>
                </li>
                <li>
                <a href="/">movies</a>
                <ul className="submenu">
                    <li>
                    <a href="movie-grid">Movie Grid</a>
                    </li>
                    <li>
                    <a href="movie-list">Movie List</a>
                    </li>
                    <li>
                    <a href="movie-details">Movie Details</a>
                    </li>
                    <li>
                    <a href="movie-details-2">Movie Details 2</a>
                    </li>
                    <li>
                    <a href="movie-ticket-plan">Movie Ticket Plan</a>
                    </li>
                    <li>
                    <a href="movie-seat-plan">Movie Seat Plan</a>
                    </li>
                    <li>
                    <a href="movie-checkout">Movie Checkout</a>
                    </li>
                    <li>
                    <a href="movie-popcorn">Movie Food</a>
                    </li>
                </ul>
                </li>
            
                <li>
                <a href="#0">pages</a>
                <ul className="submenu">
                    <li>
                    <a href="sign-in">Sign In</a>
                    </li>
                    <li>
                    <a href="sign-up">Sign Up</a>
                    </li>
                </ul>
                </li>
                <li>
                <a href="#0">blog</a>
                <ul className="submenu">
                    <li>
                    <a href="blog">Blog</a>
                    </li>
                    <li>
                    <a href="blog-details">Blog Single</a>
                    </li>
                </ul>
                </li>
                <li>
                <a href="contact">contact</a>
                </li>
                <li className="header-button pr-0">
                <a href="sign-up">join us</a>
                </li>
            </ul>
        </>
  )
}

export default Navigation