import { useNavigate } from 'react-router-dom';


import backArrow from '../../../assets/Shape.png';
import cancel from '../../../assets/Multiplication.png';
import approval from '../../../assets/Approval.png';
import flag from '../../../assets/flag.png';
import location from '../../../assets/location.png';
import useSWR from 'swr';
import { useSelector } from 'react-redux';

import BidderNav from '../../../components/BidderNav/Nav';
import Search from '../../../components/Search/Search'

function ApproveTender() {


    const navigate = useNavigate()

    const fetchAllBidApplicants = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;

    };

    const { token, bidder_id } = useSelector(state => state.bidder.user)
    const url = `https://school-project-production-459d.up.railway.app/v4/tender/tender/document/${bidder_id}`


    const { data } = useSWR([url, token], () => fetchAllBidApplicants(url, token));
    console.log(data)



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
                    <h2>APPROVAL CHECK</h2>
                </div>



                <section className='table__body'>
                    <Search />
                    <table className='tender__table'>
                        <thead>
                            <th>tender description</th>
                            <th>type</th>
                            <th>organization Name</th>
                            <th>status</th>
                        </thead>

                        <tbody>
                            <tr onClick={() => navigate('/bidder/approval/6')} >
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
                                    Panjim Muncipal
                                    Council
                                </td>
                                <td>
                                    REJECTED
                                    <br />

                                    <img
                                        src={cancel}
                                        alt='cancel'
                                    />

                                </td>
                            </tr>

                            <tr>
                                <td onClick={() => { navigate('/bidder/approval/4') }}>
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
                                <td>Quadros Motors
                                </td>
                                <td>

                                    REJECTED
                                    <br />
                                    <img
                                        src={cancel}
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
                                    Mormugao Muncipal Council
                                </td>
                                <td>
                                    SELECTED
                                    <br />
                                    <img
                                        src={approval}
                                        alt='approval'
                                    />

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        </section>
    );
}

export default ApproveTender;
