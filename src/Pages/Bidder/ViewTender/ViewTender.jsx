import React from 'react'
import EvaluateTenderCard from '../../Organization/EvaluateTender/EvaluateTenderCard'
import BidderNav from '../../../components/BidderNav/Nav'

const ViewTender = () => {
    return (
        <div>
            <BidderNav />
            <div className='evaluateTender'>

                <h2 style={{ textAlign: 'center', marginBottom: '1rem' }} >VIEW TENDER</h2>

                <EvaluateTenderCard />
                <EvaluateTenderCard />
            </div>

        </div>
    )
}

export default ViewTender