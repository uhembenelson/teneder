import React from 'react'
import subscribe from '../../assets/SUBSCRIBE IMG.png'
// import './SubscribePopUp.css'

const SubscribePopUp = () => {
    return (

        <div className='popUpContainer' >
            <div className='popUpBox' >
                <h1>CONGRATULATIONS</h1>
                <img src={subscribe} alt='subscribe' />
                <h4>YOU WILL NOW START RECEVING ALL THE NOTIFICATION OF THIS PLATFORM</h4>
            </div>

        </div>


    )
}

export default SubscribePopUp