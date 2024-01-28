import React from 'react'
import './Notification.css'


import NotificationCard from './NotificationCard'

const Notification = ({ notification }) => {
    return (
        <div className='organizationNotification notificationBox' >
            <div className='todaysDate' >today</div>
            <NotificationCard notification={notification} />
            {/*<NotificationCard / >
            // <NotificationCard />*/}
        </div>
    )
}

export default Notification