import React from 'react'
import './Login.css'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from '../Header';

const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
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
                                value={formik.values.lastName}
                                placeholder='password'
                            />
                            {/* {formik.touched.subject && formik.errors.subject ? (
                                <div>{formik.errors.subject}</div>
                            ) : null} */}
                        </div>


                        <div className="labellz">
                        <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
