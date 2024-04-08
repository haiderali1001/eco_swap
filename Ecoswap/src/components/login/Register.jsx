import React, { useState } from 'react'
import './Login.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from '../Header';
import axios from 'axios';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import config from '../../config';

const baseURL = config.getBackendUrl();

const Register = ({change, userdetails,setUserdetails}) => {
    const navigate = useNavigate();

    function goHome() {
        navigate("/shop");
    }



    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            name: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
        }),
        onSubmit: (values) => {
            // e.preventDefault();

            // if (values.name.trim().length < 1 || values.email.trim().length < 1 || values.password.length < 1) {
            //     toast.warning("Please fill me up");
            //     return;
            // }

            axios.post(`${baseURL}/signup`, { "name": values.name, "email": values.email, "password": values.password })
                .then((res) => {
                    // console.log(res.data);
                    toast.success("Registered Successfully!");
                    change();
                    localStorage.setItem("logintoken" , res.data.token);
                    setUserdetails({userid: res.data.userid, cart: res.data.cart, username: res.data.username, email: res.data.email});
                    setTimeout(goHome, 2000);
                })
                .catch((err) => {
                    if(err.response.data.toast === 'userexists') toast.error("User already exists!");
                    console.log(err.response ? err.response.data : "Some error occurred");
                    // console.log(err)
                })
        }
    });

    return (
        <> 
            <Header headerTitle={"Register"} />
            <div className="loginpage">
                {/* <h1>Login</h1> */}
                <div className="loginformdiv">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="labellz">
                            <label htmlFor="name">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                                placeholder='John Doe'
                            />
                            {formik.touched.subject && formik.errors.subject ? (
                                <div>{formik.errors.subject}</div>
                            ) : null}
                        </div>

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
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
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
                            {formik.touched.subject && formik.errors.subject ? (
                                <div>{formik.errors.subject}</div>
                            ) : null}
                        </div>


                        <div className="labellz">
                            <button type="submit" >Register</button>
                        </div>
                        <Link className='regloginlink' to='/profile' style={{ textDecoration: 'none', color: 'black', fontFamily: 'Poppins', fontSize: '2vh', textAlign: 'center' }}>Already have an account<br/>Login Instead</Link>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
