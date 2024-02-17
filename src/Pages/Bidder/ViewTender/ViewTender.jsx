import React from 'react'
import EvaluateTenderCard from '../../Organization/EvaluateTender/EvaluateTenderCard'
import BidderNav from '../../../components/BidderNav/Nav'
import useSWR from 'swr';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@mui/material';

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

    const { token, bidder_id } = useSelector(state => state.bidder.user)
    const url = `https://school-project-production-459d.up.railway.app/v4/tender/tender/document/${bidder_id}`


    const { data } = useSWR([url, token], () => fetchAllBidApplicants(url, token));
    console.log(data)

    let content = <div className='spinnerContainer' >
        <CircularProgress color="info" thickness={8} size={30} />
    </div>

    if (data?.length > 0) {
        content = data?.map(datum => {
            return (
                <EvaluateTenderCard key={datum.tender_id} data={datum} />
            )
        })
    }
    else if (data?.length === 0) {
        content = <div className='spinnerContainer' ><p>No Tender found </p></div>
    }

    return (
        <div>
            <BidderNav />
            <div className='evaluateTender'>

                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }} >VIEW TENDER</h2>

                {
                    content
                }



            </div>

        </div>
    )
}

export default ViewTender