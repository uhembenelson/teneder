import React from 'react'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import img from '../../../assets/Startup life-pana 1.png'
import './OrganizationFeedback.css'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'

const OrganizationFeedback = () => {
    const starArray = [0, 1, 2, 3, 4]
    return (
        <div>
            <CompanyNav />
            <div className='feedback' >
                <div className='feedbackImageContainer' >
                    <img src={img} alt='' />
                </div>
                <div className='rightFeedbackContainer' >
                    <form>
                        <div>
                            <h3>Name of the Organization</h3>
                            <div className='feedbackFormInputContainer' >
                                <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="21.3013" cy="16.565" r="6.313" fill="#59599B" />
                                    <ellipse cx="21.2998" cy="31.5583" rx="12.626" ry="7.10213" fill="#59599B" />
                                    <circle cx="21.3005" cy="21.2997" r="19.7281" stroke="#59599B" stroke-width="1.57825" />
                                </svg>
                                <input placeholder='Panjim Muncipal Corporation' type='text' />
                            </div>
                        </div>
                        <div>
                            <h3>Tender ID</h3>
                            <div className='feedbackFormInputContainer' >
                                <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="21.3013" cy="16.565" r="6.313" fill="#59599B" />
                                    <ellipse cx="21.2998" cy="31.5583" rx="12.626" ry="7.10213" fill="#59599B" />
                                    <circle cx="21.3005" cy="21.2997" r="19.7281" stroke="#59599B" stroke-width="1.57825" />
                                </svg>
                                <input placeholder='345678' type='number' />
                            </div>
                        </div>
                        <div>
                            <h3>Name of the Bidder</h3>
                            <div className='feedbackFormInputContainer' >
                                <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="21.3013" cy="16.565" r="6.313" fill="#59599B" />
                                    <ellipse cx="21.2998" cy="31.5583" rx="12.626" ry="7.10213" fill="#59599B" />
                                    <circle cx="21.3005" cy="21.2997" r="19.7281" stroke="#59599B" stroke-width="1.57825" />
                                </svg>
                                <input placeholder='L & T' type='text' />
                            </div>
                        </div>
                        <div>
                            <h3>Etherium Value</h3>
                            <div className='feedbackFormInputContainer' >
                                <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="21.3013" cy="16.565" r="6.313" fill="#59599B" />
                                    <ellipse cx="21.2998" cy="31.5583" rx="12.626" ry="7.10213" fill="#59599B" />
                                    <circle cx="21.3005" cy="21.2997" r="19.7281" stroke="#59599B" stroke-width="1.57825" />
                                </svg>
                                <input placeholder='3.15' type='number' />
                            </div>
                        </div>
                        <h3 className='rateText' >Rate the overall work done by Bidder</h3>
                        <div className='ratingContainer' >
                            {
                                starArray.map((star) => {
                                    return (
                                        <svg key={star} width="28" height="26" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2647 1.29994C17.4144 0.839288 18.0661 0.839288 18.2158 1.29994L21.5305 11.5016C21.7313 12.1196 22.3072 12.538 22.9571 12.538H33.6837C34.168 12.538 34.3694 13.1579 33.9776 13.4426L25.2996 19.7475C24.7738 20.1295 24.5538 20.8065 24.7546 21.4246L28.0694 31.6262C28.219 32.0868 27.6918 32.4699 27.2999 32.1852L18.6219 25.8802C18.0962 25.4983 17.3843 25.4983 16.8586 25.8802L8.18053 32.1852C7.78868 32.4699 7.26144 32.0868 7.41111 31.6262L10.7258 21.4246C10.9266 20.8065 10.7066 20.1295 10.1809 19.7475L1.5029 13.4426C1.11104 13.1579 1.31243 12.538 1.79679 12.538H12.5234C13.1733 12.538 13.7492 12.1196 13.95 11.5016L17.2647 1.29994Z" fill="yellow" stroke="#111" />
                                        </svg>

                                    )
                                })
                            }
                        </div>
                        <div className='feebackTextAreaContainer'>
                            <textarea className='feebackTextArea' placeholder='Add your comments...' ></textarea>
                        </div>

                        <div className='feedBackBtnContainer' >
                            <button className='closeBtn' >Cancel</button>
                            <button className='submitFeedbackBtn' >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OrganizationFeedback