import React, { useState } from 'react'

import pdf from '../../../assets/Import Pdf.png'
import useSWR from 'swr'
import { useSelector } from 'react-redux'
import checked from '../../../assets/Checked Checkbox.png'
import cancel from '../../../assets/Cancel Order.png'
import multiplication from '../../../assets/Multiplication.png'
import BidderNav from '../../../components/BidderNav/Nav'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'

const OrganizationHistory = () => {

    const [option, setOption] = useState('all')

    const fetchHistory = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `Bearer ${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;
    };

    const { token, organization_id } = useSelector(state => state.organization.user)
    const url = `https://school-project-production-459d.up.railway.app/V7/organization/history/${organization_id}`
    const completedUrl = `https://school-project-production-459d.up.railway.app/V7/organization/complete/${organization_id}`
    const cancelledUrl = `https://school-project-production-459d.up.railway.app/V7/organization/cancelled/${organization_id}`
    const ongoingUrl = `https://school-project-production-459d.up.railway.app/V7/organization/ongoing/${organization_id}`


    const { data: allHistory } = useSWR([url, token], () => fetchHistory(url, token));
    const { data: completedHistory } = useSWR([completedUrl, token], () => fetchHistory(completedUrl, token));
    const { data: ongoingHistory } = useSWR([ongoingUrl, token], () => fetchHistory(ongoingUrl, token));
    const { data: cancelledHistory } = useSWR([cancelledUrl, token], () => fetchHistory(cancelledUrl, token));


    // For each of the options in the select replace their respective table with it..

    console.log(allHistory)
    console.log(cancelledHistory)
    console.log(ongoingHistory)
    console.log(completedHistory)


    let content = null
    if (option === 'all') {
        content = allHistory?.map(data => {
            return (
                <tr>
                    <td>{data.tender_id}</td>
                    <td>
                        {data.aadhar_card && <img className='pdfTable' src={pdf} alt='pdf' />}
                    </td>
                    <td>{data.name_of_company}</td>
                    <td>{data.ethereum_value
                    }</td>
                    <td  >{data.status} {
                        (data.status === 'completed' && <img className='tableDataImg' src={checked} alt='pdf' />)
                        || data.status === 'rejected' && (<img className='tableDataImg ' src={cancel} alt='can' />)
                        || (data.status === 'cancelled' && <img className='tableDataImg ' src={multiplication} alt='can' />)
                    }</td>
                </tr>

            )
        })

    }

    if (option === 'completed') {
        content = completedHistory?.map(data => {
            return (
                <tr>
                    <td>{data?.organization_id}</td>
                    <td>
                        {data?.aadhar_card && <img className='pdfTable' src={pdf} alt='pdf' />}
                    </td>
                    <td>{data?.name_of_company}</td>
                    <td>{data?.ethereum_value
                    }</td>
                    <td  >{data?.status} {
                        (data?.status === 'completed' && <img className='tableDataImg' src={checked} alt='pdf' />)
                        || data?.status === 'ongoing' && (<img className='tableDataImg ' src={cancel} alt='can' />)
                        || (data?.status === 'cancelled' && <img className='tableDataImg ' src={multiplication} alt='can' />)
                    }</td>
                </tr>

            )
        })
    }

    if (option === 'cancelled') {
        content = cancelledHistory?.map(data => {
            return (
                <tr>
                    <td>{data.tender_id}</td>
                    <td>
                        {data.aadhar_card && <img className='pdfTable' src={pdf} alt='pdf' />}
                    </td>
                    <td>{data.name_of_company}</td>
                    <td>{data.ethereum_value
                    }</td>
                    <td  >{data.status} {
                        (data.status === 'completed' && <img className='tableDataImg' src={checked} alt='pdf' />)
                        || data.status === 'rejected' && (<img className='tableDataImg ' src={cancel} alt='can' />)
                        || (data.status === 'cancelled' && <img className='tableDataImg ' src={multiplication} alt='can' />)
                    }</td>
                </tr>

            )
        })
    }

    if (option === 'ongoing') {
        content = ongoingHistory?.map(data => {
            return (
                <tr>
                    <td>{data.organization_id}</td>
                    <td>
                        {data.aadhar_card && <img className='pdfTable' src={pdf} alt='pdf' />}
                    </td>
                    <td>{data.name_of_company}</td>
                    <td>{data.ethereum_value
                    }</td>
                    <td  >{data.status} {
                        (data.status === 'completed' && <img className='tableDataImg' src={checked} alt='pdf' />)
                        || data.status === 'ongoing' && (<img className='tableDataImg ' src={cancel} alt='can' />)
                        || (data.status === 'cancelled' && <img className='tableDataImg ' src={multiplication} alt='can' />)
                    }</td>
                </tr>

            )
        })
    }
    // else {
    //     content = <div className='emptyStateContainer' ><p style={{ textAlign: 'center', marginTop: '2rem' }} >No Data yet</p></div>
    // }



    return (
        <div>
            <CompanyNav />
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

export default OrganizationHistory

// < td > 650156</ >
//                 <td>
//
//                 </td>
//                 <td>Germany</td>