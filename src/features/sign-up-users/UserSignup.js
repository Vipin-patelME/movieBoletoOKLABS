import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Loader from '../../components/ui/Loader';
import { signUpAsync } from './user-sign-up-Slice';

export const UserSignup  = () => {
    const [submitCount, setSubmitCount] = useState(0);
    const [usersData, setUsersData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        errors: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate()

  const userData = useSelector((state) => state.user);
  const { error, loading, success, token, users } = userData;
  console.log(userData);

  useEffect(() => {
    if (submitCount >= 1) {
      if (success === true && error === "") {
        swal("Yeah....!", "Registered Successfully", "success");
        setTimeout(()=>{
            navigate(`/sign-in/${usersData.email}/${usersData.password}`)
        }, 3000)
      }
      else if(error.length >=1){
        swal("Aww...!", error, "error");
      }
    }
  }, [success, error, submitCount]);

  //2.2

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsersData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(usersData)
    // onRegisterUser()
    const { name, email, password, confirmPassword } = usersData;
    const payload = {
      username: name,
      email: email,
      password: password,
    };
    //console.log(payload)

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };

    if (password === confirmPassword) {
      //console.log(options)
      
      dispatch(signUpAsync(options));
      setSubmitCount(submitCount + 1);
      // const res = await fetch(`${BASE_URL}/api/auth/local/register`,options)
      // const data = await res.json()
      // // console.log(res)
      // // console.log(data)
      // if(res.ok === true){
      //     swal("Yeahh..!","Registered SuccessFully", "success")
      //     setUsersData({
      //         name:"",
      //         email:"",
      //         password:"",
      //         confirmPassword:""
      //     })
      // }
      // else{
      //     const errorMsg = data.error.message
      //     swal("Awww..!",errorMsg, "error")
      // }
    } else {
      swal("Opps...!", "Password and Confirm Password Mismatch", "warning");
    }
  };

  const { name, email, password, confirmPassword } = usersData;
  return (
    <>
        <form onSubmit={handleSubmit} className="account-form">
            <div className="form-group">
                <label htmlFor="username">
                USer Name<span>*</span>
                </label>
                <input
                type="text"
                name="name"
                onChange={handleChange}
                value={name}
                placeholder="Enter Your USer Name"
                id="username"
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email1">
                Email<span>*</span>
                </label>
                <input
                type="text"
                name="email"
                onChange={handleChange}
                value={email}
                placeholder="Enter Your Email"
                id="email1"
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="pass1">
                Password<span>*</span>
                </label>
                <input
                type="password"
                name="password"
                onChange={handleChange}
                value={password}
                placeholder="Password"
                id="pass1"
                required
                />
            </div>
            <div className="form-group">
                <label htmlFor="cpass2">
                Confirm Password<span>*</span>
                </label>
                <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={confirmPassword}
                placeholder="Password"
                id="cpass2"
                required
                />
            </div>
            <div className="form-group checkgroup">
                <input type="checkbox" id="bal" required defaultChecked />
                <label htmlFor="bal">
                I agree to the <Link to="#0">Terms, Privacy Policy</Link>{" "}
                and <Link to="#0">Fees</Link>
                </label>
            </div>
            <div className="form-group text-center">
                <button
                  className="bg-transparent text-center border-top-0 border-left-0 border-right-0"
                  type="submit"
                  disabled={loading}
                  >
                  {loading ? <Loader /> : "Sign Up"}
                </button>
            </div>
        </form>
    </>
  )
}
