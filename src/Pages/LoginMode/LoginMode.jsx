import React from 'react'
import './LoginMode.css'
import { useNavigate } from 'react-router-dom'
import bidder from '../../assets/bidderLogin.png'
import Organization from '../../assets/organizationLogin.png'

const LoginMode = () => {
    const navigate = useNavigate()
    return (
        <div className='LoginModeContainer'>
            <h1 className='modeHeader' >LOGIN AS </h1>
            <div className='modeContainer' >
                <div onClick={() => navigate('/bidder/signin')} className='modeHolder' >
                    <img src={bidder} alt='bidder' />
                    <h3>BIDDER</h3>
                </div>
                <div className='modeHolder' >
                    <img src={Organization} alt='bidder' />
                    <h3>ORGANIZATION</h3>
                </div>
            </div>
        </div>
    )
}

export default LoginMode