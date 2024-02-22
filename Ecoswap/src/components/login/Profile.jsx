import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import './Profile.css'
import { toast } from 'react-toastify'

function Profile({ userdetails, setUserdetails, change }) {
    return (
        <>
            <Header headerTitle={"Profile"} />
            {/* {console.log(userdetails)} */}
            <div className="profile-page">
                <h3>Name : {userdetails.username}</h3>
                <h3>Email : {userdetails.email}</h3>
                <button onClick={() => {
                    localStorage.setItem("logintoken", null);
                    change();
                    toast.success("Logged-out successfully");
                    setUserdetails({});
                }}>Log Out</button>
            </div>

            <Footer />
        </>
    )
}

export default Profile
