import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import swal from 'sweetalert'
import Loader from '../../components/ui/Loader'
import { resetState, signInAsync } from './sign-in-user-slice'

const SignInFeature = () => {
    const {gmail, password} = useParams()
    const [submitCount, setSubmitCount] = useState(0)
    const [count, setCount] = useState(0)
    const [mail, setMail] = useState(gmail)
    const [pass, setPass] = useState(password)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginDetail = useSelector(state => state.signInUSer)
    console.log("loginDetail",loginDetail)
    const {loading, error, success, users, token} = loginDetail
    useEffect(() => {
        console.log('I am useEffect')
        if (submitCount >= 1) {
          if (success === true) {
            swal("Yeah....!", "Logged In Successfully", "success");
            setTimeout(()=>{
                navigate(`/`)
                dispatch(resetState())
            }, 3000)
          }
          else if(error.length >=1){
            swal("Aww...!", error, "error");
          }
        }
    }, [success, error, count]);

    const handleSubmit = (e)=>{
        const userData = {
            "identifier": mail,
            "password": pass
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        };
        e.preventDefault()
        dispatch(signInAsync(options))
        setSubmitCount(submitCount + 1)
        setCount(count + 1)
    }

  return (
    <>
        <form onSubmit={handleSubmit} className="account-form">
            <div className="form-group">
                <label htmlFor="email2">Email<span>*</span></label>
                <input onChange={(e)=>{setMail(e.target.value)}} type="text" value={mail} placeholder="Enter Your Email" id="email2" required />
            </div>
            <div className="form-group">
                <label htmlFor="pass3">Password<span>*</span></label>
                <input onChange={(e)=>{console.log(e.target.value);setPass(e.target.value)}} type="password" value={pass} placeholder="Password" id="pass3" required />
            </div>
            <div className="form-group checkgroup">
                <input type="checkbox" id="bal2" required defaultChecked />
                <label htmlFor="bal2">remember password</label>
                <Link to="#0" className="forget-pass">Forget Password</Link>
            </div>
            <div className="form-group text-center">
                <button
                  className="bg-transparent text-center border-top-0 border-left-0 border-right-0"
                  type="submit"
                  disabled={loading}
                  >
                  {loading ? <Loader /> : "Sign In"}
                </button>
            </div>
        </form>
    </>
  )
}

export default SignInFeature