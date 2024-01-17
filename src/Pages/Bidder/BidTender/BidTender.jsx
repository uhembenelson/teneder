import React from 'react'
import { useNavigate } from 'react-router-dom';


import backArrow from '../../../assets/Shape.png';
import cancel from '../../../assets/Multiplication.png';
import approval from '../../../assets/Approval.png';
import bidImage from '../../../assets/image 65.png';
import NotbidImage from '../../../assets/image 55.png';
import flag from '../../../assets/flag.png';
import location from '../../../assets/location.png';


import BidderNav from '../../../components/BidderNav/Nav';
import Search from '../../../components/Search/Search'

const BidTender = () => {
    const navigate = useNavigate()
    return (
        <section>
            <BidderNav />

            {/* still giving them same class name as other table names to avoid too much styling */}
            <div className='table__container manage__container'>
                <div className='table__heading'>
                    <div className='arrowBack' onClick={() => navigate(-1)}>
                        <img
                            src={backArrow}
                            alt='backArrow'
                        />
                        <span>return</span>
                    </div>
                    <h2>BID TENDER</h2>
                </div>



                <section className='table__body'>
                    <Search />
                    <table className='tender__table'>
                        <thead>
                            <th>tender description</th>
                            <th>type</th>
                            <th>due date</th>
                            <th>Bid</th>
                        </thead>

                        <tbody>
                            <tr onClick={() => navigate('/bidder/bid-details/6')} >
                                <td >
                                    1. Contractor. Procurement and construction of multistoried
                                    residential finished houses for economically weaker sections
                                    (ews).
                                    <div className='table__inner'>
                                        <span>No. 4567832</span>
                                        <span>
                                            <img
                                                src={location}
                                                alt='location'
                                            />
                                            Panjim
                                        </span>

                                        <span>
                                            <img
                                                src={flag}
                                                alt='flag'
                                            />
                                            India
                                        </span>
                                    </div>
                                </td>
                                <td>Private</td>
                                <td>
                                    <p>22 Days to go</p>
                                    <p style={{ color: 'rgba(255, 122, 0, 1)' }}>15-Feb-2024</p>
                                </td>
                                <td>
                                    <img
                                        src={bidImage}
                                        alt='cancel'
                                    />

                                </td>
                            </tr>

                            <tr>
                                <td onClick={() => { navigate('/organization/manage-tender/table') }}>
                                    2. Management Services Of An Apartment House , opp district
                                    court.
                                    <div className='table__inner'>
                                        <span>No. 7899020 </span>
                                        <span>
                                            <img
                                                src={location}
                                                alt='location'
                                            />
                                            Mapusa
                                        </span>

                                        <span>
                                            <img
                                                src={flag}
                                                alt='flag'
                                            />
                                            India
                                        </span>
                                    </div>
                                </td>
                                <td>Government</td>
                                <td>
                                    <p>42 Days to go</p>
                                    <p style={{ color: 'rgba(255, 122, 0, 1)' }}>07-Mar-2024</p>
                                </td>
                                <td>

                                    <img
                                        src={bidImage}
                                        alt='cancel'
                                    />

                                </td>
                            </tr>

                            <tr>
                                <td onClick={() => { navigate('/organization/manage-tender/table') }}>
                                    3. Facility Management and Maintenance at the building of the
                                    ministry of communications and Multimedia Pernem. Plot no.
                                    234/2a/4
                                    <div className='table__inner'>
                                        <span>No. 48802666 </span>
                                        <span>
                                            <img
                                                src={location}
                                                alt='location'
                                            />
                                            Pernem
                                        </span>

                                        <span>
                                            <img
                                                src={flag}
                                                alt='flag'
                                            />
                                            India
                                        </span>
                                    </div>
                                </td>
                                <td>Government</td>
                                <td >
                                    <p>Concluded</p>
                                    <img
                                        src={approval}
                                        alt='approval'
                                    />
                                </td>
                                <td>

                                    <img
                                        src={NotbidImage}
                                        alt='approval'
                                    />

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </section>
    )
}

export default BidTender