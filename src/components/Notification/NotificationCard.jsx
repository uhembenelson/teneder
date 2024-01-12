import React from 'react'
import account from '../../assets/Account.png'
import fire from '../../assets/Fire.png'

const NotificationCard = () => {
    return (
        <div className='notificationCard' >
            <div className='notificationCardInner' >
                <img src={account} alt='' />
                <p><span className='notificationMain' >YTL Corporation LTD.</span><span className='notificationtext' >Just palced a bid for your tender</span></p>
                <img src={fire} alt='' />
            </div>

        </div>
    )
}

export default NotificationCard