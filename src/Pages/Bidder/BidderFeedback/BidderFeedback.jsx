import React, { useEffect, useState } from 'react'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { CircularProgress } from '@mui/material'

const BidderFeedback = () => {


  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const [feedbacks, setFeedbacks] = useState([])

  const user = useSelector(state => state.bidder.user)



  const { token } = user

  // const getFeedback = async () => {
  //   try {
  //     setIsLoading(true)
  //     const res = await fetch('https://school-project-production-459d.up.railway.app/V5/feedback', {
  //       method: 'GET',
  //       headers: {
  //         'Authorization': `${token}`,
  //         'Content-Type': 'application/json'
  //       },

  //     }
  //     )
  //     setIsLoading(false)
  //     const data = await res.json()
  //     setFeedbacks(data)
  //     // const data = await res.json();
  //   }
  //   catch (err) {
  //     setIsLoading(false)
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   getFeedback()
  // }, [])



  // let content = <CircularProgress color="primary" thickness={10} size={18} />

  // if (feedbacks?.length === 0) {
  //   content = null
  // }

  // else if (feedbacks?.length > 0) {
  //   content = feedbacks?.map((feedback, id) => {
  //     <p>{feedback?.comment}</p>
  //   })
  // }




  return (
    <div>
      <CompanyNav />
      <div className='feedback' >
        ppp
      </div>
    </div>
  )
}

export default BidderFeedback