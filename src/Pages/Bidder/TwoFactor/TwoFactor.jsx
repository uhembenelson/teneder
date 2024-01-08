import React, { useState, useEffect } from 'react'
import OtpInput from "react18-input-otp";
import { Link, useNavigate } from 'react-router-dom';
import OrganizationLoginLeft from '../../../components/OrganizationLoginLeft/OrganizationLoginLeft';


const TwoFactor = () => {

    const navigate = useNavigate()

    const [state, setState] = useState({ otp: "" });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (otp) => {
        setError("");
        setState({ otp });
    };

    const initialTime = 60; // Initial time in seconds
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (time > 0) {
                setTime((prevTime) => prevTime - 1);
            } else {
                clearInterval(intervalId);
            }
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, [time]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };


    return (
        <div className='loginContainer' >
            <OrganizationLoginLeft />
            <div className='loginBox' >
                <div className='signUpBox' >
                    <div onClick={() => navigate(-1)}>
                        <p className='alreadyText'><i className="ri-arrow-left-line"></i> Return</p>
                    </div>
                    <div className='memberContainer' >
                        <p  >Not a member?</p>
                        <Link className='loginText' to='/organization/signup' >JOIN NOW</Link>
                    </div>
                </div>
                <form className='loginForm' >
                    <h3>Verification</h3>
                    <p>Enter your 4 digits code that you received on your email.</p>

                    <div className='twoFAContainer'>
                        <OtpInput
                            value={state.otp}
                            onChange={handleChange}
                            numInputs={4}
                            isInputNum={true}
                            inputStyle={
                                error
                                    ? {
                                        outline: "none",
                                        border: "1.5px solid red",
                                        borderRadius: "0.375rem",
                                        color: 'rgb(8, 0, 100)',
                                        height: "60px",
                                        width: "100%",
                                        margin: "5px",
                                        padding: "0.9rem 1rem",
                                        fontSize: "24px",
                                    }
                                    : {
                                        outline: "none",
                                        border: "1.5px solid rgba(0, 20, 51, 0.3)",
                                        borderRadius: "0.375rem",
                                        height: "60px",
                                        color: 'rgb(8, 0, 100)',
                                        width: "100%",
                                        margin: "5px",
                                        padding: "0.9rem 1rem",
                                        fontSize: "24px",
                                        marginTop: "2rem",
                                    }
                            }
                        />
                    </div>

                    <p className='formattedTime'> {formatTime(time)}</p>

                    <button className='loginBtn verifyBtn' >Verify</button>



                    <p>If you didn’t receive a code! <span className='resendBtn' >Resend</span></p>

                </form >
            </div >
        </div >
    )
}

export default TwoFactor