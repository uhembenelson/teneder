import React, { useState } from 'react'
import './BidDetails.css'
import backArrow from '../../../assets/Shape.png';
import BidderNav from '../../../components/BidderNav/Nav'
import { useNavigate } from 'react-router-dom';
import Pdf from '../../../assets/Import Pdf.png'
import UploadForm from '../../../components/UploadForm/UploadForm';

const BidDetails = () => {

    const navigate = useNavigate()

    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div>
            {isModalOpen && <UploadForm closeModal={closeModal} />}
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
                            <p>YTL Corporation LTD.</p>
                        </div>
                        <div className='tenderDetailSmall' >
                            <p>T. Number  :</p>
                            <p>4567832 </p>
                        </div>
                        <div className='tenderDetailBig' >
                            <p>Description  :</p>
                            <p>Contractor. Procurement and construction of multistoried residential finished houses for economically weaker sections (ews).  </p>
                        </div>
                        <div className='tenderDetailBig' >
                            <p>Tender Motive :  </p>
                            <p>Bridge tender aims to unite cities, boost commerce, enhance transportation, and foster regional growth through connectivity.</p>
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
                            <p>21/03/2022 - 21/04/2022</p>
                        </div>
                        <div className='tenderDetailSmall' >
                            <p>Work Period :</p>
                            <p>31/04/2022 - 31/07/2022 </p>
                        </div>
                        <div className='tenderDetailBig' >
                            <p>Location   :</p>
                            <p>Panjim</p>
                        </div>
                        <div className='tenderDetailBig' >
                            <p>Type :  </p>
                            <p>Private</p>
                        </div>

                        <div className='tenderDetailBigAttach' >
                            <p>Attachments :  </p>
                            <div className='attachmentsContainer' >
                                <img src={Pdf} alt='' />
                                <p className='bidderImage' >Muncipality_Tender.pdf</p>
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
                                <p>Download</p>
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