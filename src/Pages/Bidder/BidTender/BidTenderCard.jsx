import React, { useState, useEffect } from 'react'
import { getTenderInfo } from '../../../Redux/Bidder/Action';
import { useDispatch } from 'react-redux';
import bidImage from '../../../assets/image 65.png';
import NotbidImage from '../../../assets/image 55.png';
import location from '../../../assets/location.png';
import moment from 'moment'
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utilities/dateFormatter';


const BidTenderCard = ({ tender, id }) => {

    const [canBid, setCanBid] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const TenderInfo = (tender) => {
        dispatch(getTenderInfo(tender))
        navigate(`/bidder/bid-details/${tender?.tender_id}`)
    }

    const presentDay = moment().format('L')
    const startDate = moment(tender?.duration_of_bidding_start).format('L')
    const endDate = moment(tender?.duration_of_bidding_end).format('L')

    useEffect(() => {
        if (presentDay >= startDate && presentDay <= endDate) {
            setCanBid(true)
        }
        else {
            setCanBid(false)
        }
    }, [presentDay, startDate, endDate])



    return (
        <tr key={tender?.tender_id}  >
            <td >
                {id + 1}. {tender?.description_tender}
                <div className='table__inner'>
                    <span>no. {tender?.tender_id}</span>
                    <span>
                        <img
                            src={location}
                            alt='location'
                        />
                        {tender?.state}
                    </span>

                    {/*<span>
                        <img
                            src={flag}
                            alt='flag'
                        />
                        India
            </span>*/}
                </div>
            </td>
            <td>{tender?.type_of_tender}</td>
            <td>
                {formatDate(tender?.duration_of_bidding_start)} - {formatDate(tender?.duration_of_bidding_end)}
                {/*daysRemaining > 0 ? <p>{daysRemaining} <span> days to go</span></p> : concluded*/}
                {/*Math.ceil((new Date(tender?.duration_of_work) - presentDay) / (1000 * 60 * 60 * 24)) > 0 && <p style={{ color: 'rgba(255, 122, 0, 1)' }}>15-Feb-2024</p>*/}
            </td>
            <td>

                {canBid ? <div style={{ display: 'flex', width: '100%', justifyContent: 'center', cursor: 'pointer' }} >
                    <img
                        onClick={() => TenderInfo(tender)}
                        src={bidImage}
                        alt='cancel'
                    />
                </div>
                    :
                    <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
                        <img
                            src={NotbidImage}
                            alt='cancel'
                        />
                    </div>}





            </td>
        </tr >
    )
}

export default BidTenderCard