import React from 'react'
import EvaluateTenderCard from '../../Organization/EvaluateTender/EvaluateTenderCard'
import BidderNav from '../../../components/BidderNav/Nav'
import useSWR from 'swr';
import { useSelector } from 'react-redux';

const ViewTender = () => {


    const fetchAllBidApplicants = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;
    };

    const { token } = useSelector(state => state.bidder.user)
    const url = `https://school-project-production-459d.up.railway.app/v4/tender/tender/document`


    const { data } = useSWR([url, token], () => fetchAllBidApplicants(url, token));


    return (
        <div>
            <BidderNav />
            <div className='evaluateTender'>

                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }} >VIEW TENDER</h2>

                {
                    data?.map(datum => {
                        <EvaluateTenderCard key={datum.tender_id} datum={data} />
                    })
                }



            </div>

        </div>
    )
}

export default ViewTender