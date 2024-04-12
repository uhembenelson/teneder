import React from 'react'
import { getTenderInfo } from '../../../Redux/Bidder/Action';
import { useDispatch } from 'react-redux';
import bidImage from '../../../assets/image 65.png';
import NotbidImage from '../../../assets/image 55.png';
import flag from '../../../assets/flag.png';
import location from '../../../assets/location.png';
import approval from '../../../assets/Approval.png';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../utilities/dateFormatter';


const BidTenderCard = ({ tender, id }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const TenderInfo = (tender) => {

        dispatch(getTenderInfo(tender))
        // if (daysRemaining < 0) {
        //     return
        // }
        // else {
        navigate(`/bidder/bid-details/${tender?.tender_id}`)
        // }


    }

    // const presentDay = new Date();

    // const targetDate = new Date(tender?.duration_of_work);

    // const timeDifference = targetDate - presentDay;
    // console.log(targetDate)

    // const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    // console.log(daysRemaining)


    // const concluded = <div>
    //     <p>Concluded</p>
    //     <img src={approval} alt='' />
    // </div>






    return (
        <tr key={tender?.tender_id}  >
            <td >
                {id + 1}. {tender?.
                    description_tender
                }
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
                {formatDate(tender?.duration_of_bidding_end)}
                {/*daysRemaining > 0 ? <p>{daysRemaining} <span> days to go</span></p> : concluded*/}
                {/*Math.ceil((new Date(tender?.duration_of_work) - presentDay) / (1000 * 60 * 60 * 24)) > 0 && <p style={{ color: 'rgba(255, 122, 0, 1)' }}>15-Feb-2024</p>*/}
            </td>
            <td>

                {/*daysRemaining > 0 ? <img
                        src={bidImage}
                        alt='cancel'
                /> :*/}
                <img
                    onClick={() => TenderInfo(tender)}
                    src={NotbidImage}
                    alt='cancel'
                />



            </td>
        </tr >
    )
}

export default BidTenderCard