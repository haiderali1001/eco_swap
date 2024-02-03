import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Header from './components/Header';
import Footer from './components/Footer';
import './Contact.css'

const Contact = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            subject: '',
            email: '',
            contmsg: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
            subject: Yup.string()
                .max(20, 'Must be 20 characters or less')
                .required('Required'),
            contmsg: Yup.string()
                .max(100, 'Must be 100 characters or less')
                .required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>
            <Header />
            <div className="contactpage">
                <h2>Get In Touch With Us</h2>
                <p>For More Information About Our Product & Services. Please Feel Free To Drop Us<br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                <div className="formdiv">
                    <form onSubmit={formik.handleSubmit}>
                        <div className="labellz">
                            <label htmlFor="username">Your Name</label>
                            <input
                                id="user-name"
                                name="username"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.firstName}
                            />
                            {formik.touched.username && formik.errors.username ? (
                                <div>{formik.errors.username}</div>
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
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div className="labellz">
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                            {formik.touched.subject && formik.errors.subject ? (
                                <div>{formik.errors.subject}</div>
                            ) : null}
                        </div>

                        <div className="labellz">
                            <label htmlFor="contmsg">Message</label>
                            <input
                                id="cont-msg"
                                name="contmsg"
                                type="text"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.lastName}
                            />
                            {formik.touched.contmsg && formik.errors.contmsg ? (
                                <div>{formik.errors.contmsg}</div>
                            ) : null}
                        </div>

                        <div className="labellz">
                        <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;