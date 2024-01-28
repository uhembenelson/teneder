import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import UploadFile from '../../../components/UploadFile/UploadFile'
import { toast } from "react-toastify";
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useDispatch, useSelector } from 'react-redux'
import { registerOrganization } from '../../../Redux/Organization/Action'

const OrganizationSignUp = () => {
    const [contact_number, setContactNumber] = useState()
    const [file, setFile] = useState(null)
    const [AadharCard, setAadharCard] = useState(null)
    const [panCard, setPanCard] = useState(null)
    const schema = yup.object().shape({
        name_of_organization: yup.string().required('Company name is required'),
        organization_website: yup.string().required('organization_website is required'),
        address_one: yup.string().required('Address one is required'),
        state: yup.string().required('State is required'),
        city: yup.string().required('City is required'),
        first_name: yup.string().required('First Name is required'),
        last_name: yup.string().required('Last Name is required'),
        postal_code: yup.string().required('Postal Code is required'),
        checked: yup.string().required(),
        job_title: yup.string().required(),
        email: yup.string().email().required('Email is required'),
        confirm_email: yup.string().email().oneOf([yup.ref('email'), null]).required('Email is required'),
        registration_number: yup.string().required('Registration number is required'),
        public_address: yup.string().required('Public Address is required'),
        wallet_address: yup.string().required('Wallet Address is required'),
        password: yup.string().min(5).required('Password must be greater than 6 characters'),
        confirm_password: yup.string().oneOf([yup.ref('password'), null]).min(5).required('Password do not match'),
        // registration_certificate: yup.string().required('Registration Certificate is required'),
    })

    const dispatch = useDispatch()

    const [companyType, setCompanyType] = useState('Private')
    const [no_of_employees, setNo_of_employees] = useState(2)
    const [states, setStates] = useState([])
    const [salutation, setSalutation] = useState('mr')

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

    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/states', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "country": "India" })
        }).then(res => res.json()).then(data => setStates(data?.data?.states))
    }, [])





    const registerUser = async () => {
        const data = getValues()


        const regFormData = new FormData();

        regFormData.append('name_of_organization', data?.name_of_organization)
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

        dispatch(registerOrganization(regFormData))




    }

    const isRegistered = useSelector(state => state.organization.isRegistered)


    const navigate = useNavigate()

    useEffect(() => {
        if (isRegistered) {
            navigate("/organization/login");
        }

    }, [isRegistered, navigate])
    return (
        <div>

            <div className='signUpContainer' >
                <div className='signUpBox' >
                    <div onClick={() => navigate(-1)}>
                        <p className='alreadyText'><i className="ri-arrow-left-line"></i> Return</p>
                    </div>
                    <div className='memberContainer' >
                        <p  >Already a member?</p>
                        <Link className='loginText' to='/organization/login' >LOG IN NOW</Link>
                    </div>
                </div>
                <form onSubmit={handleSubmit(registerUser)} >
                    <h2>COMPANY INFO</h2>
                    <div className='companyContainer' >
                        <div className='companyBox' >
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Company Type</label>
                                </div>
                                <select className='inputTypeSelect'
                                    onChange={(event) => setCompanyType(event.target.value)}
                                    value={companyType}>
                                    <option value='Private' >Private</option>
                                    <option value='Public' >Public</option>
                                </select>
                            </div>
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Full Name of Company</label>
                                </div>
                                <input className='inputTypeInput' type='text' {...register('name_of_organization')} />
                            </div>
                        </div>


                    </div>

                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Registration No. / Organization No.</label>
                            </div>
                            <input className='inputTypeInput' placeholder='E.g. 201903124587' type='text' {...register('registration_number')} />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Registration Certificate</label>
                            </div>
                            <UploadFile setFile={setFile} />
                        </div>

                    </div>
                    <div className='companyContainer' >
                        <div className='companyBox' >
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Number of Employees</label>
                                </div>
                                <select className='inputTypeSelect'
                                    onChange={(event) => setNo_of_employees(event.target.value)}
                                    value={no_of_employees}>
                                    <option value='1' >1</option>
                                    <option value='5'>5</option>
                                    <option value='10'>10</option>
                                    <option value='20'>20</option>
                                    <option value='50'>50</option>
                                </select>
                            </div>
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Company Website</label>
                                </div>
                                <input {...register('organization_website')} className='inputTypeInput' type='url' placeholder='E.g. https://...' />
                            </div>
                        </div>

                    </div>

                    <h2>ORGANIZATION PRIMARY ADDRESS</h2>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Address Line 1</label>
                            </div>
                            <input className='inputTypeInput' type='text' {...register('address_one')} />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Address Line 2</label>
                            </div>
                            <input className='inputTypeInput' type='text' {...register('address_two')} />
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>Address Line 3</label>
                            </div>
                            <input className='inputTypeInput' type='text' {...register('address_three')} />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>City</label>
                            </div>
                            <input className='inputTypeInput' type='text' {...register('city')} />
                        </div>
                    </div>
                    <div className='companyContainer' >
                        <div className='companyBox' >
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>State</label>
                                </div>
                                <select className='inputTypeSelect' {...register('state')}>
                                    {
                                        states?.map((state, id) => (
                                            <option value={state?.name} key={id} >{state?.name}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Postal Code</label>
                                </div>
                                <input className='inputTypeInput' type='number' {...register('postal_code')} />
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
                                <select className='inputTypeSelect' onChange={(event) => setSalutation(event.target.value)}
                                    value={salutation}>
                                    <option value='mr' >Mr</option>
                                    <option value='mrs' >Mrs</option>
                                </select>
                            </div>

                        </div>

                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label>First Name</label>
                            </div>
                            <input className='inputTypeInput' type='text' {...register('first_name')} />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Last Name</label>
                            </div>
                            <input className='inputTypeInput' type='text' {...register('last_name')} />
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
                                value={contact_number}
                                defaultCountry="IN"
                                style={{ border: 'none', outline: 'none' }}
                                onChange={setContactNumber}
                                {...register('contact_number')}
                            />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Job Title</label>
                            </div>
                            <input className='inputTypeInput' type='text' {...register('job_title')} />
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Email</label>
                            </div>
                            <input className='inputTypeInput' type='email' placeholder='E.g. example@domain.com' {...register('email')} />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Re-enter Email</label>
                            </div>
                            <input className='inputTypeInput' type='email'{...register('confirm_email')} />
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Password</label>
                            </div>
                            <input className='inputTypeInput' type='password' {...register('password')} />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Re-enter Password</label>
                            </div>
                            <input className='inputTypeInput' type='password' {...register('confirm_password')} />
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Public Address</label>
                            </div>
                            <input className='inputTypeInput' type='text' {...register('public_address')} />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Wallet Address</label>
                            </div>
                            <input className='inputTypeInput' type='text' {...register('wallet_address')} />
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Aadhar card </label>
                            </div>
                            <UploadFile setFile={setAadharCard} />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <label>Pan Card</label>
                            </div>
                            <UploadFile setFile={setPanCard} />
                        </div>
                    </div>
                    <div>
                        <div className='typeInput' >
                            <input type='checkbox' {...register('checked')} />
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

export default OrganizationSignUp

