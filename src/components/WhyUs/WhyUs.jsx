import React from 'react'
import './WhyUs.css'
import defi from '../../assets/defi.png'
import user from '../../assets/img 4.png'
import saly from '../../assets/Saly-13.png'

const WhyUs = () => {
    return (
        <div className='WhyUs' id='whyUs'>
            <div className='defiContainer' >
                <div className='whyUsBox ' id='whyUsBox' >
                    <h2 className='whyUsTitle' id='whyUsTitle' >Why We Are Better than others?</h2>
                    <p>We use Blockchain and Smart Contracts  to construct a transparent,
                        de-centralised, and secure tendering framework that allows bidders
                        to keep track of portal functionality and all tender portal activity
                        as well for the organizations to make secure tokenized payments.</p>
                </div>


                <div className='allDefiContainers' >


                    <div className='defiContainerBox' >
                        <img className='defiImage' src={defi} alt='defi' />
                        <h3 className='defiDesc' >Tokenized Payment System</h3>
                    </div>
                    <div className='defiContainerBox' >

                        <img className='defiImage' src={saly} alt='defi' />
                        <h3 className='defiDesc' >De-centralized Database Handling</h3>
                    </div>
                    <div className='defiContainerBox' >
                        <img className='defiImage' src={user} alt='defi' />
                        <h3 className='defiDesc' >Smart Contracts To the Rescue </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs