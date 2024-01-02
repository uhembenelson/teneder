import React from 'react'
import './SuccessModal.css'
import success from '../../assets/success.png'
import { useNavigate } from 'react-router-dom'

const SuccessModal = () => {

    const navigate = useNavigate()

    return (
        <div className='successModalOverlay' >
            <div className='successModal' >
                <div>
                    <img className='successImage' src={success} alt='success' />
                    <h3 className='successHeader' >Successful</h3>
                    <p className='successText' >Your password has been reset successfully</p>
                    <div onClick={() => navigate('/organization/signin')} className='loginInputContainer successModalBtn loginBtnBox' >
                        <button className='loginBtn' >Continue</button>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default SuccessModal