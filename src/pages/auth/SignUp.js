import swal from 'sweetalert'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../../utils/helper'

const SignUp = () => {

    const [usersData, setUsersData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",
        errors:""
    }) 

    const userData = useSelector((state)=> state.user.users)
    //console.log(userData)

    //2.2

    const handleChange = (e)=>{
        const {name, value} =e.target
        setUsersData((prevData)=>({...prevData, [name]: value}))
    }

    const onRegisterUser = async()=>{
        
        const {name, email, password, confirmPassword} = usersData
        const payload = {
            "username": name,
            "email": email,
            "password": password
        }
        console.log(payload)

        const options = {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(payload)
        }

        if (password === confirmPassword){
            const res = await fetch(`${BASE_URL}/api/auth/local/register`,options)
            const data = await res.json()
            // console.log(res)
            // console.log(data)
            if(res.ok === true){
                swal("Yeahh..!","Registered SuccessFully", "success")
                setUsersData({
                    name:"",
                    email:"",
                    password:"",
                    confirmPassword:""
                })
            }
            else{
                const errorMsg = data.error.message
                swal("Awww..!",errorMsg, "error")
            }

        }
        else{
            swal("Opps...!","Password and Confirm Password Mismatch", "warning")
        }
        //console.log(data)
    }



    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(usersData)
        onRegisterUser()
        
    }

    
    const {name, email, password, confirmPassword} = usersData
    
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
                    <form onSubmit={handleSubmit} className="account-form">
                        <div className="form-group">
                            <label htmlFor="username">USer Name<span>*</span></label>
                            <input type="text" name='name' onChange={handleChange} value={name} placeholder="Enter Your USer Name" id="username" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email1">Email<span>*</span></label>
                            <input type="text" name='email' onChange={handleChange} value={email} placeholder="Enter Your Email" id="email1" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pass1">Password<span>*</span></label>
                            <input type="password" name="password" onChange={handleChange} value={password} placeholder="Password" id="pass1" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cpass2">Confirm Password<span>*</span></label>
                            <input type="password" name="confirmPassword" onChange={handleChange} value={confirmPassword} placeholder="Password" id="cpass2" required />
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