import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OrganizationLoginLeft from '../../../components/OrganizationLoginLeft/OrganizationLoginLeft'
import SuccessModal from '../../../components/SuccessModal/SuccessModal'


const ResetPassword = () => {
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)
    const [showConPassword, setShowConPassword] = useState(false)

    const [showSuccessModal, setShowSuccessModal] = useState(false)

    const success = () => {
        setShowSuccessModal(true)
    }

    const togglePassword = () => {
        setShowPassword(prev => !prev)
    }

    const toggleConPassword = () => {
        setShowConPassword(prev => !prev)
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
                    <h3>New Password</h3>
                    <p>Set the new password for your account so you can login and access all featuress.</p>
                    <div>
                        <label className='loginLabel'>Enter new password</label>
                        <div className='loginInputContainer loginContainer2' >
                            <div className='loginInputBox' >
                                <svg className='icon' width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0929 11.623H3.2716C2.41782 11.623 1.7257 12.3151 1.7257 13.1689V20.8984C1.7257 21.7522 2.41782 22.4443 3.2716 22.4443H14.0929C14.9467 22.4443 15.6388 21.7522 15.6388 20.8984V13.1689C15.6388 12.3151 14.9467 11.623 14.0929 11.623ZM3.27161 10.0771C1.56405 10.0771 0.17981 11.4614 0.17981 13.1689V20.8984C0.17981 22.606 1.56405 23.9902 3.27161 23.9902H14.0929C15.8005 23.9902 17.1847 22.606 17.1847 20.8984V13.1689C17.1847 11.4614 15.8005 10.0771 14.0929 10.0771H3.27161ZM3.27172 5.43897C3.27172 3.50593 4.30298 1.71973 5.97704 0.75321C7.6511 -0.213309 9.71362 -0.21331 11.3877 0.753208C13.0617 1.71973 14.093 3.50593 14.093 5.43896V10.0767H12.5471V5.43897C12.5471 3.30453 10.8168 1.57422 8.68237 1.57422C6.54794 1.57421 4.81763 3.30451 4.81762 5.43895V10.0767H3.27172V5.43897Z" fill="#9E9E9E" />
                                </svg>

                                <input placeholder='8 symbls at least' className='loginInput' type={showPassword ? 'text' : 'password'} />
                            </div>
                            {showPassword ? <span className='loginSpan' onClick={togglePassword} >HIDE</span> :
                                <span className='loginSpan' onClick={togglePassword} >SHOW</span>}

                        </div>
                    </div>

                    <div>
                        <label className='loginLabel'>Confirm password</label>
                        <div className='loginInputContainer loginContainer2' >
                            <div className='loginInputBox' >
                                <svg className='icon' width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0929 11.623H3.2716C2.41782 11.623 1.7257 12.3151 1.7257 13.1689V20.8984C1.7257 21.7522 2.41782 22.4443 3.2716 22.4443H14.0929C14.9467 22.4443 15.6388 21.7522 15.6388 20.8984V13.1689C15.6388 12.3151 14.9467 11.623 14.0929 11.623ZM3.27161 10.0771C1.56405 10.0771 0.17981 11.4614 0.17981 13.1689V20.8984C0.17981 22.606 1.56405 23.9902 3.27161 23.9902H14.0929C15.8005 23.9902 17.1847 22.606 17.1847 20.8984V13.1689C17.1847 11.4614 15.8005 10.0771 14.0929 10.0771H3.27161ZM3.27172 5.43897C3.27172 3.50593 4.30298 1.71973 5.97704 0.75321C7.6511 -0.213309 9.71362 -0.21331 11.3877 0.753208C13.0617 1.71973 14.093 3.50593 14.093 5.43896V10.0767H12.5471V5.43897C12.5471 3.30453 10.8168 1.57422 8.68237 1.57422C6.54794 1.57421 4.81763 3.30451 4.81762 5.43895V10.0767H3.27172V5.43897Z" fill="#9E9E9E" />
                                </svg>

                                <input placeholder='8 symbls at least' className='loginInput' type={showConPassword ? 'text' : 'password'} />
                            </div>
                            {showConPassword ? <span className='loginSpan' onClick={toggleConPassword} >HIDE</span> :
                                <span className='loginSpan' onClick={toggleConPassword} >SHOW</span>}

                        </div>
                    </div>
                    <div onClick={success} className='loginInputContainer loginBtnBox' >
                        <button className='loginBtn' >Update Password</button>
                    </div>

                    {showSuccessModal && <SuccessModal />}

                </form >
            </div >
        </div >
    )
}

export default ResetPassword