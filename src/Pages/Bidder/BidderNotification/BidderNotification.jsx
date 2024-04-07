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


    const { token, bidder_id } = useSelector(state => state.bidder.user)
    const url = `https://school-project-production-459d.up.railway.app/v8/notification/${bidder_id}`


    const { data } = useSWR([url, token], () => fetchAllNotifications(url, token));
    // console.log(data)

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

    useEffect(() => {


        // Sort the data based on date
        data?.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));

        // Group the sorted data by date
        const groupedData = groupDataByDate(data);

        setData(groupedData);
    }, [])

    const groupDataByDate = (data) => {
        const groupedData = {};
        data?.forEach(item => {
            const date = item.created_at?.split('T')[0]; // Extract date without time

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
                        <p >{data?.length} notifications</p>

                    </div>
                    <p onClick={deleteNotification} className='markAsRead' >Clear Notifications</p>
                </div>
            </div>
            <div>
                {Object.entries(newData).map(([date, items]) => {

                    // console.log(date)
                    const currentDate = moment();
                    const inputDate = date; // Parse input date with format
                    // console.log(inputDate)
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
                            <div className='todaysDate' ><p>{displayDate}</p></div>


                            {
                                notification
                            }
                        </div>
                    )
                })}

            </div>

            {/*
                notification
            */}


        </div>
    )
}

export default BidderNotification