import React from 'react'
import './ApprovalCheck.css'
import BidderNav from '../../../components/BidderNav/Nav'

const ApprovalCheck = () => {
    return (
        <div>
            <BidderNav />
            <div className='approvalCheckBox'>
                <h2>APPROVAL CHECK</h2>
                <div className='approvalCheckContentBox' >

                    <div className='approvalCheckContentTop' >
                        <p className='tenderText' >Tender</p>
                        <p className='tenderNumber'>No: 4567832 </p>
                    </div>
                    <div className='approvalContentBox' >
                        <div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >Name of the Organization :</p>
                                <p className='textDesc' >Panjim Municpal Council</p>
                            </div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >Email :</p>
                                <p className='textDesc' >pmc@gmail.com</p>
                            </div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >GST Number :</p>
                                <p className='textDesc' >035468276265</p>
                            </div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >Amount :</p>
                                <p className='textDesc' >0.90 ETH</p>
                            </div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >Status :</p>
                                <p className='textDescApproved' >Approved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCheck