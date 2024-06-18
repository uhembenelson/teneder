import React, { useState } from 'react'
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
import { CircularProgress } from '@mui/material';

const BidTender = () => {
    const navigate = useNavigate()

    // Search functionality
    const [searchTerm, setSearchTerm] = useState('')

    const [filteredTenders, setFilteredTenders] = useState([])

    const [searchType, setSearchType] = useState('keyword')

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
        setFilteredTenders(data.reverse())
        return data;


    };
    const url = `https://school-project-production-459d.up.railway.app/v4/tender/tender`
    const { data } = useSWR([url, token], () => fetchTenders(url, token));
    console.log(data)


    const searchTenders = () => {

        let filteredTender = []
        if (searchType === 'keyword') {
            filteredTender = data?.filter(datum =>
                datum?.description_tender.toLocaleLowerCase()?.includes(searchTerm.toLocaleLowerCase())
            )
        }

        else if (searchType === 'type') {
            filteredTender = data?.filter(datum =>
                datum?.type_of_tender.toLocaleLowerCase()?.includes(searchTerm.toLocaleLowerCase())
            )
        }

        else if (searchType === 'date') {
            filteredTender = data?.filter(datum =>
                datum?.duration_of_bidding_end.replace(/-/g, '/')?.includes(searchTerm.toLocaleLowerCase())
            )
        }
        else if (searchType === 'tender_id') {
            filteredTender = data?.filter(datum =>
                datum?.tender_id.toLocaleLowerCase()?.includes(searchTerm.toLocaleLowerCase())
            )
        }


        setFilteredTenders(filteredTender)

    }

    let content = <div className='spinnerContainer' >
        <CircularProgress color="info" thickness={8} size={30} />
    </div>




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

                <h2 style={{
                    textAlign: 'center',
                    fontSize: '2rem',
                    marginBottom: '1rem'
                }} >BID TENDER</h2>




                < section className='table__body' >
                    <Search
                        setSearchType={setSearchType}
                        searchType={searchType}
                        searchTenders={searchTenders}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm} />
                    <table className='tender__table'>
                        <thead>
                            <th>tender description</th>
                            <th>type</th>
                            <th>bidding period</th>
                            <th>Bid</th>
                        </thead>

                        <tbody>
                            {
                                filteredTenders?.map((tender, id) => {
                                    return (
                                        <BidTenderCard tender={tender} id={id} key={id} />
                                    )
                                })
                            }


                        </tbody>
                    </table>
                </section>
            </div >
        </section >
    )
}

export default BidTender