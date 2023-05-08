import React, { useEffect } from 'react'
import { changeLanguage } from 'i18next'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signout } from '../../features/sign-in-user/sign-in-user-slice'

const Navigation = () => {

    const {t} = useTranslation()
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const userData = useSelector(state => state.signInUSer)
    console.log(userData)
    const {token} = userData
    const jwtToken = localStorage.getItem("jwtToken")
    console.log(token)
    useEffect(()=>{
        console.log("Logged out")
        if(!jwtToken){
            navigate("/sign-in")
        }

    }, [token])

    const onChangeLanguage= (lang)=>{
        changeLanguage(lang)
    }
    

    return (
    <>
        <ul className="menu">
                <li>
                <Link to="/" className="active">{t("Home")}</Link>
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
                <Link to="/">{t("Movies")}</Link>
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
                <Link to="#0">{t("Pages")}</Link>
                    <ul className="submenu">
                        <li>
                            <Link to="sign-in/vipin@gmail.com/123456">Sign In</Link>
                        </li>
                        <li>
                            <Link to="sign-up">Sign Up</Link>
                        </li>
                    </ul>
                </li>
                <li>
                <Link to="">{t("Blog")}</Link>
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
                    <Link to="contact">{t("Contact")}</Link>
                </li>
                <li>
                <Link to=" ">{t("Language")}</Link>
                    <ul className="submenu">
                        <li>
                            <p onClick={()=>onChangeLanguage("hi")} style={{cursor:"pointer",color:"black", fontWeight:"bold", paddingBottom:"10px"}} >{t("Hindi")}</p>
                        </li>
                        <li>
                            <p onClick={()=>onChangeLanguage("en")} style={{cursor:"pointer", color:"black", fontWeight:"bold", paddingBottom:"10px"}}>{t("English")}</p>
                        </li>
                    </ul>
                </li>
                {
                    jwtToken ? 
                    <li className="header-button pr-0">
                        <button onClick={()=>{dispatch(signout())}} style={{borderStyle:"none", color:"black", backgroundColor:"#FFF080"}} type='button'>{ t("Sign Out")}</button>
                    </li>
                    :
                    <li className="header-button pr-0">
                        <Link  to="/sign-up">{t("Join")}</Link>
                    </li>
                }
            </ul>
        </>
  )
}

export default Navigation