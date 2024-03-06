import React from 'react'
import BidderNav from '../../../components/BidderNav/Nav';
import { useSelector } from 'react-redux';

const CancelReason = () => {

    const selectedTender = useSelector(state => state.organization.selectedTender)

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
                                <b>Name of the Organization:</b> <span>{selectedTender?.name_of_organization}</span>
                            </li>
                            <li>
                                <b>GST Number:</b> 035468276265
                            </li>
                            <li>
                                <b>Tender ID:</b> {selectedTender?.tender_id}
                            </li>
                            <li>
                                <b>Name of Bidder:</b> {selectedTender?.names}
                            </li>
                            <li>
                                <b>Amount:</b> <span>0.90 ETH</span>
                            </li>
                            <li>
                                <b>Duration:</b> 26/10/2023 - 29/11/2023
                            </li>
                            <li>
                                <b>Status:</b>{' '}
                                <span>
                                    <b>Cancelled</b>
                                </span>
                            </li>

                        </ul>
                        <div className='reasonBox' >
                            <p>Reason: </p>
                            <p className='reason' >{selectedTender?.reasons}</p>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );

}

export default CancelReason