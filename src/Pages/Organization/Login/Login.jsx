import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OrganizationLoginLeft from '../../../components/OrganizationLoginLeft/OrganizationLoginLeft'
import './Login.css'

const Login = () => {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword(prev => !prev)
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
                        <Link className='loginText' to='/organization/signup' >JOIN NOW</Link>
                    </div>
                </div>
                <form className='loginForm' >
                    <h3>WELCOME BACK MEMBER!!!</h3>
                    <p>LOG IN TO CONTINUE</p>
                    <div className='loginInputContainer' >
                        <svg className='icon' width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4981 14.2016C10.1201 14.2016 7.92281 12.9329 6.73384 10.8736C5.54487 8.81422 5.54487 6.27699 6.73384 4.21763C7.92281 2.15827 10.1201 0.88965 12.4981 0.889648C14.876 0.889648 17.0733 2.15826 18.2623 4.21762C19.4513 6.27698 19.4513 8.81422 18.2623 10.8736C17.0733 12.9329 14.876 14.2016 12.4981 14.2016H12.4981ZM12.498 11.5392C14.7036 11.5392 16.4916 9.75127 16.4916 7.54568C16.4916 5.3401 14.7036 3.55211 12.498 3.5521C10.2924 3.55209 8.50444 5.34007 8.50443 7.54565C8.50442 9.75124 10.2924 11.5392 12.498 11.5392H12.498ZM24.4788 26.1824C24.4788 26.658 24.225 27.0975 23.8132 27.3353C23.4013 27.5731 22.8938 27.5731 22.482 27.3353C22.0701 27.0975 21.8164 26.658 21.8164 26.1824V23.5201C21.8164 21.3145 20.0284 19.5265 17.8228 19.5265H7.17329C4.9677 19.5265 3.17972 21.3145 3.17972 23.5201V26.1824C3.17972 26.658 2.92599 27.0975 2.51412 27.3353C2.10225 27.5731 1.5948 27.5731 1.18293 27.3353C0.771058 27.0975 0.517334 26.658 0.517334 26.1824V23.5201C0.517333 19.8441 3.49731 16.8641 7.17329 16.8641H17.8228C21.4988 16.8641 24.4788 19.8441 24.4788 23.5201V26.1824Z" fill="#9E9E9E" />
                        </svg>
                        <input className='loginInput' type='email' />
                    </div>
                    <div className='loginInputContainer loginContainer2' >
                        <div className='loginInputBox' >
                            <svg className='icon' width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0929 11.623H3.2716C2.41782 11.623 1.7257 12.3151 1.7257 13.1689V20.8984C1.7257 21.7522 2.41782 22.4443 3.2716 22.4443H14.0929C14.9467 22.4443 15.6388 21.7522 15.6388 20.8984V13.1689C15.6388 12.3151 14.9467 11.623 14.0929 11.623ZM3.27161 10.0771C1.56405 10.0771 0.17981 11.4614 0.17981 13.1689V20.8984C0.17981 22.606 1.56405 23.9902 3.27161 23.9902H14.0929C15.8005 23.9902 17.1847 22.606 17.1847 20.8984V13.1689C17.1847 11.4614 15.8005 10.0771 14.0929 10.0771H3.27161ZM3.27172 5.43897C3.27172 3.50593 4.30298 1.71973 5.97704 0.75321C7.6511 -0.213309 9.71362 -0.21331 11.3877 0.753208C13.0617 1.71973 14.093 3.50593 14.093 5.43896V10.0767H12.5471V5.43897C12.5471 3.30453 10.8168 1.57422 8.68237 1.57422C6.54794 1.57421 4.81763 3.30451 4.81762 5.43895V10.0767H3.27172V5.43897Z" fill="#9E9E9E" />
                            </svg>

                            <input className='loginInput' type={showPassword ? 'text' : 'password'} />
                        </div>
                        {showPassword ? <span className='loginSpan' onClick={togglePassword} >HIDE</span> :
                            <span className='loginSpan' onClick={togglePassword} >SHOW</span>}

                    </div>
                    <div className='loginInputContainer loginBtnBox' >
                        <button className='loginBtn' >Proceed to my Account</button>
                    </div>
                    <div>
                        <button onClick={() => navigate('/organization/forgot-password')} className='forgotPwd' >Forgot Password?</button>
                    </div>


                </form >
            </div >
        </div >
    )
}

export default Login