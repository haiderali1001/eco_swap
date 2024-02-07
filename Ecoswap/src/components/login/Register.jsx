import React, { useState } from 'react'
import './Login.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from '../Header';
import axios from 'axios';
import { toast } from "react-toastify";

const baseURL = "https://mystiqueapi.onrender.com/signup"

const Register = () => {

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

            // if (values.name.trim().length < 1 || values.email.trim().length < 1 || values.pass.length < 1) {
            //     toast.warning("Please fill all the details");
            //     return;
            // }

            axios.post(baseURL, { "name": values.name, "email": values.email, "password": values.password })
                .then((res) => {
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err.response ? err.response.data.message : "Some error occurred");
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
                    </form>
                </div>
            </div>
        </>
    );
};

export default Register;
