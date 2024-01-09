import React, { useState } from 'react'
import './BidderHistory.css'
import pdf from '../../../assets/Import Pdf.png'

import checked from '../../../assets/Checked Checkbox.png'
import cancel from '../../../assets/Cancel Order.png'
import multiplication from '../../../assets/Multiplication.png'
import BidderNav from '../../../components/BidderNav/Nav'

const BidderHistory = () => {

    const [option, setOption] = useState('all')

    const completeData = [
        {
            id: 0,
            tenderId: 650156,
            hasDoc: true,
            company: 'YTL Corporation LTD.',
            ethVal: '0.03 ETH',
            reason: 'Completed'

        },
        {
            id: 1,
            tenderId: 650156,
            hasDoc: true,
            company: 'YTL Corporation LTD.',
            ethVal: '0.03 ETH',
            reason: 'Completed'

        },
        {
            id: 2,
            tenderId: 650156,
            hasDoc: true,
            company: 'YTL Corporation LTD.',
            ethVal: '0.03 ETH',
            reason: 'Completed'

        },
        {
            id: 3,
            tenderId: 650156,
            hasDoc: true,
            company: 'YTL Corporation LTD.',
            ethVal: '0.03 ETH',
            reason: 'Completed'

        },
    ]

    const rejectedData = [
        {
            id: 0,
            tenderId: 650156,
            hasDoc: true,
            company: 'YTL Corporation LTD.',
            ethVal: '0.03 ETH',
            reason: 'Rejected'

        },
        {
            id: 1,
            tenderId: 650156,
            hasDoc: true,
            company: 'YTL Corporation LTD.',
            ethVal: '0.03 ETH',
            reason: 'Rejected'

        },
        {
            id: 2,
            tenderId: 650156,
            hasDoc: true,
            company: 'YTL Corporation LTD.',
            ethVal: '0.03 ETH',
            reason: 'Rejected'

        },

    ]

    const tableData = [
        {
            id: 0,
            tenderId: 650156,
            hasDoc: true,
            company: 'YTL Corporation LTD.',
            ethVal: '0.03 ETH',
            reason: 'Completed'

        },
        {
            id: 1,
            tenderId: 650156,
            hasDoc: true,
            company: 'YTL Corporation LTD.',
            ethVal: '0.03 ETH',
            reason: 'Cancelled'

        },
        {
            id: 2,
            tenderId: 650156,
            hasDoc: true,
            company: 'YTL Corporation LTD.',
            ethVal: '0.03 ETH',
            reason: 'Completed'

        },
        {
            id: 3,
            tenderId: 650156,
            hasDoc: true,
            company: 'YTL Corporation LTD.',
            ethVal: '0.03 ETH',
            reason: 'Completed'

        },
        {
            id: 4,
            tenderId: 650156,
            hasDoc: true,
            company: 'YTL Corporation LTD.',
            ethVal: '0.03 ETH',
            reason: 'Rejected'

        },
    ]

    // For each of the options in the select replace their respective table with it..


    // something like, c

    let content = tableData.map(data => {
        return (
            <tr>
                <td>{data.tenderId}</td>
                <td>
                    {data.hasDoc && <img className='pdfTable' src={pdf} alt='pdf' />}
                </td>
                <td>{data.company}</td>
                <td>{data.ethVal}</td>
                <td  >{data.reason} {
                    (data.reason === 'Completed' && <img className='tableDataImg' src={checked} alt='pdf' />)
                    || data.reason === 'Rejected' && (<img className='tableDataImg ' src={cancel} alt='can' />)
                    || (data.reason === 'Cancelled' && <img className='tableDataImg ' src={multiplication} alt='can' />)
                }</td>
            </tr>

        )
    })

    if (option === 'completed') {
        content = completeData.map(data => {
            return (
                <tr>
                    <td>{data.tenderId}</td>
                    <td>
                        {data.hasDoc && <img className='pdfTable' src={pdf} alt='pdf' />}
                    </td>
                    <td>{data.company}</td>
                    <td>{data.ethVal}</td>
                    <td  >{data.reason} {
                        (data.reason === 'Completed' && <img className='tableDataImg' src={checked} alt='pdf' />)
                        || data.reason === 'Rejected' && (<img className='tableDataImg ' src={cancel} alt='can' />)
                        || (data.reason === 'Cancelled' && <img className='tableDataImg ' src={multiplication} alt='can' />)
                    }</td>
                </tr>

            )
        })
    }

    if (option === 'rejected') {
        content = rejectedData.map(data => {
            return (
                <tr>
                    <td>{data.tenderId}</td>
                    <td>
                        {data.hasDoc && <img className='pdfTable' src={pdf} alt='pdf' />}
                    </td>
                    <td>{data.company}</td>
                    <td>{data.ethVal}</td>
                    <td  >{data.reason} {
                        (data.reason === 'Completed' && <img className='tableDataImg' src={checked} alt='pdf' />)
                        || data.reason === 'Rejected' && (<img className='tableDataImg ' src={cancel} alt='can' />)
                        || (data.reason === 'Cancelled' && <img className='tableDataImg ' src={multiplication} alt='can' />)
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
                        <option value='all' >Search Filters</option>
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