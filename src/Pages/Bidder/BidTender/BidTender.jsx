import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';

import backArrow from '../../../assets/Shape.png';
import cancel from '../../../assets/Multiplication.png';
import approval from '../../../assets/Approval.png';
import bidImage from '../../../assets/image 65.png';
import NotbidImage from '../../../assets/image 55.png';
import flag from '../../../assets/flag.png';
import location from '../../../assets/location.png';

// import darkApprove from '../../../assets/Approval.png';
import BidderNav from '../../../components/BidderNav/Nav';
import Search from '../../../components/Search/Search'
import { getTenderInfo } from '../../../Redux/Bidder/Action';
import BidTenderCard from './BidTenderCard';

const BidTender = () => {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const user = useSelector(state => state.bidder.user)
    const { token } = user

    const fetchTenders = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;


    };
    const url = `https://school-project-production-459d.up.railway.app/v4/tender/tender`
    const { data } = useSWR([url, token], () => fetchTenders(url, token));
    console.log(data)



    const TenderInfo = (data) => {
        dispatch(getTenderInfo(data))
        // if (Math.ceil((new Date(data?.duration_of_work) - presentDay) / (1000 * 60 * 60 * 24)) < 0) {
        //     return
        // }
        // else {
        navigate(`/bidder/bid-details/${data?.tender_id}`)
        // }


    }




    const concluded = <div>
        <p>Concluded</p>
        <img src={approval} alt='' />
    </div>


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
                            {
                                data?.map((tender, id) => {
                                    return (
                                        <BidTenderCard tender={tender} id={id} key={id} />
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </section>
            </div>
        </section>
    )
}

export default BidTender