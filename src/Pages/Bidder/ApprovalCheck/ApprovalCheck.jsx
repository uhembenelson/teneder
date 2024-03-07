import React from 'react'
import './ApprovalCheck.css'
import BidderNav from '../../../components/BidderNav/Nav'
import { useSelector } from 'react-redux'

const ApprovalCheck = () => {

    const tender = useSelector(state => state.bidder.tenderInfo)
    return (
        <div>
            <BidderNav />
            <div className='approvalCheckBox'>
                <h2>APPROVAL CHECK</h2>
                <div className='approvalCheckContentBox' >

                    <div className='approvalCheckContentTop' >
                        <p className='tenderText' >Tender</p>
                        <p className='tenderNumber'>No: {tender?.tender_id} </p>
                    </div>
                    <div className='approvalContentBox' >
                        <div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >Name of the Organization :</p>
                                <p className='textDesc' >{tender?.name_of_organization}</p>
                            </div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >Email :</p>
                                <p className='textDesc' >{tender?.email}</p>
                            </div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >GST Number :</p>
                                <p className='textDesc' >{tender?.contact_number}</p>
                            </div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >Amount :</p>
                                <p className='textDesc' >0.90 ETH</p>
                            </div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >Status :</p>
                                <p className='textDescApproved' >{tender?.status}</p>
                            </div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >Reason :</p>
                                <p className='textDescApproved' >{tender?.reasons}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCheck