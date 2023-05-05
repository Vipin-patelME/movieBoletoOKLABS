import swal from "sweetalert";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signUpAsync } from "../../features/sign-up-users/user-sign-up-Slice";
import Loader from "../../components/ui/Loader";
import { UserSignup } from "../../features/sign-up-users/UserSignup";

const SignUp = () => {
    

  return (
    <>
      <section
        className="account-section bg_img"
        data-background="assets/images/account/account-bg.jpg"
      >
        <div className="container">
          <div className="padding-top padding-bottom">
            <div className="account-area">
              <div className="section-header-3">
                <span className="cate">welcome</span>
                <h2 className="title">to Boleto </h2>
              </div>
              <UserSignup />
              <div className="option">
                Already have an account? <Link to="sign-in">Login</Link>
              </div>
              <div className="or">
                <span>Or</span>
              </div>
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
  );
};

export default SignUp;
