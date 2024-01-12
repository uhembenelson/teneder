import React from 'react'
import './OrganizationHome.css'
import Image8 from '../../../assets/image 8.png'
import Image12 from '../../../assets/image 12.png'
import Image10 from '../../../assets/image 10.png'
import TopBidders from '../../../components/TopBidders/TopBidders'
import BidderDummy from '../../../components/BidderDummy/BidderDummy'
import { useNavigate } from 'react-router-dom'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import OrganizationDummy from '../../../components/OrganizationDummy/OrganizationDummy'
import TopCompanies from '../../../components/TopCompanies/TopCompanies'


const OrganizationHome = () => {
    const navigate = useNavigate()

    return (
        <div>
            <CompanyNav />
            <div className='BidderHome' >
                <div className='bidderHomeContainer' >
                    <h1 className='bidderHomeText' >Menu</h1>
                    <div className='bidderHomeCardList' >
                        <div className='bidderHomeCardContainer'>
                            <div className='bidderHomeCard organizationHomeCard' >
                                <img className='bidderHomeImage' src={Image8} alt='bidder' />

                            </div>
                            <div onClick={() => navigate('/organization/create-tender')} className='bidderCardBox organizationCardBox' ><p>Create Tender</p></div>
                        </div>
                        <div className='bidderHomeCardContainer'>
                            <div className='bidderHomeCard organizationHomeCard' >
                                <img className='bidderHomeImage' src={Image10} alt='bidder' />
                            </div>
                            <div onClick={() => navigate('/organization/manage-tender')} className='bidderCardBox organizationCardBox'><p>Manage Tender</p></div>
                        </div>
                        <div className='bidderHomeCardContainer'>

                            <div className='bidderHomeCard organizationHomeCard' >
                                <img className='bidderHomeImage' src={Image12} alt='bidder' />
                            </div>
                            <div className='bidderCardBox organizationCardBox'><p>Evaluate Tender</p></div>
                        </div>


                    </div>
                    <OrganizationDummy />

                    <h1 className='bidderHomeText' >Top Companies</h1>
                    <TopCompanies />
                </div>

            </div>
        </div>

    )
}

export default OrganizationHome