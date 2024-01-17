import React from 'react'
import './BidderHome.css'
import Image11 from '../../../assets/image 11.png'
import Image12 from '../../../assets/image 13 (1).png'
import Image10 from '../../../assets/image 10.png'
import TopBidders from '../../../components/TopBidders/TopBidders'
import BidderDummy from '../../../components/BidderDummy/BidderDummy'
import BidderNav from '../../../components/BidderNav/Nav'
import { useNavigate } from 'react-router-dom'


const BidderHome = () => {
    const navigate = useNavigate()

    return (
        <div>
            <BidderNav />
            <div className='BidderHome' >
                <div className='bidderHomeContainer' >
                    <h1 className='bidderHomeText' >Menu</h1>
                    <div className='bidderHomeCardList' >
                        <div className='bidderHomeCardContainer'>
                            <div className='bidderHomeCard ' >
                                <img className='bidderHomeImage' src={Image11} alt='bidder' />

                            </div>
                            <div onClick={() => navigate('/bidder/bid-tender')} className='bidderCardBox' ><p>Bid Tender</p></div>
                        </div>
                        <div className='bidderHomeCardContainer'>
                            <div className='bidderHomeCard ' >
                                <img className='bidderHomeImage' src={Image12} alt='bidder' />
                            </div>
                            <div onClick={() => navigate('/bidder/approve')} className='bidderCardBox'><p>Approval Check</p></div>
                        </div>
                        <div className='bidderHomeCardContainer'>

                            <div className='bidderHomeCard ' >
                                <img className='bidderHomeImage' src={Image10} alt='bidder' />
                            </div>
                            <div onClick={() => navigate('/bidder/view-tender')} className='bidderCardBox'><p>View Tender</p></div>
                        </div>


                    </div>
                    <BidderDummy />

                    <h1 className='bidderHomeText' >Top Companies</h1>
                    <TopBidders />
                </div>

            </div>
        </div>

    )
}

export default BidderHome