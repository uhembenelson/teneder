import React, { useState, useEffect } from 'react'
import OtpInput from "react18-input-otp";
import { Link, useNavigate } from 'react-router-dom';
import OrganizationLoginLeft from '../../../components/OrganizationLoginLeft/OrganizationLoginLeft';
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import axios from 'axios'
import { CircularProgress } from '@mui/material';

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


    const {
        handleSubmit,

    } = useForm({
        criteriaMode: "all",
        reValidateMode: "onSubmit",
        mode: "onChange",
    });

    const sendOTP = async () => {

        const Data = {
            email: localStorage.getItem('email'),
            otp: state.otp
        }


        try {
            setIsLoading(true)
            const data = await axios.post('https://school-project-production-459d.up.railway.app/v12/otp/verify/bidder', Data)

            // const res = await fetch('https://school-project-production-459d.up.railway.app/v10/otp', {
            //     method: 'POST', // or 'PUT'
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(Data),
            // })
            // const data = await res.json()


            setIsLoading(false)




            if (data.status === 200) {
                localStorage.setItem('reset', data?.data.user?.reset_token)
                navigate('/bidder/reset-password')
                toast.success(data.data.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: true,

                });

            }
            else {
                toast.error(data?.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: true,

                });

            }
        }
        catch (err) {
            setIsLoading(false)
            console.log(err)
            toast.error(err.response.data.message, {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: true,

            });
        }
    }




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
                        <Link className='loginText' to='/bidder/signup' >JOIN NOW</Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit(sendOTP)} className='loginForm' >
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

                    <button className='loginBtn verifyBtn' >{isLoading ? <CircularProgress color="primary" thickness={10} size={18} /> : 'Verify'}</button>



                    <p>If you didn’t receive a code! <span className='resendBtn' >Resend</span></p>

                </form >
            </div >
        </div >
    )
}

export default TwoFactor