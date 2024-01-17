import React from 'react'
import { Avatar } from '@mui/material'
import UploadFile from '../../../components/UploadFile/UploadFile'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import BidderNav from '../../../components/BidderNav/Nav'

const BidderEditProfile = () => {
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

                        <p className='editProfileName' >Bidder Name</p>
                        <p className='editProfileName'>Company Name</p>
                    </div>
                </div>
                <h2 className='editProfileInfo' >COMPANY INFO</h2>
                <form>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Full Name of Company</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
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
                            <input className='inputTypeInput' type='text' />
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
                            <input className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label> Company Address</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Postal Code</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>

                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>City</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
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
                            <input className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label> Wallet Address</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <h2 className='editProfileInfo' >ACCOUNT HANDLER INFO </h2>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>First Name</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Last Name</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Email</label>
                            </div>
                            <input className='inputTypeInput' type='email' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Contact Info</label>
                            </div>
                            <input className='inputTypeInput' type='number' />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Job Title</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>

                    </div>
                    <h2 className='editProfileInfo' >CHANGE PASSWORD </h2>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Email</label>
                            </div>
                            <input className='inputTypeInput' type='email' />
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
                            <UploadFile name={'Aadhar card'} />

                        </div>
                        <div className='companyTypeInputContainer2'>

                            <UploadFile name={'Pan card'} />
                        </div>
                    </div>
                    <div className='companyBox' >

                        <div className='companyTypeInputContainer2'>
                            <UploadFile name={'Registration card'} />

                        </div>

                    </div>
                    <div className='confirmBtnContainer'>
                        <CustomBtn title={'Confirm Changes'} />
                    </div>
                </form>
            </div>

        </div>
    )
}



export default BidderEditProfile