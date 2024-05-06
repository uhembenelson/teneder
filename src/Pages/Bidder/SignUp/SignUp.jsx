import React, { useState, useEffect } from 'react'
import { toast } from "react-toastify";
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom'
import 'react-phone-number-input/style.css'
import UploadFile from '../../../components/UploadFile/UploadFile'
import BidderHomeNavBar from '../../../components/BidderHomeNavBar/BidderHomeNavBar'
import { CircularProgress } from '@mui/material';
import { ethers } from "ethers";

const SignUp = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [file, setFile] = useState(null)
    const [AadharCard, setAadharCard] = useState(null)
    const [panCard, setPanCard] = useState(null)
    const [defaultAccount, setDefaultAccount] = useState('');
    const schema = yup.object().shape({
        name_of_company: yup.string().required('Company name is required'),
        organization_website: yup.string().required('organization_website is required'),
        address_one: yup.string().required('Address one is required'),
        state: yup.string().required('State is required'),
        city: yup.string().required('City is required'),
        first_name: yup.string().required('First Name is required'),
        last_name: yup.string().required('Last Name is required'),
        postal_code: yup.string().required('Postal Code is required'),
        // checked: yup.string().required(),
        job_title: yup.string().required('GST Number is required'),
        no_of_employees: yup.string().required('NO Of Employees is required'),
        contact_number: yup.string().required(),
        email: yup.string().email().required('Email is required'),
        confirm_email: yup.string().email().oneOf([yup.ref('email'), null]).required('Email is required'),
        registration_number: yup.string().required('Registration number is required'),
        public_address: yup.string().required('Public Address is required'),
        wallet_address: yup.string().required('Wallet Address is required'),
        password: yup.string().min(5).required('Password must be greater than 6 characters'),
        confirm_password: yup.string().oneOf([yup.ref('password'), null]).min(5).required('Password do not match'),

    })


    const [companyType, setCompanyType] = useState('Private')
    const [states, setStates] = useState([])
    const [salutation, setSalutation] = useState('mr')



    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                window.ethereum
                    .request({ method: "eth_requestAccounts" })
                    .then((result) => {
                        console.log(result[0]);
                        setDefaultAccount(result[0]);
                    });
            } catch (error) { }
        } else {
            document.getElementById("my_modal_1").showModal();
        }
    };

    useEffect(() => {
        connectWallet();
    }, []);

    console.log("this is the wallet address", defaultAccount);




    const {
        getValues,
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        criteriaMode: "all",
        reValidateMode: "onSubmit",
        mode: "onChange",
    });


    useEffect(() => {
        fetch('https://countriesnow.space/api/v0.1/countries/').then(res => res.json()).then(data => setStates(data.data))
    }, [])

    const registerBidder = async () => {
        console.log(errors)
        const userInfo = getValues()
        const regFormData = new FormData();

        regFormData.append('name_of_company', userInfo?.name_of_company)
        regFormData.append('organization_website', userInfo?.organization_website)
        regFormData.append('no_of_employees', userInfo?.no_of_employees)
        regFormData.append('address_one', userInfo?.address_one)
        regFormData.append('address_three', userInfo?.address_three)
        regFormData.append('address_two', userInfo?.address_two)
        regFormData.append('state', userInfo?.state)
        regFormData.append('city', userInfo?.city)
        regFormData.append('first_name', userInfo?.first_name)
        regFormData.append('last_name', userInfo?.last_name)
        regFormData.append('postal_code', userInfo?.postal_code)
        regFormData.append('job_title', userInfo?.job_title)
        regFormData.append('email', userInfo?.email)
        regFormData.append('confirm_email', userInfo?.confirm_email)
        regFormData.append('password', userInfo?.password)
        regFormData.append('confirm_password', userInfo?.confirm_password)
        regFormData.append("wallet_address", defaultAccount);
        regFormData.append('public_address', userInfo?.public_address)
        regFormData.append('registration_number', userInfo?.registration_number)
        regFormData.append('contact_number', userInfo?.contact_number)
        regFormData.append('registration_certificate', file)
        regFormData.append('aadhar_card', AadharCard)
        regFormData.append('pan_card', panCard)

        console.log(errors)

        if (!file || !panCard || !AadharCard) {
            return
        }
        else {


            try {
                console.log(errors)
                setIsLoading(true)
                let res = await fetch(`https://school-project-production-459d.up.railway.app/v2/auth/signup`, {
                    method: "POST",
                    headers: {
                        // "Content-Type": "application/json",
                    },
                    body: regFormData
                })
                setIsLoading(false)
                const data = await res.json();
                console.log(res)
                console.log(data)

                // localStorage.setItem('email', data?.email)
                // localStorage.setItem('reset', data?.reset)

                if (res.ok) {
                    toast.success(data.message, {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                        hideProgressBar: true,
                    });
                    navigate("/bidder/signin");

                }

                else {
                    toast.error('Something went wrong', {
                        position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                        hideProgressBar: true,
                    });
                }

            } catch (err) {
                console.log(err)
            }
        }


    }



    const navigate = useNavigate()
    return (

        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hi, dear</h3>
                    <p className="py-4">MetaMask is required on this application.</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button
                                onClick={() =>
                                    window.open(
                                        "https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
                                        "_blank"
                                    )
                                }
                                className="btn"
                            >
                                Install MetaMast
                            </button>
                        </form>
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>


            <div>

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
                    <form onSubmit={handleSubmit(registerBidder)} >
                        <h2>COMPANY INFO</h2>
                        <div className='companyContainer' >
                            <div className='companyBox' >
                                <div className='companyTypeInputContainer2'>
                                    <div className='typeInput' >
                                        <span>*</span>
                                        <label>Company Type</label>
                                    </div>
                                    <select className='inputTypeSelect' onChange={(event) => setCompanyType(event.target.value)}
                                        value={companyType}>
                                        <option value='Private' >Private</option>
                                        <option value='Public' >Public</option>
                                    </select>
                                </div>
                                <div style={{ borderColor: errors?.name_of_company?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                    <div className='typeInput' >
                                        <span>*</span>
                                        <label>Full Name of Company</label>
                                    </div>
                                    <input placeholder='Name of Company' className='inputTypeInput' {...register('name_of_company')} type='text' />
                                </div>
                            </div>

                        </div>
                        <div className='companyBox' >
                            <div style={{ borderColor: errors?.registration_number?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Registration No. / Organization No.</label>
                                </div>
                                <input  {...register('registration_number')} className='inputTypeInput' placeholder='E.g. 201903124587' type='text' />
                            </div>
                            <div style={{ borderBottom: file ? '2px solid #ccc' : '2px solid red' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Registration Certificate</label>
                                </div>
                                <UploadFile setFile={setFile} />
                                {file && <p className='fileName'>{file?.name}</p>}
                            </div>
                        </div>
                        <div className='companyContainer' >
                            <div className='companyBox' >
                                <div className='companyTypeInputContainer2'>
                                    <div className='typeInput' >
                                        <span>*</span>
                                        <label>Number of Employees</label>
                                    </div>

                                    <input {...register('no_of_employees')} className='inputTypeInput' type='number' placeholder='20' />
                                </div>
                                <div style={{ borderColor: errors?.organization_website?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                    <div className='typeInput' >
                                        <span>*</span>
                                        <label>Company Website</label>
                                    </div>
                                    <input {...register('organization_website')} className='inputTypeInput' type='url' placeholder='E.g. https://...' />
                                </div>
                            </div>

                        </div>

                        <h2>COMPANY PRIMARY ADDRESS</h2>
                        <div className='companyBox' >
                            <div style={{ borderColor: errors?.address_one?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Address Line 1</label>
                                </div>
                                <input placeholder='123 Street' {...register('address_one')} className='inputTypeInput' type='text' />
                            </div>
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >

                                    <label>Address Line 2</label>
                                </div>
                                <input placeholder='123 Street' {...register('address_two')} className='inputTypeInput' type='text' />
                            </div>
                        </div>
                        <div className='companyBox' >
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >

                                    <label>Address Line 3</label>
                                </div>
                                <input placeholder='123 Street' {...register('address_three')} className='inputTypeInput' type='text' />
                            </div>
                            <div style={{ borderColor: errors?.city?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>City</label>
                                </div>
                                <input placeholder='City' {...register('city')} className='inputTypeInput' type='text' />
                            </div>
                        </div>
                        <div className='companyContainer' >
                            <div className='companyBox' >
                                <div className='companyTypeInputContainer2'>
                                    <div className='typeInput' >
                                        <span>*</span>
                                        <label>Country</label>
                                    </div>

                                    <input placeholder='Enter Country' {...register('state')} className='inputTypeInput' type='text' />
                                </div>
                                <div style={{ borderColor: errors?.postal_code?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                    <div className='typeInput' >
                                        <span>*</span>
                                        <label>Postal Code</label>
                                    </div>
                                    <input placeholder='1235678989' {...register('postal_code')} className='inputTypeInput' type='number' />
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
                            <div style={{ borderColor: errors?.first_name?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>First Name</label>
                                </div>
                                <input placeholder='John' className='inputTypeInput' type='text' {...register('first_name')} />
                            </div>
                            <div style={{ borderColor: errors?.last_name?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Last Name</label>
                                </div>
                                <input placeholder='Doe' className='inputTypeInput' type='text' {...register('last_name')} />
                            </div>
                        </div>
                        <div className='companyBox' >
                            <div style={{ borderColor: errors?.contact_number?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>GST Number</label>
                                </div>

                                <input placeholder="Enter GST Number" maxLength={16} className='inputTypeInput' type='text' {...register('contact_number')} />

                            </div>
                            <div style={{ borderColor: errors?.job_title?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Job Title</label>
                                </div>
                                <input placeholder="Enter Job Title" className='inputTypeInput' {...register('job_title')} type='text' />
                            </div>
                        </div>
                        <div className='companyBox' >
                            <div style={{ borderColor: errors?.email?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Email</label>
                                </div>
                                <input className='inputTypeInput' type='email' placeholder='E.g. example@domain.com' {...register('email')} />
                            </div>
                            <div style={{ borderColor: errors?.confirm_email?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Re-enter Email</label>
                                </div>
                                <input className='inputTypeInput' type='email' placeholder='E.g. example@domain.com' {...register('confirm_email')} />
                            </div>
                        </div>
                        <div className='companyBox' >
                            <div style={{ borderColor: errors?.password?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Password</label>
                                </div>
                                <input className='inputTypeInput' type='password' {...register('password')} />
                            </div>
                            <div style={{ borderColor: errors?.confirm_password?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Re-enter Password</label>
                                </div>
                                <input className='inputTypeInput' type='password' {...register('confirm_password')} />
                            </div>
                        </div>
                        <div style={{ borderColor: errors?.public_address?.message ? 'red' : '#ccc' }} className='companyBox' >
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Public Address</label>
                                </div>
                                <input className='inputTypeInput' type='text' {...register('public_address')} maxLength={16} />
                            </div>
                            <div style={{ borderColor: errors?.wallet_address?.message ? 'red' : '#ccc' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Wallet Address</label>
                                </div>

                                <input className='inputTypeInput'
                                    type='text'
                                    {...register('wallet_address')}
                                // maxLength={16}
                                // value={defaultAccount}
                                />
                            </div>
                        </div>
                        <div className='companyBox' >
                            <div style={{ borderBottom: AadharCard ? '2px solid #ccc' : '2px solid red' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Aadhar card </label>
                                </div>
                                <UploadFile setFile={setAadharCard} />
                                {AadharCard && <p className='fileName'>{AadharCard?.name}</p>}
                            </div>
                            <div style={{ borderBottom: panCard ? '2px solid #ccc' : '2px solid red' }} className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Pan Card</label>
                                </div>
                                <UploadFile setFile={setPanCard} />
                                {panCard && <p className='fileName'>{panCard?.name}</p>}
                            </div>
                        </div>
                        <div>
                            <div className='typeInput' >
                                <input type='checkbox' />
                                <span>*</span>
                                <label>I have read and agreed to <span id='termsOfUse' >Terms of Use</span>and <span id='termsOfUse' >Privacy Policy</span></label>
                            </div>
                        </div>
                        <button className='registerBtn' type='submit' >{isLoading ? < CircularProgress color="primary" thickness={10} size={18} /> : 'Complete Registration'}</button>
                    </form>
                </div>
            </div>


        </>



    )
}

export default SignUp
