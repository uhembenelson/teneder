import React from 'react'
import './EvaluateTender.css'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import EvaluateTenderCard from './EvaluateTenderCard'

const EvaluateTender = () => {
    return (
        <div>
            <CompanyNav />
            <div className='evaluateTender'>
                <EvaluateTenderCard />
                <EvaluateTenderCard />
            </div>

        </div>
    )
}

export default EvaluateTender