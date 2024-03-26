import React, { useEffect, useState } from 'react'
import './OrganizationNotification.css'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import { useNavigate } from 'react-router-dom'
import backArrow from '../../../assets/Shape.png';
import Notification from '../../../components/Notification/Notification';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import { CircularProgress } from '@mui/material';

const OrganizationNotification = () => {

    const [isLoading, setIsLoading] = useState(false)


    const fetchNotification = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;
    };

    const { token, organization_id } = useSelector(state => state.organization.user)
    const url = `https://school-project-production-459d.up.railway.app/v8/notification/organization/${organization_id}`


    const { data } = useSWR([url, token], () => fetchNotification(url, token));
    console.log(typeof (data))






    let content = <div className='spinnerContainer' >
        <CircularProgress color="info" thickness={8} size={30} />
    </div>



    if (typeof (data) === 'string') {
        content = <p style={{ textAlign: 'center' }} >No new notifications</p>
    }

    else if (typeof (data) === 'object') {
        content = data?.map(notification => {
            return (
                <Notification key={notification.notification_id} notification={notification} />
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
            <CompanyNav />
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
                    <p className='markAsRead' >Clear notifications</p>
                </div>
            </div>
            {
                content
            }
            {/*<Notification date='Today' />
        <Notification date='Yesterday' />*/}

        </div>

    )
}

export default OrganizationNotification