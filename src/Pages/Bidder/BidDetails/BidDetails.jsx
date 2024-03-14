import React, { useEffect, useState } from 'react'
import './BidDetails.css'
import backArrow from '../../../assets/Shape.png';
import BidderNav from '../../../components/BidderNav/Nav'
import { useNavigate } from 'react-router-dom';
import Pdf from '../../../assets/Import Pdf.png'
import UploadForm from '../../../components/UploadForm/UploadForm';
import { formatDate } from '../../../utilities/dateFormatter';
import { useSelector } from 'react-redux';

const BidDetails = () => {



    const navigate = useNavigate()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [doc, setDoc] = useState(null)

    const tenderDetails = useSelector(state => state.bidder.tenderInfo)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    useEffect(() => {
        fetch(`https://school-project-production-459d.up.railway.app/v3/download/${tenderDetails?.appendices}`)
            .then(res => setDoc(res.url))
    }, [tenderDetails])


    formatDate(tenderDetails?.duration_of_bidding_end)


    return (
        <div>
            {isModalOpen && <UploadForm tender_id={tenderDetails.tender_id} closeModal={closeModal} />}
            <BidderNav />
            <div className='bidDetailsContainer'>
                <div className='bidDetail__heading'>
                    <div onClick={() => navigate(-1)} className='backArrow'>
                        <img
                            src={backArrow}
                            alt='backArrow'
                        />
                        <span>return</span>
                    </div>
                    <h2>Bid Details</h2>
                </div>
                <div className='tenderDetailsContainer' >
                    <div className='tenderDetailsHeaderBox' >
                        <h2>Tender Details</h2>
                    </div>
                    <div className='tenderDetailsContentBox' >

                        <div className='tenderDetailSmall' >
                            <p>Organization : </p>
                            <p>{tenderDetails?.name_of_organization}</p>
                        </div>
                        <div className='tenderDetailSmall locBox' >
                            <p>T. Number  :</p>
                            <p>{tenderDetails?.tender_id} </p>
                        </div>
                        <div className='tenderDetailBig' >
                            <p>Description  :</p>
                            <p>{tenderDetails?.description_tender}</p>
                        </div>
                        <div className='tenderDetailBig' >
                            <p>Tender Motive :  </p>
                            <p>{tenderDetails?.tender_motive}</p>
                        </div>
                    </div>
                </div>

                <div className='tenderDetailsContainer' >
                    <div className='tenderDetailsHeaderBox' >
                        <h2>Key Values</h2>
                    </div>
                    <div className='tenderDetailsContentBox' >

                        <div className='tenderDetailSmall' >
                            <p>Bidding Period  : </p>
                            <p>{formatDate(tenderDetails?.duration_of_bidding_start)} - {formatDate(tenderDetails?.duration_of_bidding_end)}</p>
                        </div>
                        <div className='tenderDetailSmall' >
                            <p>Work Period :</p>
                            <p>{formatDate(tenderDetails?.duration_of_work_start)} - {formatDate(tenderDetails?.duration_of_work_end)} </p>
                        </div>
                        <div className='tenderDetailBig locBox' >
                            <p>Location   :</p>
                            <p>{tenderDetails?.state}</p>
                        </div>
                        <div className='tenderDetailBig locBox' >
                            <p>Type :  </p>
                            <p>{
                                tenderDetails?.type_of_tender}</p>
                        </div>

                        <div className='tenderDetailBigAttach' >
                            <p>Attachments :  </p>
                            <div className='attachmentsContainer' >
                                <img src={Pdf} alt='' />
                                <p className='bidderImage' >{tenderDetails?.appendices}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='tenderDetailsContainer' >
                    <div className='tenderDocContainer' >
                        <h2>Tender Documents</h2>

                        <div className='tenderDocOptionsContainer' >
                            <h4>NIT : </h4>
                            <div className='tenderDocDownloadContainer' >
                                <a href={doc} className='downloadOpt' >
                                    Download
                                </a>

                                <p onClick={openModal} >Upload</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BidDetails