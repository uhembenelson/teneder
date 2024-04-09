import React, { useState, useEffect } from 'react'
import BidderNav from '../../../components/BidderNav/Nav'
import backArrow from '../../../assets/Shape.png';
import { useNavigate } from 'react-router-dom'
import Notification from '../../../components/Notification/Notification'
import { useSelector } from 'react-redux';
import useSWR from 'swr';
import moment from 'moment';
import { toast } from 'react-toastify'
import { CircularProgress } from '@mui/material';

const BidderNotification = () => {

    const [newData, setData] = useState([]);

    const fetchAllNotifications = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;

    };

    const { token, bidder_id } = useSelector(state => state.bidder.user)
    const url = `https://school-project-production-459d.up.railway.app/v8/notification/${bidder_id}`


    const { data } = useSWR([url, token], () => fetchAllNotifications(url, token));
    // console.log(data)

    const deleteNotification = async () => {
        try {

            const res = await fetch(`https://school-project-production-459d.up.railway.app/v8/notification/${bidder_id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `${token}`
                }
            })

            const data = await res.json()
            console.log(data)

            if (res.ok) {
                toast.success(data, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: true,

                });
                const res = await fetch(url, {
                    method: 'GET',
                    headers: {
                        Authorization: `${token}`
                    }
                })

                const data = await res.json()
                console.log(data)
            }
            else {
                toast.error(data.error, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: true,

                });
            }
        }
        catch {

        }
    }




    let notification = <div className='spinnerContainer' >
        <CircularProgress color="info" thickness={8} size={30} />
    </div>

    if (typeof (data) === 'string') {
        notification = <p style={{ textAlign: 'center' }} >No new notifications</p>
    }

    else if (typeof (data) === 'object') {
        notification = data?.map(notification => {
            return (
                <Notification notification={notification} date='Today' />
            )
        })
    }

    let noOFNotifications = 0

    if (typeof (data) === 'string') {
        noOFNotifications = 0
    }
    else if (typeof (data) === 'object') {
        noOFNotifications = data?.length
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
                        <p >{noOFNotifications} notifications</p>

                    </div>
                    <p onClick={deleteNotification} className='markAsRead' >Clear Notifications</p>
                </div>
            </div>


            {
                notification
            }


        </div>
    )
}

export default BidderNotification