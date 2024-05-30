import React from 'react'


import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'

const OrganizationHelpCenter = () => {

    const email = 'tenederblockchain@gmail.com'

    return (
        <div>
            <CompanyNav />
            <div className='HelpCenter' >
                <div className='faqContainer organizationFaqContainer' >
                    <div>
                        <h3>FAQs</h3>
                        <h2>Ask us anything</h2>
                        <p>Have any questions? We're here to assist you.</p>
                    </div>

                </div>
                <div className='questionsContainer' >
                    <div className='questionCard' >
                        <div className='iconContainer' >
                            <svg width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.6912 3.40486C22.6912 2.26158 21.7558 1.32617 20.6125 1.32617H3.98298C2.83971 1.32617 1.9043 2.26158 1.9043 3.40486M22.6912 3.40486V15.877C22.6912 17.0203 21.7558 17.9557 20.6125 17.9557H3.98298C2.83971 17.9557 1.9043 17.0203 1.9043 15.877V3.40486M22.6912 3.40486L12.2977 10.6803L1.9043 3.40486" stroke="#FE9C69" stroke-width="2.07869" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div className='questionBox' >
                            <h5  >How do I change my account email?</h5>
                            <p>You can log in to your account and change it from your Profile > Edit Profile > Confirm</p>
                        </div>
                    </div>
                    <div className='questionCard' >
                        <div className='iconContainer' >
                            <svg width="26" height="19" viewBox="0 0 26 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.23047 7.56223H24.096M3.30916 1.32617H22.0173C23.1654 1.32617 24.096 2.25683 24.096 3.40486V15.877C24.096 17.025 23.1654 17.9557 22.0173 17.9557H3.30916C2.16113 17.9557 1.23047 17.025 1.23047 15.877V3.40486C1.23047 2.25683 2.16113 1.32617 3.30916 1.32617Z" stroke="#FE9C69" stroke-width="2.07869" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div className='questionBox' >
                            <h5>What should I do if my payment fails?</h5>
                            <p>If your payment fails, you must either contact the bidder, or our tender team and inform them of the appropriate reasons the payment failed . In case of no response the smart contract can destruct causing the tender assignment to fail.</p>
                        </div>
                    </div>
                    <div className='questionCard' >
                        <div className='iconContainer' >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.67809 4.2943L19.3744 18.9906M22.4197 11.6425C22.4197 17.3826 17.7664 22.0359 12.0263 22.0359C6.28611 22.0359 1.63281 17.3826 1.63281 11.6425C1.63281 5.90232 6.28611 1.24902 12.0263 1.24902C17.7664 1.24902 22.4197 5.90232 22.4197 11.6425Z" stroke="#FE9C69" stroke-width="2.07869" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div className='questionBox' >
                            <h5  >What is your cancellation policy?</h5>
                            <p>In Smart Contract, if the self destruct function is called then , the cancellation policy will come into place and the contract will be cancelled.(no amount will be transferred) </p>
                        </div>
                    </div>
                    <div className='questionCard' >
                        <div className='iconContainer' >
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_458_1629)">
                                    <path d="M17.4495 3.79492H1.85938V17.3064H17.4495V3.79492Z" stroke="#FE9C69" stroke-width="2.07869" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M17.4531 8.99316H21.6105L24.7285 12.1112V17.3079H17.4531V8.99316Z" stroke="#FE9C69" stroke-width="2.07869" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M6.54172 22.5034C7.97675 22.5034 9.14008 21.34 9.14008 19.905C9.14008 18.47 7.97675 17.3066 6.54172 17.3066C5.10668 17.3066 3.94336 18.47 3.94336 19.905C3.94336 21.34 5.10668 22.5034 6.54172 22.5034Z" stroke="#FE9C69" stroke-width="2.07869" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M20.0515 22.5034C21.4865 22.5034 22.6498 21.34 22.6498 19.905C22.6498 18.47 21.4865 17.3066 20.0515 17.3066C18.6165 17.3066 17.4531 18.47 17.4531 19.905C17.4531 21.34 18.6165 22.5034 20.0515 22.5034Z" stroke="#FE9C69" stroke-width="2.07869" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_458_1629">
                                        <rect width="24.9443" height="24.9443" fill="white" transform="translate(0.824219 0.676758)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className='questionBox' >
                            <h5>How do I check approval status ?</h5>
                            <p>Please tap on “Approval Status” and check if you are selected ,or rejected</p>
                        </div>
                    </div>
                    <div className='questionCard' >
                        <div className='iconContainer' >
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_458_1639)">
                                    <path d="M13.2559 1.66797V24.5335" stroke="#FE9C69" stroke-width="2.07869" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M18.4523 5.82715H10.6572C9.69246 5.82715 8.76719 6.21041 8.08499 6.89261C7.40279 7.57481 7.01953 8.50007 7.01953 9.46485C7.01953 10.4296 7.40279 11.3549 8.08499 12.0371C8.76719 12.7193 9.69246 13.1026 10.6572 13.1026H15.854C16.8187 13.1026 17.744 13.4858 18.4262 14.168C19.1084 14.8502 19.4917 15.7755 19.4917 16.7403C19.4917 17.705 19.1084 18.6303 18.4262 19.3125C17.744 19.9947 16.8187 20.378 15.854 20.378H7.01953" stroke="#FE9C69" stroke-width="2.07869" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_458_1639">
                                        <rect width="24.9443" height="24.9443" fill="white" transform="translate(0.785156 0.628906)" />
                                    </clipPath>
                                </defs>
                            </svg>

                        </div>
                        <div className='questionBox' >
                            <h5>How to transfer funds?</h5>
                            <p>You will first have to create a Metamask account and connect your e-wallet to our website for seamless transaction process.</p>
                        </div>
                    </div>
                    <div className='questionCard' >
                        <div className='iconContainer' >
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.0206 14.8824L14.5685 22.3344C14.3755 22.5277 14.1462 22.681 13.8939 22.7856C13.6415 22.8903 13.371 22.9441 13.0979 22.9441C12.8247 22.9441 12.5542 22.8903 12.3018 22.7856C12.0495 22.681 11.8202 22.5277 11.6272 22.3344L2.69922 13.4169V3.02344H13.0927L22.0206 11.9514C22.4078 12.3409 22.6251 12.8677 22.6251 13.4169C22.6251 13.966 22.4078 14.4929 22.0206 14.8824V14.8824Z" stroke="#FE9C69" stroke-width="2.07869" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M7.89648 8.21582H7.90916" stroke="#FE9C69" stroke-width="2.07869" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <div className='questionBox' >
                            <h5 >When can application be rejected?</h5>
                            <p>There are many reasons for this. The Organization provides appropriate reasons and you can get a clear view of where you are lagging.</p>
                        </div>
                    </div>
                </div>
                <div className='moreQuestionBox organizationFaqContainer' >
                    <div className='moreQuestionContainer' >
                        <div>
                            <h5>Still have questions?</h5>
                            <p>Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                        </div>
                        <a href={`mailto:${email}`} className='getInTouchBtn' >Get in touch</a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default OrganizationHelpCenter