import React, { useState } from 'react'
import './BidderHistory.css'
import pdf from '../../../assets/Import Pdf.png'
import { useSelector } from 'react-redux'
import checked from '../../../assets/Checked Checkbox.png'
import cancel from '../../../assets/Cancel Order.png'
import multiplication from '../../../assets/Multiplication.png'
import BidderNav from '../../../components/BidderNav/Nav'
import useSWR from 'swr'

const BidderHistory = () => {

    const [option, setOption] = useState('all')

    const fetchHistory = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;
    };

    const { token, bidder_id } = useSelector(state => state.bidder.user)



    const url = `https://school-project-production-459d.up.railway.app/V6/history/${bidder_id}`
    const completedUrl = `https://school-project-production-459d.up.railway.app/V6/history/complete/${bidder_id}`
    const cancelledUrl = `https://school-project-production-459d.up.railway.app/v6/history/cancelled/${bidder_id}`
    const ongoingUrl = `https://school-project-production-459d.up.railway.app/V6/history/ongoing/bidder/${bidder_id}`

    const { data: allHistory } = useSWR([url, token], () => fetchHistory(url, token));
    const { data: completedHistory } = useSWR([completedUrl, token], () => fetchHistory(completedUrl, token));
    const { data: ongoingHistory } = useSWR([ongoingUrl, token], () => fetchHistory(ongoingUrl, token));
    const { data: cancelledHistory } = useSWR([cancelledUrl, token], () => fetchHistory(cancelledUrl, token));


    // For each of the options in the select replace their respective table with it..






    let content = []

    if (option === 'all') {
        content = allHistory?.map(data => {
            return (
                <tr>
                    <td>{data.tender_id}</td>
                    <td>
                        {data.upload_document && <img className='pdfTable' src={pdf} alt='pdf' />}
                    </td>
                    <td>{data.name_of_company}</td>
                    <td>{data.ethVal}</td>
                    <td  >{data.status} {
                        (data.status === 'Completed' && <img className='tableDataImg' src={checked} alt='pdf' />)
                        || data.status === 'ongoing' && (<img className='tableDataImg ' src={cancel} alt='can' />)
                        || (data.status === 'Cancelled' && <img className='tableDataImg ' src={multiplication} alt='can' />)
                    }</td>
                </tr>

            )
        })
    }


    if (option === 'completed') {
        content = completedHistory?.map(data => {
            return (
                <tr>
                    <td>{data.tender_id}</td>
                    <td>
                        {data.upload_document && <img className='pdfTable' src={pdf} alt='pdf' />}
                    </td>
                    <td>{data.name_of_company}</td>
                    <td>{data.ethVal}</td>
                    <td  >{data.status} {
                        (data.status === 'Completed' && <img className='tableDataImg' src={checked} alt='pdf' />)
                        || data.status === 'ongoing' && (<img className='tableDataImg ' src={cancel} alt='can' />)
                        || (data.status === 'Cancelled' && <img className='tableDataImg ' src={multiplication} alt='can' />)
                    }</td>
                </tr>

            )
        })
    }

    if (option === 'cancelled') {
        content = cancelledHistory.map(data => {
            return (
                <tr>
                    <td>{data.tender_id}</td>
                    <td>
                        {data.upload_document && <img className='pdfTable' src={pdf} alt='pdf' />}
                    </td>
                    <td>{data.name_of_company}</td>
                    <td>{data.ethVal}</td>
                    <td  >{data.status} {
                        (data.status === 'Completed' && <img className='tableDataImg' src={checked} alt='pdf' />)
                        || data.status === 'ongoing' && (<img className='tableDataImg ' src={cancel} alt='can' />)
                        || (data.status === 'Cancelled' && <img className='tableDataImg ' src={multiplication} alt='can' />)
                    }</td>
                </tr>

            )
        })
    }

    if (option === 'ongoing') {
        content = ongoingHistory.map(data => {
            return (
                <tr>
                    <td>{data.tender_id}</td>
                    <td>
                        {data.upload_document && <img className='pdfTable' src={pdf} alt='pdf' />}
                    </td>
                    <td>{data.name_of_company}</td>
                    <td>{data.ethVal}</td>
                    <td  >{data.status} {
                        (data.status === 'Completed' && <img className='tableDataImg' src={checked} alt='pdf' />)
                        || data.status === 'ongoing' && (<img className='tableDataImg ' src={cancel} alt='can' />)
                        || (data.status === 'Cancelled' && <img className='tableDataImg ' src={multiplication} alt='can' />)
                    }</td>
                </tr>

            )
        })
    }



    return (
        <div>
            <BidderNav />
            <div className='BidderHistoryContainer' >
                <div className='historyHeader'>
                    <h1>History</h1>
                    <select className='bidderHistorySelect'
                        onChange={(event) => setOption(event.target.value)}
                        value={option}
                    >
                        <option value='all' >All</option>
                        <option value='cancelled' >Cancelled </option>
                        <option value='ongoing'>On-Going</option>
                        <option value='completed'>Completed </option>
                        <option value='rejected'>Rejected </option>

                    </select>
                </div>
                <table className='historyTable' >
                    <tr>
                        <th>TENDER ID</th>
                        <th>PROPOSAL</th>
                        <th>COMPANY</th>
                        <th>ETHURIUM VALUE</th>
                        <th>STATUS</th>
                    </tr>

                    {content}



                </table>

            </div>
        </div>

    )
}

export default BidderHistory

// < td > 650156</ >
//                 <td>
//
//                 </td>
//                 <td>Germany</td>