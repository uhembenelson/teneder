import React, { useEffect, useRef, useState } from 'react'
import { Avatar } from '@mui/material'
import UploadFile from '../../../components/UploadFile/UploadFile'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import BidderNav from '../../../components/BidderNav/Nav'
import useSWR from 'swr'
import { CircularProgress } from "@mui/material";

import { useForm } from 'react-hook-form'

import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const BidderEditProfile = () => {

    const user = useSelector(state => state.bidder.user)

    const navigate = useNavigate()

    const [profilePicture, setProfilePicture] = useState(null)

    // USER PROFILE STATE

    const [userDetails, setUserDetails] = useState(user)

    const [states, setStates] = useState([])

    const { token, bidder_id } = user

    const fetchBidderDetails = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        setUserDetails(data)

        return data;

    };


    // Get All states in india

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/')
            .then(res => res.json()).then(data => setStates(data.data))
    }, [])

    // Get profile picture

    useEffect(() => {
        fetch(`https://school-project-production-459d.up.railway.app/v15/profile/picture/bidder/${bidder_id}`, {
            method: 'GET',
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => setProfilePicture(data))
    }, [token, bidder_id])

    // Update profile picture
    const pictureData = new FormData()

    const fileInputRef = useRef(null);
    const handleImageChange = async (e) => {
        const file = e.target.files;
        // setSelectedImage(file);
        if (file) {
            // const imageUrl = URL.createObjectURL(file[0]);
            const imageUrl = file[0]
            pictureData.append('profile_picture_bidder', imageUrl)
            pictureData.append('bidder_id', bidder_id)

            const res = await fetch('https://school-project-production-459d.up.railway.app/v15/profile/picture/bidder', {
                method: 'POST',
                headers: {
                    'Authorization': `${token}`
                },
                body: pictureData
            })



            if (res.ok) {
                // dispatch(setOrganizationProfilePicture(imageUrl))
                toast.success('Picture uploaded successfuly', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: true,
                });
                fetch(`https://school-project-production-459d.up.railway.app/v15/profile/picture/bidder/${bidder_id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json()).then(data => setProfilePicture(data))
            }
        }
    };



    const [isLoading, setIsLoading] = useState(false)





    const url = `https://school-project-production-459d.up.railway.app/v2/auth/view/bidder/${bidder_id}`

    const { data } = useSWR([url, token], () => fetchBidderDetails(url, token));


    const [file, setFile] = useState(data?.registration_certificate)
    const [AadharCard, setAadharCard] = useState(data?.aadhar_card)
    const [panCard, setPanCard] = useState(data?.pan_card)

    const [companyType, setCompanyType] = useState(userDetails?.company_type)

    const {
        getValues,
        register,
        setValue,
        handleSubmit,
    } = useForm({

        criteriaMode: "all",
        reValidateMode: "onSubmit",
        mode: "onChange",
    });



    const updateProfile = async () => {
        const info = getValues()
        info.company_type = companyType




        try {
            setIsLoading(true)

            const res = await fetch(`https://school-project-production-459d.up.railway.app/v2/auth/update/${user.bidder_id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(info)
            })



            setIsLoading(false)

            if (res.ok) {
                toast.success('Successfully updated your profile', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: true,

                });


                fetchBidderDetails(url, token)
            }
            else {
                toast.error('Something went wrong', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: true,

                });
            }
        }
        catch (err) {
            setIsLoading(false)
            console.log(err)
            toast.error('Something went wrong', {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 3000,
                hideProgressBar: true,

            });
        }


    }

    useEffect(() => {
        setValue('name_of_company', userDetails?.name_of_company)
        setValue('company_type', userDetails?.company_type)
        setValue('registration_number', userDetails?.registration_number)
        setValue('no_of_employees', userDetails?.no_of_employees)
        setValue('address_one', userDetails?.address_one)
        setValue('address_two', userDetails?.address_two)
        setValue('address_three', userDetails?.address_three)
        setValue('organization_website', userDetails?.organization_website)
        setValue('postal_code', userDetails?.postal_code)
        setValue('state', userDetails?.state)
        setValue('city', userDetails?.city)
        setValue('public_address', userDetails?.public_address)
        setValue('first_name', userDetails?.first_name)
        setValue('last_name', userDetails?.last_name)
        // setValue()
        setValue('email', userDetails?.email)

        setValue('job_title', userDetails?.job_title)
        setValue('contact_number', userDetails?.contact_number)
        setValue('wallet_address', userDetails?.wallet_address)
    }, [setValue, userDetails])

    return (
        <div>
            <BidderNav />
            <div className='editProfileContainer'>
                <div className='headContainer'>
                    <p onClick={() => navigate(-1)} className='alreadyText'><i className="ri-arrow-left-line"></i> Return</p>
                    <div className='middleProfileContainer'>
                        <div className='avatarContainer' >
                            {profilePicture ?
                                <Avatar src={profilePicture?.slice(-1).pop()?.imageUrl} className='avatarImage' sx={{ height: "5rem", width: "5rem" }} /> :
                                <Avatar className='avatarImage' sx={{ height: "5rem", width: "5rem" }} />
                            }
                            <input
                                id="imageInput"
                                type="file"
                                accept=".png, .jpg, .jpeg"
                                onChange={handleImageChange}
                                ref={fileInputRef}
                                className="imageInput"
                            />
                        </div>

                        <p className='editProfileName' >{`${userDetails?.first_name} ${userDetails?.last_name}`}</p>
                        <p className='editProfileName'>{userDetails?.name_of_company}</p>
                    </div>
                </div>
                <h2 className='editProfileInfo' >COMPANY INFO</h2>
                <form onSubmit={handleSubmit(updateProfile)} >
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Full Name of Company</label>
                            </div>
                            <input {...register('name_of_company')} className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Company Type</label>
                            </div>
                            <select className='inputTypeSelect'
                                onChange={(event) => setCompanyType(event.target.value)}
                                value={companyType}>
                                <option value='Private' >Private</option>
                                <option value='Government' >Government</option>
                            </select>
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Registration No.</label>
                            </div>
                            <input {...register('registration_number')} className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <label>No. of Employees</label>
                            </div>
                            <input {...register('no_of_employees')} className='inputTypeInput' type='number' placeholder='20' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Company Website</label>
                            </div>
                            <input {...register('organization_website')} className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label> Company Address</label>
                            </div>
                            <input {...register('address_one')} className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label> Address 2</label>
                            </div>
                            <input {...register('address_two')} className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label> Address 3</label>
                            </div>
                            <input {...register('address_three')} className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Postal Code</label>
                            </div>
                            <input {...register('postal_code')} className='inputTypeInput' type='text' />
                        </div>

                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Country</label>
                            </div>
                            {/*<select className='inputTypeSelect' {...register('state')}>
                                {
                                    states?.map((state, id) => (
                                        <option value={state?.country} key={id} >{state?.country}</option>
                                    ))
                                }
                            </select>*/}
                            <input placeholder='Enter Country' {...register('state')} className='inputTypeInput' type='text' />
                        </div>

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>City</label>
                            </div>
                            <input {...register('city')} className='inputTypeInput' type='text' />
                        </div>

                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Public Address</label>
                            </div>
                            <input {...register('public_address')} className='inputTypeInput' type='text' maxLength={16} />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label> Wallet Address</label>
                            </div>
                            <input {...register('wallet_address')} className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <h2 className='editProfileInfo' >ACCOUNT HANDLER INFO </h2>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>First Name</label>
                            </div>
                            <input {...register('first_name')} className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Last Name</label>
                            </div>
                            <input {...register('last_name')} className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Email</label>
                            </div>
                            <input {...register('email')} className='inputTypeInput' type='email' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>GST Number</label>
                            </div>

                            <input placeholder="Enter GST Number" maxLength={16} className='inputTypeInput' type='number' {...register('contact_number')} />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Job Title</label>
                            </div>
                            <input {...register('job_title')} className='inputTypeInput' type='text' />
                        </div>

                    </div>

                    <h2 className='editProfileInfo' >DOCUMENTS</h2>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <UploadFile name={userDetails?.aadhar_card} setFile={setAadharCard} />

                        </div>
                        <div className='companyTypeInputContainer2'>

                            <UploadFile name={userDetails?.pan_card} setFile={setPanCard} />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <UploadFile name={userDetails?.registration_certificate} setFile={setFile} />

                        </div>

                    </div>
                    <div className='confirmBtnContainer'>
                        <CustomBtn >{isLoading ? <CircularProgress color="primary" thickness={10} size={18} /> : 'Confirm Changes'}</CustomBtn>
                    </div>
                </form>
            </div>

        </div>
    )
}



export default BidderEditProfile