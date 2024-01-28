import React from 'react'
import account from '../../assets/Account.png'
import fire from '../../assets/Fire.png'

const NotificationCard = ({ notification }) => {
    return (
        <div className='notificationCard' >
            <div className='notificationCardInner' >
                <img src={account} alt='' />
                <p><span className='notificationMain' >{notification?.name_of_company} </span><span className='notificationtext' >{notification?.notification_message}</span></p>
                <img src={fire} alt='' />
            </div>

        </div>
    )
}

export default NotificationCard