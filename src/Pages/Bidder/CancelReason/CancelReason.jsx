import React, { useState } from 'react'
import BidderNav from '../../../components/BidderNav/Nav';
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { formatDate } from '../../../utilities/dateFormatter';

const CancelReason = () => {




    const { token } = useSelector(state => state.bidder.user)
    const selectedTender = useSelector(state => state.bidder.selectedInfo)

    const [tender, setTender] = useState([{
        name_of_organization: '',
        tender_id: '',
        reasons: '',
        names: '',
        duration_of_work_start: '',
        duration_of_work_end: ''




    }])

    const fetchTenderDetails = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        setTender(data)
        return data;
    };

    console.log(selectedTender)
    const url = `https://school-project-production-459d.up.railway.app/v4/tender/tender/cancelled/${selectedTender?.tender_id}`

    const { data: tenderDetails } = useSWR([url, token], () => fetchTenderDetails(url, token));

    console.log('I dont know', tenderDetails)


    return (
        <section className='cancellation'>
            <BidderNav />
            <div className='cancellation__container'>
                <div className='cancellation__heading'>
                    <h1>reason for cancellation of tender</h1>
                </div>

                <div className='cancellation__body'>
                    <h2>Tender</h2>

                    <div className='cancellation__inner'>
                        <ul>
                            <li>
                                <b>Name of the Organization:</b> <span>{tender[0]?.name_of_organization}</span>
                            </li>
                            <li>
                                <b>GST Number:</b> 035468276265
                            </li>
                            <li>
                                <b>Tender ID:</b> {tender[0]?.tender_id}
                            </li>
                            {/*<li>
                                <b>Name of Bidder:</b> {tender[0]?.names}
    </li>*/}
                            <li>
                                <b>Amount:</b> <span>{tender?.amount || 'null'}</span>
                            </li>
                            <li>
                                <b>Duration:</b> {formatDate(tender[0]?.duration_of_work_start)} - {formatDate(tender[0]?.duration_of_work_end)}
                            </li>
                            <li>
                                <b>Status:</b>{' '}
                                <span>
                                    <b>{tender[0]?.status}</b>
                                </span>
                            </li>

                        </ul>
                        <div className='reasonBox' >
                            <p>Reason: </p>
                            <p className='reason' >{tender[0]?.reasons}</p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );

}

export default CancelReason