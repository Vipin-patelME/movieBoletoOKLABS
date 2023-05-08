import React from 'react'
import { Link, useParams } from 'react-router-dom'
import SignInFeature from '../../features/sign-in-user/SignInFeature'

const SignIn = () => {


  return (
    <>
        <section className="account-section bg_img" data-background="assets/images/account/account-bg.jpg">
            <div className="container">
                <div className="padding-top padding-bottom">
                <div className="account-area">
                    <div className="section-header-3">
                    <span className="cate">hello</span>
                    <h2 className="title">welcome <Link to="/">back</Link></h2>
                    </div>
                    <SignInFeature />
                    <div className="option">
                    Don't have an account? <Link to="/sign-up">sign up now</Link>
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

export default SignIn