import React, { useEffect, useState } from 'react'
import './OrganizationNotification.css'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import { useNavigate } from 'react-router-dom'
import backArrow from '../../../assets/Shape.png';
import Notification from '../../../components/Notification/Notification';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import { CircularProgress } from '@mui/material';
import moment from 'moment';
import { format, } from 'date-fns'

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
    console.log(data)






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


    const [newData, setData] = useState([]);

    useEffect(() => {
        // Dummy data for demonstration
        const dummyData = [
            { id: 0, name: 'Item 0', date: '2024-04-02T12:00:00' },
            { id: 1, name: 'Item 1', date: '2024-04-01T12:00:00' },
            { id: 2, name: 'Item 2', date: '2022-01-10T15:00:00' },
            { id: 3, name: 'Item 3', date: '2022-01-11T10:00:00' },
            { id: 4, name: 'Item 4', date: '2022-01-11T14:00:00' },
            { id: 5, name: 'Item 5', date: '2022-01-12T09:00:00' },
        ];

        // Sort the data based on date
        dummyData.sort((a, b) => new Date(a.date) - new Date(b.date));

        // Group the sorted data by date
        const groupedData = groupDataByDate(dummyData);
        setData(groupedData);
    }, []);

    // Function to group data by date
    const groupDataByDate = (data) => {
        const groupedData = {};
        data.forEach(item => {
            const date = item.date.split('T')[0]; // Extract date without time
            if (!groupedData[date]) {
                groupedData[date] = [];
            }
            groupedData[date].push(item);
        });
        return groupedData;
    };



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

            <div>
                {Object.entries(newData).map(([date, items]) => {


                    const currentDate = moment();
                    const inputDate = date; // Parse input date with format

                    let displayDate;
                    if (currentDate.isSame(inputDate, 'day')) {
                        displayDate = 'Today';
                    } else if (currentDate.subtract(1, 'days').isSame(inputDate, 'day')) {
                        displayDate = 'Yesterday';
                    } else {
                        displayDate = inputDate;
                    }




                    return (
                        <div key={date}>
                            <p>{displayDate}</p>

                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}>{item.name}</li>
                                    // Render other item properties as needed
                                ))}
                            </ul>
                        </div>
                    )
                })}

            </div>

            {/*<Notification date='Today' />
        <Notification date='Yesterday' />*/}

        </div>

    )
}

export default OrganizationNotification