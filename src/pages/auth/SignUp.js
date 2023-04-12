import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
        <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
            <div className="container">
                <div className="padding-top padding-bottom">
                <div className="account-area">
                    <div className="section-header-3">
                    <span className="cate">welcome</span>
                    <h2 className="title">to Boleto </h2>
                    </div>
                    <form className="account-form">
                    <div className="form-group">
                        <label htmlFor="email1">Email<span>*</span></label>
                        <input type="text" placeholder="Enter Your Email" id="email1" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass1">Password<span>*</span></label>
                        <input type="password" placeholder="Password" id="pass1" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass2">Confirm Password<span>*</span></label>
                        <input type="password" placeholder="Password" id="pass2" required />
                    </div>
                    <div className="form-group checkgroup">
                        <input type="checkbox" id="bal" required defaultChecked />
                        <label htmlFor="bal">I agree to the <Link to="#0">Terms, Privacy Policy</Link> and <Link to="#0">Fees</Link></label>
                    </div>
                    <div className="form-group text-center">
                        <input type="submit" defaultValue="Sign Up" />
                    </div>
                    </form>
                    <div className="option">
                    Already have an account? <Link to="sign-in">Login</Link>
                    </div>
                    <div className="or"><span>Or</span></div>
                    <ul className="social-icons">
                    <li>
                        <Link to="#0">
                        <i className="fab fa-facebook-f" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#0" className="active">
                        <i className="fab fa-twitter" />
                        </Link>
                    </li>
                    <li>
                        <Link to="#0">
                        <i className="fab fa-google" />
                        </Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SignUp