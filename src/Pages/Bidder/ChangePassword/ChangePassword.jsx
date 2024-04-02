import React, { useRef, useState, useEffect } from 'react'
import BidderNav from '../../../components/BidderNav/Nav'
import * as yup from 'yup'
import { Avatar } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import { yupResolver } from '@hookform/resolvers/yup'
import { CircularProgress } from "@mui/material";

const ChangePassword = () => {

    // Schema for changing password
    const schema = yup.object().shape({
        email: yup.string().required('Email is required'),
        old_password: yup.string().required('Current Password is required'),
        new_password: yup.string().required('New password is required'),
        confirm_password: yup.string().oneOf([yup.ref('new_password'), null]).min(5).required('Password do not match'),

    })

    const [isLoading, setIsLoading] = useState(false)

    const {
        getValues,
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
        reValidateMode: "onSubmit",
        mode: "onChange",
    });

    const navigate = useNavigate()

    const user = useSelector(state => state.bidder.user)

    const [userDetails, setUserDetails] = useState(user)

    const { token, bidder_id } = user

    const [profilePicture, setProfilePicture] = useState(null)

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

            const data = await res.json()

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

    // get profile picture

    useEffect(() => {
        fetch(`https://school-project-production-459d.up.railway.app/v15/profile/picture/bidder/${bidder_id}`, {
            method: 'GET',
            headers: {
                'Authorization': `${token}`,
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data => setProfilePicture(data))
    }, [token, bidder_id])

    const updatePassword = async () => {

        const info = getValues()
        info.bidder_id = bidder_id
        try {
            setIsLoading(true)
            const res = await fetch('https://school-project-production-459d.up.railway.app/v14/change/password/bidder',
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(info)
                }
            )
            const data = await res.json();

            setIsLoading(false)


            if (res.ok) {
                toast.success(data.message, {
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
        catch (err) {
            setIsLoading(false)
            console.log(err)
        }
    }

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
                <form onSubmit={handleSubmit(updatePassword)} >
                    <h2 className='editProfileInfo' >CHANGE PASSWORD</h2>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Email</label>
                            </div>
                            <input {...register('email')} className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Current Password</label>
                            </div>
                            <input {...register('old_password')} className='inputTypeInput' type='password' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>New Password</label>
                            </div>
                            <input {...register('new_password')} className='inputTypeInput' type='password' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Re-enter Password</label>
                            </div>

                            <input className='inputTypeInput' type='password' {...register('confirm_password')} />
                        </div>
                        <p className='errMsg' >{errors && errors?.confirm_password?.message}</p>
                    </div>
                    <div className='confirmBtnContainer'>
                        <CustomBtn >{isLoading ? <CircularProgress color="primary" thickness={10} size={18} /> : 'Confirm Changes'}</CustomBtn>
                    </div>
                </form>

            </div>

        </div>
    )
}

export default ChangePassword