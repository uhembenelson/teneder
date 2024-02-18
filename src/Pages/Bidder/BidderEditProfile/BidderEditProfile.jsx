import React, { useEffect, useState } from 'react'
import { Avatar } from '@mui/material'
import UploadFile from '../../../components/UploadFile/UploadFile'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import BidderNav from '../../../components/BidderNav/Nav'
import useSWR from 'swr'
import { CircularProgress } from "@mui/material";

import { useForm } from 'react-hook-form'

import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const BidderEditProfile = () => {
    const fetchBidderDetails = async (url, token) => {
        const headers = new Headers();

        if (token) {
            headers.append('Authorization', `${token}`);
        }

        const response = await fetch(url, { headers });
        const data = await response.json();
        return data;

    };

    const [isLoading, setIsLoading] = useState(false)

    const user = useSelector(state => state.bidder.user)
    const { token, bidder_id } = user

    const url = `https://school-project-production-459d.up.railway.app/v2/auth/view/bidder/${bidder_id}`

    const { data } = useSWR([url, token], () => fetchBidderDetails(url, token));
    console.log(data)

    const [file, setFile] = useState(data?.registration_certificate)
    const [AadharCard, setAadharCard] = useState(data?.aadhar_card)
    const [panCard, setPanCard] = useState(data?.pan_card)

    const {
        getValues,
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({

        criteriaMode: "all",
        reValidateMode: "onSubmit",
        mode: "onChange",
    });

    const updateProfile = async () => {
        const info = getValues()

        const regFormData = new FormData();

        regFormData.append('name_of_company', data?.name_of_company)
        regFormData.append('organization_website', data?.organization_website)
        regFormData.append('address_one', data?.address_one)
        regFormData.append('address_three', data?.address_three)
        regFormData.append('address_two', data?.address_two)
        regFormData.append('state', data?.state)
        regFormData.append('city', data?.city)
        regFormData.append('first_name', data?.first_name)
        regFormData.append('last_name', data?.last_name)
        regFormData.append('postal_code', data?.postal_code)
        regFormData.append('job_title', data?.job_title)
        regFormData.append('email', data?.email)
        regFormData.append('confirm_email', data?.confirm_email)
        regFormData.append('password', data?.password)
        regFormData.append('confirm_password', data?.confirm_password)
        regFormData.append('wallet_address', data?.wallet_address)
        regFormData.append('public_address', data?.public_address)
        regFormData.append('registration_number', data?.registration_number)
        regFormData.append('contact_number', data?.contact_number)
        regFormData.append('registration_certificate', file)
        regFormData.append('aadhar_card', AadharCard)
        regFormData.append('pan_card', panCard)

        try {
            setIsLoading(true)

            const res = await fetch(`https://school-project-production-459d.up.railway.app/v2/auth/update/${user.bidder_id}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `${token}`,
                    'Content-Type': 'applocation/json'
                },
                body: JSON.stringify(info)
            })
            const data = res.json()
            console.log(data)
            setIsLoading(false)

            if (res.ok) {
                toast.success('Successfully updated your profile', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: true,

                });

            }
        }
        catch (err) {
            setIsLoading(false)
            console.log(err)
        }


    }

    useEffect(() => {
        setValue('name_of_company', user?.name_of_company)
        setValue('organization_type', user?.organization_type)
        setValue('registration_number', user?.registration_number)
        setValue('no_of_employees', user?.no_of_employees)
        setValue('address_one', user?.address_one)
        setValue('address_two', user?.address_two)
        setValue('address_three', user?.address_three)
        setValue('organization_website', user?.organization_website)
        setValue('postal_code', user?.postal_code)
        setValue('state', user?.state)
        setValue('city', user?.city)
        setValue('public_address', user?.public_address)
        setValue('first_name', user?.first_name)
        setValue('last_name', user?.last_name)
        setValue('email', user?.email)
        setValue('confirm_email', user?.email)
        setValue('password', 'admin')
        setValue('confirm_password', 'admin')
        setValue('job_title', user?.job_title)
        setValue('contact_number', user?.contact_number)
        setValue('wallet_address', user?.wallet_address)
    }, [setValue, user])

    return (
        <div>
            <BidderNav />
            <div className='editProfileContainer'>
                <div className='headContainer'>
                    <div className='middleProfileContainer'>
                        <div className='avatarContainer' >
                            <Avatar className='avatarImage' sx={{ height: "5rem", width: "5rem" }} />
                            <input
                                id="imageInput"
                                type="file"
                                accept=".png, .jpg, .jpeg"

                                className="imageInput"
                            />
                        </div>

                        <p className='editProfileName' >{`${user?.first_name} ${user?.last_name}`}</p>
                        <p className='editProfileName'>{user?.name_of_company}</p>
                    </div>
                </div>
                <h2 className='editProfileInfo' >COMPANY INFO</h2>
                <form onSubmit={handleSubmit(updateProfile)} >
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Full Name of Company</label>
                            </div>
                            <input {...register('name_of_company')} className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Company Type</label>
                            </div>
                            <select className='inputTypeSelect'>
                                <option>-Please select-</option>
                            </select>
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Registration No.</label>
                            </div>
                            <input {...register('registration_number')} className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>No. of Employees</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Company Website</label>
                            </div>
                            <input {...register('organization_website')} className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label> Company Address</label>
                            </div>
                            <input {...register('address_one')} className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Postal Code</label>
                            </div>
                            <input {...register('postal_code')} className='inputTypeInput' type='text' />
                        </div>

                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>City</label>
                            </div>
                            <input {...register('city')} className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>State</label>
                            </div>
                            <select className='inputTypeSelect'>
                                <option>-Please select-</option>
                            </select>
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Public Address</label>
                            </div>
                            <input {...register('pubic_address')} className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label> Wallet Address</label>
                            </div>
                            <input {...register('wallet_address')} className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <h2 className='editProfileInfo' >ACCOUNT HANDLER INFO </h2>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>First Name</label>
                            </div>
                            <input {...register('first_name')} className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Last Name</label>
                            </div>
                            <input {...register('last_name')} className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Email</label>
                            </div>
                            <input {...register('email')} className='inputTypeInput' type='email' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Contact Info</label>
                            </div>
                            <input {...register('contact_number')} className='inputTypeInput' type='number' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Job Title</label>
                            </div>
                            <input {...register('job_title')} className='inputTypeInput' type='text' />
                        </div>

                    </div>
                    <h2 className='editProfileInfo' >CHANGE PASSWORD </h2>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Email</label>
                            </div>
                            <input {...register('email')} className='inputTypeInput' type='email' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Current Password</label>
                            </div>
                            <input className='inputTypeInput' type='password' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>New Password</label>
                            </div>
                            <input className='inputTypeInput' type='password' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Re-enter New Password</label>
                            </div>
                            <input className='inputTypeInput' type='password' />
                        </div>
                    </div>
                    <h2 className='editProfileInfo' >DOCUMENTS</h2>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <UploadFile name={'Aadhar card'} setFile={setAadharCard} />

                        </div>
                        <div className='companyTypeInputContainer2'>

                            <UploadFile name={'Pan card'} setFile={setPanCard} />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <UploadFile name={'Registration card'} setFile={setFile} />

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