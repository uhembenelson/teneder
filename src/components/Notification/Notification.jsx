import React from 'react'
import './Notification.css'


import NotificationCard from './NotificationCard'

const Notification = ({ date }) => {
    return (
        <div className='organizationNotification notificationBox' >
            <div className='todaysDate' >{date}</div>
            <NotificationCard />
            <NotificationCard />
            <NotificationCard />
        </div>
    )
}

export default Notification