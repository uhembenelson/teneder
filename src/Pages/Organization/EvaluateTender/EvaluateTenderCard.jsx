import React from 'react'
// import { Box, CircularProgress } from '@mui/material'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useNavigate } from 'react-router-dom';

const EvaluateTenderCard = () => {
    const percentage = 66;
    const navigate = useNavigate()
    return (
        <div className='evaluateTenderCard' >
            <div className='evalCardTopContainer' >
                <div className='evalTextDescContainer' >
                    <p>Tender Description : </p>
                    <span>Facility Management And Maintenance At The Building Of The
                        Ministry Of Communications And Multimedia pernem. Plot no. 234/2a/4.</span>
                </div>
                <p className='refNo' >N0. 48802666 </p>
            </div>
            <div className='evalCardBottomContainer' >

                <div>
                    <div className='statusContainer' >
                        <p className='completedBy' >COMPLETED BY:<span >  WCT Holdings LTD.</span></p>
                        <p>Status : <span className='complete'>  COMPLETE</span></p>
                    </div>
                    <div className='statusContainer'><p >TIME TAKEN: <span>26/10/2023 - 24/11/2023</span></p></div>

                    <button onClick={() => navigate('/organization/feedback')} className='evalButton' > PROVIDE FEEDBACK <svg width="20" height="20" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2647 1.29994C17.4144 0.839288 18.0661 0.839288 18.2158 1.29994L21.5305 11.5016C21.7313 12.1196 22.3072 12.538 22.9571 12.538H33.6837C34.168 12.538 34.3694 13.1579 33.9776 13.4426L25.2996 19.7475C24.7738 20.1295 24.5538 20.8065 24.7546 21.4246L28.0694 31.6262C28.219 32.0868 27.6918 32.4699 27.2999 32.1852L18.6219 25.8802C18.0962 25.4983 17.3843 25.4983 16.8586 25.8802L8.18053 32.1852C7.78868 32.4699 7.26144 32.0868 7.41111 31.6262L10.7258 21.4246C10.9266 20.8065 10.7066 20.1295 10.1809 19.7475L1.5029 13.4426C1.11104 13.1579 1.31243 12.538 1.79679 12.538H12.5234C13.1733 12.538 13.7492 12.1196 13.95 11.5016L17.2647 1.29994Z" fill="white" stroke="#FFFCFC" />
                    </svg>
                    </button>
                </div>

                <div className='progressContainer' style={{ width: 100, height: 100 }}>

                    <CircularProgressbar
                        value={percentage}
                        text={`${percentage}%`}
                    // pathColor: 'rgba(168, 85, 247, 1)'
                    // styles={buildStyles({
                    //     // Rotation of path and trail, in number of turns (0-1)
                    //     // rotation: 0.25,
                    //     pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    //     textColor: '#f88',
                    //     trailColor: '#d6d6d6',
                    //     backgroundColor: '#3e98c7',
                    // })}
                    />
                </div>
            </div>

        </div>
    )
}

export default EvaluateTenderCard