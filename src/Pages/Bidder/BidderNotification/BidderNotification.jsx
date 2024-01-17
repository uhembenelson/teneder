import React from 'react'
import BidderNav from '../../../components/BidderNav/Nav'
import backArrow from '../../../assets/Shape.png';
import { useNavigate } from 'react-router-dom'
import Notification from '../../../components/Notification/Notification'

const BidderNotification = () => {

    const navigate = useNavigate()
    return (
        <div>
            <BidderNav />
            <div className='organizationNotification' >
                <div className='notificationTopContainer' >
                    <div className='arrowBack' onClick={() => navigate(-1)}>
                        <img
                            src={backArrow}
                            alt='backArrow'
                        />
                        <span>return</span>
                    </div>
                    <p>Notification</p>
                </div>
                <div className='mark' >
                    <div className='markAll'>
                        <p >4 Unread</p>

                    </div>
                    <p className='markAsRead' >Mark As Read</p>
                </div>
            </div>
            <Notification date='Today' />
            <Notification date='Yesterday' />
        </div>
    )
}

export default BidderNotification