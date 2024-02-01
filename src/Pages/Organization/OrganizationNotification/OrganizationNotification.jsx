import React, { useEffect } from 'react'
import './OrganizationNotification.css'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import { useNavigate } from 'react-router-dom'
import backArrow from '../../../assets/Shape.png';
import Notification from '../../../components/Notification/Notification';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';

const OrganizationNotification = () => {



    const fetchNotification = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;
    };

    const { token } = useSelector(state => state.organization.user)
    const url = 'https://school-project-production-459d.up.railway.app/v8/notification/organization'


    const { data, error } = useSWR([url, token], () => fetchNotification(url, token));


    console.log(data)


    let content = null
    if (data?.length > 0) {
        content = data?.map(notification => {
            return (
                <Notification key={notification.notification_id} notification={notification} />
            )
        })
    }
    else {
        content = <p style={{ textAlign: 'center' }} >No new notifications</p>
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
                        <p >{data?.length} Unread</p>

                    </div>
                    <p className='markAsRead' >Mark As Read</p>
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