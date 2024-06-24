import React from 'react'
import './ApprovalCheck.css'
import BidderNav from '../../../components/BidderNav/Nav'
import { useSelector } from 'react-redux'
import useSWR from 'swr'

const ApprovalCheck = () => {



    const { token, email, contact_number } = useSelector(state => state.bidder.user)
    const tender = useSelector(state => state.bidder.tenderInfo)

    const fetchTenderDetails = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;
    };


    const url = `https://school-project-production-459d.up.railway.app/v4/tender/tender/cancelled/${tender?.tender_id}`

    const { data: tenderDetails, isLoading } = useSWR([url, token], () => fetchTenderDetails(url, token));

    let content = null

    if (isLoading === false) {
        content = <div className='textHeaderContainer' >
            <p className='textHeader' >Reason :</p>
            <p className='textDescApproved' >{tenderDetails[0]?.reasons}</p>
        </div>

    }
    if (isLoading === false && tenderDetails?.length === 0) {
        content = null
    }



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
                                <p className='textDesc' >{email}</p>
                            </div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >GST Number :</p>
                                <p className='textDesc' >{contact_number}</p>
                            </div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >Amount :</p>
                                <p className='textDesc' >{tender?.amount || 'null'}</p>
                            </div>
                            <div className='textHeaderContainer' >
                                <p className='textHeader' >Status :</p>
                                <p className='textDescApproved' >{tender?.status}</p>
                            </div>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApprovalCheck