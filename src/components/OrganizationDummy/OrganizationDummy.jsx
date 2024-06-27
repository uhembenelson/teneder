import React, { useState, useEffect } from 'react'
import millify from "millify";
import './OrganizationDummy.css'

const OrganizationDummy = () => {

    const [totalBidders, setTotalBidders] = useState(0)
    const [totalOrg, setTotalOrgs] = useState(0)

    const url = `https://school-project-production-459d.up.railway.app/v2/auth/view/bidder`
    const orgurl = `https://school-project-production-459d.up.railway.app/v1/auth/view/organization`

    useEffect(() => {
        fetch(url).then(res => res.json()).then(data => setTotalBidders(data.length))
        fetch(orgurl).then(res => res.json()).then(data => setTotalOrgs(data.length))
    }, [url, orgurl])

    return (
        <div  >
            <div className=' bidderBoxDummy'   >
                <div className='dummyBox dummyBox2 organizationDummyBox' >
                    <div className='bidderdummyBox' >
                        <div>
                            <p className='bidders' >Bidders</p>
                            <p className='dummyBoxAmount'>{millify(totalBidders)}</p>

                        </div>
                        <svg width="49" height="43" viewBox="0 0 49 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8814 39.5755C18.2173 41.4234 21.3605 42.4635 24.6386 42.4734C27.9167 42.4834 31.0696 41.4622 33.4227 39.6285L41.7953 33.3786C46.3233 29.7087 48.8638 24.7503 48.8638 19.5827C48.8638 14.4151 46.3233 9.45676 41.7953 5.78682C39.5536 3.97372 36.8876 2.53478 33.9509 1.55286C31.0142 0.570942 27.8648 0.0654297 24.6839 0.0654297C21.5031 0.0654297 18.3537 0.570942 15.417 1.55286C12.4803 2.53478 9.81432 3.97372 7.57259 5.78682C3.03477 9.47187 0.497184 14.4504 0.514492 19.6342C0.531801 24.8181 3.10259 29.7856 7.66496 33.451L15.8814 39.5755ZM12.2438 9.5258C13.8725 8.20769 15.8097 7.16154 17.9438 6.44765C20.0779 5.73375 22.3667 5.36621 24.6784 5.36621C26.9901 5.36621 29.279 5.73375 31.4131 6.44765C33.5472 7.16154 35.4844 8.20769 37.1131 9.5258C40.4082 12.1853 42.2666 15.7808 42.2855 19.5333C42.3044 23.2859 40.4825 26.8934 37.2142 29.5742L28.857 35.8029C27.7183 36.6751 26.202 37.1573 24.6288 37.1474C23.0556 37.1375 21.5489 36.6363 20.4273 35.7499L12.2438 29.6396C8.94282 26.9644 7.09072 23.3498 7.09072 19.5827C7.09072 15.8156 8.94282 12.201 12.2438 9.5258ZM13.6821 19.5023C13.6821 18.7993 14.0297 18.1252 14.6484 17.6281C15.267 17.131 16.1061 16.8518 16.981 16.8518H21.3796V13.3178C21.3796 12.6148 21.7271 11.9407 22.3458 11.4436C22.9644 10.9465 23.8035 10.6673 24.6784 10.6673C25.5534 10.6673 26.3925 10.9465 27.0111 11.4436C27.6298 11.9407 27.9773 12.6148 27.9773 13.3178V16.8518H32.3759C33.2508 16.8518 34.0899 17.131 34.7085 17.6281C35.3272 18.1252 35.6748 18.7993 35.6748 19.5023C35.6748 20.2053 35.3272 20.8794 34.7085 21.3765C34.0899 21.8736 33.2508 22.1528 32.3759 22.1528H27.9773V25.6868C27.9773 26.3898 27.6298 27.0639 27.0111 27.561C26.3925 28.0581 25.5534 28.3373 24.6784 28.3373C23.8035 28.3373 22.9644 28.0581 22.3458 27.561C21.7271 27.0639 21.3796 26.3898 21.3796 25.6868V22.1528H16.981C16.1061 22.1528 15.267 21.8736 14.6484 21.3765C14.0297 20.8794 13.6821 20.2053 13.6821 19.5023Z" fill="white" />
                        </svg>
                    </div>


                </div>

                <div className='dummyBox dummyBox2 organizationDummyBox' >
                    <div className='bidderdummyBox' >
                        <div>
                            <p className='bidders '>Organization</p>
                            <p className='dummyBoxAmount'>{millify(totalOrg)}</p>

                        </div>
                        <svg width="54" height="43" viewBox="0 0 54 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_593_1982)">
                                <path d="M41.3734 0.570313H12.783C9.57616 0.573585 6.50188 1.59855 4.23433 3.42042C1.96678 5.24228 0.691085 7.71233 0.687012 10.2888L0.687012 26.1919C0.691085 28.7684 1.96678 31.2384 4.23433 33.0603C6.50188 34.8822 9.57616 35.9071 12.783 35.9104H15.9455L24.9625 41.9677C25.5559 42.3662 26.3047 42.5846 27.0782 42.5846C27.8516 42.5846 28.6004 42.3662 29.1938 41.9677L38.2108 35.9104H41.3734C44.5802 35.9071 47.6544 34.8822 49.922 33.0603C52.1895 31.2384 53.4652 28.7684 53.4693 26.1919V10.2888C53.4652 7.71233 52.1895 5.24228 49.922 3.42042C47.6544 1.59855 44.5802 0.573585 41.3734 0.570312V0.570313ZM46.8715 26.1919C46.8715 27.3635 46.2923 28.4871 45.2612 29.3155C44.23 30.144 42.8316 30.6094 41.3734 30.6094H37.0122C36.2386 30.6098 35.4897 30.8287 34.8965 31.2278L27.0782 36.4794L19.2598 31.2278C18.6666 30.8287 17.9178 30.6098 17.1441 30.6094H12.783C11.3248 30.6094 9.92628 30.144 8.89517 29.3155C7.86407 28.4871 7.2848 27.3635 7.2848 26.1919V10.2888C7.2848 9.11724 7.86407 7.99363 8.89517 7.16518C9.92628 6.33674 11.3248 5.87132 12.783 5.87132H41.3734C42.8316 5.87132 44.23 6.33674 45.2612 7.16518C46.2923 7.99363 46.8715 9.11724 46.8715 10.2888V26.1919Z" fill="white" />
                                <path d="M17.1813 16.4739H23.7791C24.654 16.4739 25.4931 16.1946 26.1118 15.6975C26.7305 15.2005 27.078 14.5263 27.078 13.8234C27.078 13.1204 26.7305 12.4462 26.1118 11.9492C25.4931 11.4521 24.654 11.1729 23.7791 11.1729H17.1813C16.3064 11.1729 15.4673 11.4521 14.8487 11.9492C14.23 12.4462 13.8824 13.1204 13.8824 13.8234C13.8824 14.5263 14.23 15.2005 14.8487 15.6975C15.4673 16.1946 16.3064 16.4739 17.1813 16.4739Z" fill="white" />
                                <path d="M36.9747 20.0088H17.1813C16.3064 20.0088 15.4673 20.288 14.8487 20.7851C14.23 21.2822 13.8824 21.9563 13.8824 22.6593C13.8824 23.3623 14.23 24.0364 14.8487 24.5335C15.4673 25.0306 16.3064 25.3098 17.1813 25.3098H36.9747C37.8496 25.3098 38.6887 25.0306 39.3074 24.5335C39.926 24.0364 40.2736 23.3623 40.2736 22.6593C40.2736 21.9563 39.926 21.2822 39.3074 20.7851C38.6887 20.288 37.8496 20.0088 36.9747 20.0088Z" fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_593_1982">
                                    <rect width="52.7823" height="42.4081" fill="white" transform="translate(0.687012 0.570312)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

                </div>
                <div className='dummyBox dummyBox2 organizationDummyBox' >
                    <div className='bidderdummyBox' >
                        <div>
                            <p className='bidders '>Transactions</p>
                            <p className='dummyBoxAmount'>1000+</p>

                        </div>
                        <svg width="54" height="43" viewBox="0 0 54 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M26.7791 8.90045C25.9042 8.90045 25.0651 8.6212 24.4464 8.12413C23.8278 7.62707 23.4802 6.9529 23.4802 6.24994V2.71594C23.4802 2.01298 23.8278 1.33881 24.4464 0.841745C25.0651 0.344679 25.9042 0.0654297 26.7791 0.0654297C27.654 0.0654297 28.4931 0.344679 29.1118 0.841745C29.7304 1.33881 30.078 2.01298 30.078 2.71594V6.24994C30.078 6.9529 29.7304 7.62707 29.1118 8.12413C28.4931 8.6212 27.654 8.90045 26.7791 8.90045ZM30.078 39.823V36.289C30.078 35.5861 29.7304 34.9119 29.1118 34.4148C28.4931 33.9178 27.654 33.6385 26.7791 33.6385C25.9042 33.6385 25.0651 33.9178 24.4464 34.4148C23.8278 34.9119 23.4802 35.5861 23.4802 36.289V39.823C23.4802 40.526 23.8278 41.2001 24.4464 41.6972C25.0651 42.1943 25.9042 42.4735 26.7791 42.4735C27.654 42.4735 28.4931 42.1943 29.1118 41.6972C29.7304 41.2001 30.078 40.526 30.078 39.823ZM11.3843 21.2695C11.3843 20.5665 11.0367 19.8924 10.418 19.3953C9.79937 18.8982 8.96028 18.619 8.08536 18.619H3.68683C2.81191 18.619 1.97283 18.8982 1.35416 19.3953C0.7355 19.8924 0.387939 20.5665 0.387939 21.2695C0.387939 21.9724 0.7355 22.6466 1.35416 23.1437C1.97283 23.6407 2.81191 23.92 3.68683 23.92H8.08536C8.96028 23.92 9.79937 23.6407 10.418 23.1437C11.0367 22.6466 11.3843 21.9724 11.3843 21.2695ZM53.1702 21.2695C53.1702 20.5665 52.8227 19.8924 52.204 19.3953C51.5854 18.8982 50.7463 18.619 49.8713 18.619H45.4728C44.5979 18.619 43.7588 18.8982 43.1401 19.3953C42.5215 19.8924 42.1739 20.5665 42.1739 21.2695C42.1739 21.9724 42.5215 22.6466 43.1401 23.1437C43.7588 23.6407 44.5979 23.92 45.4728 23.92H49.8713C50.7463 23.92 51.5854 23.6407 52.204 23.1437C52.8227 22.6466 53.1702 21.9724 53.1702 21.2695ZM38.8222 9.48179L40.9797 6.40191C41.3921 5.7906 41.4889 5.0736 41.2494 4.40545C41.0099 3.73731 40.4532 3.17153 39.6994 2.83009C38.9455 2.48865 38.0548 2.39889 37.2194 2.58015C36.3839 2.76142 35.6705 3.19919 35.2331 3.79911L33.0734 6.879C32.8605 7.18236 32.7241 7.51646 32.672 7.8622C32.6198 8.20794 32.6531 8.55854 32.7697 8.89397C32.8863 9.22939 33.0841 9.54306 33.3516 9.81705C33.6192 10.091 33.9514 10.32 34.3292 10.4908C34.8218 10.7158 35.3789 10.834 35.9456 10.8336C36.5313 10.8337 37.1064 10.7085 37.612 10.471C38.1175 10.2334 38.5353 9.89199 38.8222 9.48179ZM18.3251 38.7398L20.4848 35.66C20.9144 35.0474 21.0235 34.3229 20.7882 33.6457C20.5529 32.9686 19.9925 32.3942 19.2301 32.0491C18.4678 31.7039 17.566 31.6162 16.7232 31.8053C15.8803 31.9943 15.1655 32.4446 14.7359 33.0572L12.5785 36.137C12.1661 36.7483 12.0693 37.4654 12.3088 38.1335C12.5483 38.8016 13.105 39.3674 13.8588 39.7089C14.6127 40.0503 15.5033 40.1401 16.3388 39.9588C17.1743 39.7775 17.8876 39.3398 18.3251 38.7398ZM13.3636 15.2034C13.793 14.5911 13.9022 13.8668 13.6672 13.1898C13.4321 12.5128 12.872 11.9386 12.11 11.5934L8.27449 9.85993C7.51365 9.52864 6.62125 9.45082 5.78965 9.64325C4.95806 9.83568 4.25388 10.283 3.82892 10.8886C3.40395 11.4943 3.29223 12.2099 3.51783 12.8812C3.74344 13.5525 4.28831 14.1256 5.03498 14.4771L8.86829 16.2123C9.24587 16.3834 9.6617 16.493 10.092 16.5348C10.5223 16.5767 10.9587 16.55 11.3762 16.4563C11.7937 16.3626 12.1841 16.2037 12.5251 15.9887C12.8661 15.7737 13.151 15.5069 13.3636 15.2034ZM49.779 31.6718C50.2084 31.0595 50.3176 30.3353 50.0826 29.6583C49.8475 28.9813 49.2874 28.4071 48.5254 28.0618L44.6921 26.3266C44.3146 26.1557 43.8989 26.0462 43.4688 26.0044C43.0386 25.9626 42.6025 25.9892 42.1851 26.0828C41.7678 26.1765 41.3775 26.3352 41.0365 26.55C40.6956 26.7648 40.4106 27.0314 40.1979 27.3347C39.9852 27.638 39.8489 27.972 39.7968 28.3176C39.7448 28.6632 39.7779 29.0136 39.8945 29.3489C40.1297 30.0261 40.6902 30.6004 41.4526 30.9456L45.2859 32.679C46.048 33.0241 46.9494 33.1118 47.792 32.9229C48.6346 32.7341 49.3493 32.284 49.779 31.6718ZM19.229 10.4908C19.9914 10.1458 20.5519 9.57172 20.7874 8.89472C21.0229 8.21772 20.9141 7.49328 20.4848 6.88076L18.3251 3.79911C17.8876 3.19919 17.1743 2.76142 16.3388 2.58015C15.5033 2.39889 14.6127 2.48865 13.8588 2.83009C13.105 3.17153 12.5483 3.73731 12.3088 4.40545C12.0693 5.0736 12.1661 5.7906 12.5785 6.40191L14.7359 9.48179C15.0232 9.89166 15.441 10.2327 15.9466 10.47C16.4521 10.7072 17.0271 10.8321 17.6126 10.8318C18.1791 10.8328 18.7362 10.7152 19.229 10.4908ZM39.7261 39.7488C40.4881 39.4036 41.0482 38.8293 41.2833 38.1524C41.5184 37.4754 41.4092 36.7511 40.9797 36.1388L38.8222 33.0589C38.3927 32.4464 37.6778 31.9961 36.835 31.8071C35.9922 31.618 35.0904 31.7057 34.3281 32.0508C33.5657 32.396 33.0052 32.9703 32.7699 33.6475C32.5346 34.3247 32.6438 35.0492 33.0734 35.6617L35.2331 38.7416C35.6627 39.3538 36.3774 39.8038 37.22 39.9927C38.0626 40.1816 38.9641 40.0939 39.7261 39.7488ZM44.6899 16.2123L48.5232 14.4771C49.2699 14.1256 49.8147 13.5525 50.0403 12.8812C50.2659 12.2099 50.1542 11.4943 49.7293 10.8886C49.3043 10.283 48.6001 9.83568 47.7685 9.64325C46.9369 9.45082 46.0445 9.52864 45.2837 9.85993L41.4504 11.5934C40.688 11.9385 40.1275 12.5128 39.8923 13.19C39.657 13.8672 39.7661 14.5917 40.1957 15.2042C40.6253 15.8167 41.3401 16.2671 42.1829 16.4561C43.0258 16.6452 43.9275 16.5575 44.6899 16.2123ZM8.27449 32.679L12.1078 30.9456C12.4853 30.7747 12.8172 30.5457 13.0845 30.2718C13.3519 29.9978 13.5494 29.6842 13.6659 29.3489C13.7824 29.0136 13.8156 28.6632 13.7635 28.3176C13.7115 27.972 13.5752 27.638 13.3625 27.3347C13.1498 27.0314 12.8648 26.7648 12.5238 26.55C12.1829 26.3352 11.7926 26.1765 11.3752 26.0828C10.9579 25.9892 10.5217 25.9626 10.0916 26.0044C9.66145 26.0462 9.24577 26.1557 8.86829 26.3266L5.03498 28.0618C4.40037 28.3499 3.90236 28.7987 3.61873 29.3382C3.33511 29.8776 3.28183 30.4774 3.46723 31.0437C3.65262 31.6101 4.06625 32.1112 4.64351 32.4687C5.22077 32.8262 5.92916 33.0201 6.65804 33.0201C7.22458 33.0211 7.78169 32.9036 8.27449 32.679Z" fill="white" />
                        </svg>
                    </div>

                </div>
                <div className='dummyBox dummyBox2 organizationDummyBox' >
                    <div className='bidderdummyBox' >
                        <div>
                            <p className='bidders'>Tenders</p>
                            <p className='dummyBoxAmount'>100+</p>

                        </div>
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.4504 22.0232C51.4479 20.3742 50.9676 18.7615 50.068 17.3817C49.1683 16.0019 47.8882 14.9145 46.3836 14.252C46.536 13.8058 46.7033 13.3574 46.8346 12.9133C47.2515 11.5113 47.3337 10.0304 47.0743 8.59062C46.815 7.15083 46.2215 5.79256 45.3418 4.62578C44.4571 3.4254 43.3031 2.45107 41.9733 1.78173C40.6435 1.11239 39.1753 0.766866 37.6876 0.773156H14.3966C12.9089 0.766866 11.4407 1.11239 10.1109 1.78173C8.78106 2.45107 7.62706 3.4254 6.74237 4.62578C5.8642 5.79331 5.2724 7.15202 5.01489 8.59185C4.75739 10.0317 4.84144 11.5121 5.26022 12.9133C5.3915 13.3574 5.55877 13.8058 5.71122 14.252C4.20462 14.9129 2.92227 15.9996 2.02066 17.3796C1.11905 18.7595 0.637156 20.373 0.633789 22.0232C0.633789 28.7169 5.67099 36.4732 19.69 36.862V42.2107C19.7318 42.6396 19.6783 43.0726 19.5335 43.4784C19.3886 43.8841 19.156 44.2527 18.8523 44.5574C18.5486 44.8622 18.1814 45.0957 17.7771 45.241C17.3728 45.3864 16.9414 45.4401 16.514 45.3982H14.3966C13.5543 45.3982 12.7464 45.734 12.1508 46.3318C11.5552 46.9295 11.2206 47.7403 11.2206 48.5857C11.2206 49.431 11.5552 50.2418 12.1508 50.8396C12.7464 51.4373 13.5543 51.7732 14.3966 51.7732H37.6876C38.5299 51.7732 39.3378 51.4373 39.9334 50.8396C40.529 50.2418 40.8636 49.431 40.8636 48.5857C40.8636 47.7403 40.529 46.9295 39.9334 46.3318C39.3378 45.734 38.5299 45.3982 37.6876 45.3982H35.6083C35.1783 45.4442 34.7435 45.3937 34.3353 45.2503C33.9271 45.107 33.5557 44.8744 33.2481 44.5693C32.9405 44.2643 32.7043 43.8944 32.5566 43.4864C32.4089 43.0785 32.3535 42.6427 32.3942 42.2107V36.862C46.4132 36.4732 51.4504 28.7169 51.4504 22.0232ZM45.0983 22.0232C45.0983 25.3955 42.6549 28.9507 36.1758 30.1215C39.2755 27.2346 41.8669 23.8428 43.8406 20.0894C44.2137 20.2557 44.5309 20.5268 44.7541 20.8699C44.9772 21.2129 45.0968 21.6135 45.0983 22.0232ZM11.8304 8.44228C12.1268 8.03942 12.5136 7.71231 12.9594 7.48747C13.4053 7.26263 13.8977 7.14639 14.3966 7.14816H37.6876C38.1866 7.14639 38.6789 7.26263 39.1248 7.48747C39.5706 7.71231 39.9574 8.03942 40.2538 8.44228C40.5394 8.81562 40.7326 9.25164 40.8177 9.71452C40.9027 10.1774 40.8771 10.6539 40.7429 11.1049C39.0248 16.7097 35.8561 21.7568 31.5599 25.7313C29.854 27.0098 28.4675 28.6687 27.5099 30.5772C26.5523 32.4857 26.0498 34.5914 26.0421 36.7282C26.0341 34.5908 25.5315 32.4846 24.5739 30.5755C23.6164 28.6664 22.2301 27.0066 20.5243 25.727C16.2274 21.754 13.0585 16.7074 11.3413 11.1028C11.2075 10.6521 11.182 10.176 11.2671 9.7135C11.3521 9.25103 11.5451 8.81538 11.8304 8.44228ZM6.98587 22.0232C6.98745 21.6135 7.10701 21.2129 7.33015 20.8699C7.5533 20.5268 7.8705 20.2557 8.24358 20.0894C10.2175 23.8433 12.8097 27.2351 15.9105 30.1215C9.4293 28.9528 6.98587 25.3955 6.98587 22.0232Z" fill="white" />
                        </svg>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrganizationDummy