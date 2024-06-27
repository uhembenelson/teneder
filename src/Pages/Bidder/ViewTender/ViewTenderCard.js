import React from 'react'
// import { Box, CircularProgress } from '@mui/material'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import externalLink from '../../../assets/External Link.png'
import { selectTenderBidder } from '../../../Redux/Bidder/Action';
import { selectTender, selectBidder } from '../../../Redux/Organization/Action';
import sad from '../../../assets/Sad.png'

const ViewTenderCard = ({ user }) => {

    const dispatch = useDispatch()

    console.log(user)

    let percentage = 0;
    let color = 'rgb(62, 152, 199)'
    if (data?.contract_status === 'completed') {
        percentage = 100
    }
    else if (data?.contract_status === 'ongoing') {
        percentage = 66
    }
    else if (data?.contract_status === 'Result pending') {
        percentage = 0
    }
    else if (data?.contract_status === 'result pending') {
        percentage = 0
    }
    else if (data?.contract_status === 'Result not out yet') {
        percentage = 0
    }
    else {
        percentage = 100;
        color = 'red'
    }

    let status = <span className='complete'>  COMPLETE</span>
    if (data?.contract_status === 'cancelled') {
        status = <span className='cancelled'>  CANCELLED</span>
    }
    else if (data?.contract_status === 'ongoing') {
        status = <span className='ongoing'>  ONGOING</span>
    }
    else if (data?.contract_status === 'result pending') {
        status = <span className='ongoing'>  PENDING</span>
    }
    else if (data?.contract_status === 'Result pending') {
        status = <span className='ongoing'>  PENDING</span>
    }

    else if (data?.contract_status === 'Result not out yet') {
        status = <span className='ongoing'>  PENDING</span>
    }
    else if (data?.contract_status === 'complete') {
        status = <span className='ongoing'>  COMPLETE</span>
    }

    const provideFeedback = () => {
        dispatch(selectTenderBidder(data))

        if (user === 'bidder') {
            navigate(`/bidder/feedback/${data?.tender_id}`)
            return
        }
        else {
            dispatch(selectBidder(data))
            navigate(`/organization/feedback/${data?.tender_id}`)
        }


    }

    const handleSmartContract = () => {
        dispatch(selectTenderBidder(data))
        if (user === 'bidder') {
            navigate(`/bidder/view-tender/${data?.tender_id}`)
            return
        }
        else {
            dispatch(selectTender(data))
            navigate(`/organization/smart-contract/${data?.tender_id}`)
        }

    }

    const provideReasons = () => {
        dispatch(selectTender(data))
        if (user === 'bidder') {
            navigate(`/bidder/view-tender/${data?.tender_id}`)
            return
        }
        else {

            navigate('/organization/cancel-tender')
        }


    }

    let button = <button onClick={provideFeedback} className='evalButton' > PROVIDE FEEDBACK <svg width="20" height="20" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.2647 1.29994C17.4144 0.839288 18.0661 0.839288 18.2158 1.29994L21.5305 11.5016C21.7313 12.1196 22.3072 12.538 22.9571 12.538H33.6837C34.168 12.538 34.3694 13.1579 33.9776 13.4426L25.2996 19.7475C24.7738 20.1295 24.5538 20.8065 24.7546 21.4246L28.0694 31.6262C28.219 32.0868 27.6918 32.4699 27.2999 32.1852L18.6219 25.8802C18.0962 25.4983 17.3843 25.4983 16.8586 25.8802L8.18053 32.1852C7.78868 32.4699 7.26144 32.0868 7.41111 31.6262L10.7258 21.4246C10.9266 20.8065 10.7066 20.1295 10.1809 19.7475L1.5029 13.4426C1.11104 13.1579 1.31243 12.538 1.79679 12.538H12.5234C13.1733 12.538 13.7492 12.1196 13.95 11.5016L17.2647 1.29994Z" fill="white" stroke="#FFFCFC" />
    </svg>
    </button>

    if (data?.contract_status === 'ongoing' && user !== 'bidder') {
        button = <button onClick={handleSmartContract} className='evalButton' > OPEN SMART CONTRACT <img className='evalImg' src={externalLink} alt='' />
        </button>
    }


    else if (data?.contract_status === 'cancelled') {
        button = <button onClick={provideReasons} className='evalButton' > {user ? 'SEE REASONS' : 'PROVIDE REASONS'} <img className='evalImg' src={sad} alt='' />
        </button>
    }

    else if (data?.contract_status === 'Result pending') {
        button = null
    }
    else if (data?.contract_status === 'Result not out yet') {
        button = null
    }
    else if (data?.contract_status === 'result pending') {
        button = null
    }

    const navigate = useNavigate()
    return (
        <div className='evaluateTenderCard' >
            <div className='evalCardTopContainer' >
                <div className='evalTextDescContainer' >
                    <p>Tender Description : </p>
                    <span>{data?.description_tender}</span>
                </div>
                <p className='refNo' >NO. {data?.tender_id}</p>
            </div>
            <div className='evalCardBottomContainer' >

                <div>
                    <div className='statusContainer' >
                        <p className='completedBy' >{user ? 'PUBLISHED' : 'COMPLETED'} BY:<span >  {user ? data?.name_of_organization : data?.name_of_bidder}</span></p>
                        <p>Status : <span className='complete'>  {status}</span></p>
                    </div>
                    <div className='statusContainer'><p >TIME TAKEN: {user ? 'NA' : <span>26/10/2023 - 24/11/2023</span>}</p></div>

                    {button}
                </div>

                <div className='progressContainer' style={{ width: 100, height: 100 }}>

                    <CircularProgressbar
                        value={percentage}
                        text={`${data?.contract_status}`}
                        // pathColor: {'rgba(168, 85, 247, 1)'}
                        styles={buildStyles({
                            //     // Rotation of path and trail, in number of turns (0-1)
                            //     // rotation: 0.25,
                            //     pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                            pathColor: `${color}`,
                            textColor: data?.contract_status === 'cancelled' ? 'red' : 'blue',
                            //     trailColor: '#d6d6d6',
                            textSize: '15px'
                            //     backgroundColor: '#3e98c7',
                        })}
                    />
                </div>
            </div>

        </div>
    )
}

export default ViewTenderCard