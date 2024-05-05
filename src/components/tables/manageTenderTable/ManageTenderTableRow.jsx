import React, { useState, useEffect } from 'react'
import exportPdf from '../../../assets/Export Pdf.png';
import lightApprove from '../../../assets/approval-1.png';
import darkApprove from '../../../assets/Approval.png';
import { formatDate } from '../../../utilities/dateFormatter'

const ManageTenderTableRow = ({ datum, id, selectedCompany, selectABidder, handleChange, isBidderSelected }) => {

    const [pdfLink, setPdfLink] = useState('')

    useEffect(() => {

        fetch(`https://school-project-production-459d.up.railway.app/v3/download/${datum?.upload_document}`)
            .then(res => setPdfLink(res.url))

    }, [datum?.upload_document])

    return (
        <tr >
            <td>{id + 1} {datum?.name_of_company}</td>
            <td>{datum?.tender_id}</td>
            <td >
                <a href={pdfLink} style={{ display: 'flex', width: '100%', justifyContent: 'center' }} >

                    <img style={{ cursor: 'pointer' }}
                        src={exportPdf}
                        alt='exportPdf'
                    />
                </a>

            </td>
            <td>{formatDate(datum?.duration_of_work_start)}</td>
            <td style={{ cursor: 'pointer' }}>
                {selectedCompany !== datum.bidder_id && isBidderSelected ?
                    <form key={id} className='optionSelectParent' ><select
                        className='optionSelect'
                        onChange={e => handleChange(e.target.value)}
                        // value={reasons}
                        name='reason__cancellation'
                        id=''>
                        <option>
                            Non-Competitive Pricing
                        </option>
                        <option>Criterion Not Fullfiled </option>
                        <option>Less work experience</option>
                        <option>Incorrect-Documentation</option>
                        <option>Others</option>
                    </select>
                    </form>
                    :
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }} >
                        <img onClick={() => selectABidder(datum)}
                            src={selectedCompany === datum.bidder_id ? darkApprove : lightApprove}
                            alt='lightApprove'
                        />
                    </div>

                }
            </td>
        </tr>
    )
}

export default ManageTenderTableRow