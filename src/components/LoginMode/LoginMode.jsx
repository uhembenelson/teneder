import React from 'react'
import './LoginMode.css'
import { useNavigate } from 'react-router-dom'
import bidder from '../../assets/bidderLogin.png'
import Organization from '../../assets/organizationLogin.png'

const LoginMode = ({ setShowLoginModal }) => {
    const navigate = useNavigate()
    return (
        <div className='loginModeLayout' >
            <div className='LoginModeContainer'>
                <svg onClick={() => setShowLoginModal(false)} className='cancelSVG' width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.093 20.7005C22.9245 19.5321 22.9245 17.6376 24.093 16.4692L35.3086 5.25351C35.8053 4.74668 36.0819 4.0643 36.0783 3.35467C36.0747 2.64504 35.7913 1.9655 35.2895 1.4637C34.7877 0.961913 34.1081 0.678423 33.3985 0.674839C32.6889 0.671255 32.0065 0.947866 31.4997 1.44456L20.284 12.6602C19.1156 13.8287 17.2211 13.8287 16.0527 12.6602L4.83701 1.44456C4.33017 0.947866 3.6478 0.671255 2.93817 0.674839C2.22854 0.678423 1.54899 0.961913 1.0472 1.4637C0.545409 1.9655 0.261919 2.64504 0.258335 3.35467C0.254751 4.0643 0.531362 4.74668 1.02806 5.25351L12.2437 16.4692C13.4122 17.6376 13.4122 19.5321 12.2437 20.7005L1.02806 31.9162C0.531362 32.423 0.254751 33.1054 0.258335 33.815C0.261919 34.5246 0.545409 35.2042 1.0472 35.706C1.54899 36.2078 2.22854 36.4912 2.93817 36.4948C3.6478 36.4984 4.33017 36.2218 4.83701 35.7251L16.0527 24.5095C17.2211 23.341 19.1156 23.341 20.284 24.5095L31.4997 35.7251C32.0065 36.2218 32.6889 36.4984 33.3985 36.4948C34.1081 36.4912 34.7877 36.2078 35.2895 35.706C35.7913 35.2042 36.0747 34.5246 36.0783 33.815C36.0819 33.1054 35.8053 32.423 35.3086 31.9162L24.093 20.7005Z" fill="#524F4F" />
                </svg>

                <h1 className='modeHeader' >LOGIN AS </h1>
                <div className='modeContainer' >
                    <div onClick={() => navigate('/bidder/signin')} className='modeHolder' >
                        <img className='modeImage' src={bidder} alt='bidder' />
                        <h3>BIDDER</h3>
                    </div>
                    <div onClick={() => navigate('/organization/login')} className='modeHolder' >
                        <img className='modeImage' src={Organization} alt='bidder' />
                        <h3>ORGANIZATION</h3>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LoginMode