import React from 'react'
import './Login.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from '../Header';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from "react-toastify";

// const baseURL = "http://localhost:3000/login"

const baseURL = "https://mystiqueapi.onrender.com/login";

const Login = ({change, userdetails,setUserdetails}) => {
    const navigate = useNavigate();

    function goHome() {
        navigate("/shop");
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: (values) => {

            // if (values.name.trim().length < 1 || values.email.trim().length < 1 || values.password.length < 1) {
            //     toast.warning("Please fill me up");
            //     return;
            // }

            axios.post(baseURL, { "email": values.email, "password": values.password })
                .then((res) => {
                    console.log(res.data.success);
                    //res.data.token
                    //res.data.user_id
                    localStorage.setItem("logintoken" , res.data.token);
                    setUserdetails({userid: res.data.userid, cart: res.data.cart, username: res.data.username, email: res.data.email});
                    toast.success("Logged-in Successfully!");
                    change();
                    setTimeout(goHome, 5000);
                })
                .catch((error) => {
                    console.log(error? error : `Some error occurred ${values.email} ${values.password}`);
                    toast.warning("Invalid credentials");
                })
        },
    });



    return (
        <>
            <Header headerTitle={"Login"}/>
            <div className="loginpage">
                {/* <h1>Login</h1> */}
                <div className="loginformdiv">
                    <form onSubmit={formik.handleSubmit}>

                        <div className="labellz">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                placeholder='example@gmail.com'
                            />
                            {/* {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null} */}
                        </div>

                        <div className="labellz">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                placeholder='password'
                            />
                            {/* {formik.touched.subject && formik.errors.subject ? (
                                <div style={{color: 'black'}}>{formik.errors.subject}</div>
                            ) : null} */}
                        </div>


                        <div className="labellz">
                            <button type="submit" >Login</button>
                        </div>
                        <Link className='regloginlink' to='/register' style={{ textDecoration: 'none', color: 'black', fontFamily: 'Poppins', fontSize: '2vh', textAlign: 'center' }}>Don't have an account<br/>Register Instead</Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
