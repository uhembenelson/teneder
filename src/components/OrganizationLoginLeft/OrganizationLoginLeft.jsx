import React from 'react'
import './OrganizationLoginLeft.css'
import hands from '../../assets/Light-brown-in-Jacket10.png'
import logo from '../../assets/SYMBOL.png'

const OrganizationLoginLeft = () => {
    return (
        <div className='OrganizationLoginLeftContainer' >
            <div className='organizationContainer' >
                <img className='loginLogo' src={logo} alt='logo' />
                <img className='hands' src={hands} alt='hands' />
                <div>
                    <h3 className='leftContainerTitle' >Partnership for Business Growth</h3>
                    <p className='leftContainerText' >We provide trust within the community and believe that our stakeholders will do the same</p>
                </div>
            </div>


        </div>
    )
}

export default OrganizationLoginLeft