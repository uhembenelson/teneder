import React from 'react'
import BidderNav from '../../../components/BidderNav/Nav'
import backArrow from '../../../assets/Shape.png';
import { useNavigate } from 'react-router-dom'
import Notification from '../../../components/Notification/Notification'
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import { CircularProgress } from '@mui/material';

const BidderNotification = () => {



    const fetchAllNotifications = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;

    };

    const { token } = useSelector(state => state.bidder.user)
    const url = 'https://school-project-production-459d.up.railway.app/v8/notification'


    const { data } = useSWR([url, token], () => fetchAllNotifications(url, token));
    console.log(data)

    let notification = <div className='spinnerContainer' >
        <CircularProgress color="info" thickness={8} size={30} />
    </div>

    if (data?.length > 0) {
        notification = data?.map(notification => {
            return (
                <Notification notification={notification} date='Today' />
            )
        })
    }
    else if (data?.length === 0) {
        notification = <div className='spinnerContainer' ><p>No Notification found </p></div>
    }

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
                        <p >{data?.length} Unread</p>

                    </div>
                    <p className='markAsRead' >Mark As Read</p>
                </div>
            </div>
            {
                notification
            }


        </div>
    )
}

export default BidderNotification