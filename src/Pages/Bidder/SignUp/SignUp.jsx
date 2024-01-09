import React, { useState } from 'react'

import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import UploadFile from '../../../components/UploadFile/UploadFile'
import BidderHomeNavBar from '../../../components/BidderHomeNavBar/BidderHomeNavBar'

const SignUp = () => {
    const [value, setValue] = useState()
    const navigate = useNavigate()
    return (
        <div>
            <BidderHomeNavBar />
            <div className='signUpContainer' >
                <div className='signUpBox' >
                    <div onClick={() => navigate(-1)}>
                        <p className='alreadyText'><i className="ri-arrow-left-line"></i> Return</p>
                    </div>
                    <div className='memberContainer' >
                        <p  >Already a member?</p>
                        <Link className='loginText' to='/bidder/signin' >LOG IN NOW</Link>
                    </div>
                </div>
                <form>
                    <h2>COMPANY INFO</h2>
                    <div className='companyContainer' >
                        <div className='companyBox' >
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Company Type</label>
                                </div>
                                <select className='inputTypeSelect'>
                                    <option>-Please select-</option>
                                </select>
                            </div>
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Full Name of Company</label>
                                </div>
                                <input className='inputTypeInput' type='text' />
                            </div>
                        </div>

                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Registration No. / Organization No.</label>
                            </div>
                            <input className='inputTypeInput' placeholder='E.g. 201903124587' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Registration Certificate</label>
                            </div>
                            <UploadFile />
                        </div>
                    </div>
                    <div className='companyContainer' >
                        <div className='companyBox' >
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Number of Employees</label>
                                </div>
                                <select className='inputTypeSelect'>
                                    <option>-Please select-</option>
                                </select>
                            </div>
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Company Website</label>
                                </div>
                                <input className='inputTypeInput' type='url' placeholder='E.g. https://...' />
                            </div>
                        </div>

                    </div>

                    <h2>COMPANY PRIMARY ADDRESS</h2>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Address Line 1</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Address Line 2</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Address Line 3</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>City</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyContainer' >
                        <div className='companyBox' >
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>State</label>
                                </div>
                                <select className='inputTypeSelect'>
                                    <option>-Please select-</option>
                                </select>
                            </div>
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Postal Code</label>
                                </div>
                                <input className='inputTypeInput' type='number' />
                            </div>
                        </div>

                    </div>
                    <h2>USER INFO</h2>
                    <div className='companyContainer' >
                        <div className='companyBox' >
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Salutation</label>
                                </div>
                                <select className='inputTypeSelect'>
                                    <option>-Please select-</option>
                                </select>
                            </div>

                        </div>

                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>First Name</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Last Name</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Contact Number</label>
                            </div>
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={value}
                                defaultCountry="IN"
                                style={{ border: 'none', outline: 'none' }}
                                onChange={setValue} />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Job Title</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Email</label>
                            </div>
                            <input className='inputTypeInput' type='email' placeholder='E.g. example@domain.com' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Re-enter Email</label>
                            </div>
                            <input className='inputTypeInput' type='email' />
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Password</label>
                            </div>
                            <input className='inputTypeInput' type='password' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Re-enter Password</label>
                            </div>
                            <input className='inputTypeInput' type='password' />
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Public Address</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Wallet Address</label>
                            </div>
                            <input className='inputTypeInput' type='text' />
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Aadhar card </label>
                            </div>
                            <UploadFile />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Pan Card</label>
                            </div>
                            <UploadFile />
                        </div>
                    </div>
                    <div>
                        <div className='typeInput' >
                            <input type='checkbox' />
                            <span>*</span>
                            <label>I have read and agreed to <span id='termsOfUse' >Terms of Use</span>and <span id='termsOfUse' >Privacy Policy</span></label>
                        </div>
                    </div>
                    <button className='registerBtn' type='submit' >Complete Registration</button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
