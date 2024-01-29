import React, { useEffect, useState } from 'react'
import userImage from '../../../assets/Ellipse 4.png'
import pdf from '../../../assets/Import Pdf.png'
import { useNavigate } from 'react-router-dom'
import userRegImage from '../../../assets/Registration.png'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'



const OrganizationProfile = () => {

    const [panCardLink, setPanCardLink] = useState('')
    const [registrationCertLink, setRegCertLink] = useState('')
    const [aadharCardLink, setAadharCardLink] = useState('')

    const user = useSelector(state => state.organization.user)

    const {
        setValue,
        register,
    } = useForm({
        criteriaMode: "all",
        reValidateMode: "onSubmit",
        mode: "onChange",
    });


    useEffect(() => {
        fetch(`https://school-project-production-459d.up.railway.app/v3/download/${user?.pan_card}`)
            .then(res => setPanCardLink(res.url))
        fetch(`https://school-project-production-459d.up.railway.app/v3/download/${user?.aadhar_card}`)
            .then(res => setAadharCardLink(res.url))
        fetch(`https://school-project-production-459d.up.railway.app/v3/download/${user?.registration_certificate}`)
            .then(res => setRegCertLink(res.url))
    }, [setPanCardLink, setRegCertLink, setAadharCardLink])


    useEffect(() => {
        setValue('name_of_organization', user?.name_of_organization)
        setValue('organization_type', user?.organization_type)
        setValue('registration_number', user?.registration_number)
        setValue('no_of_employees', user?.no_of_employees)
        setValue('address_one', user?.address_one)
        setValue('organization_website', user?.organization_website)
        setValue('postal_code', user?.postal_code)
        setValue('state', user?.state)
        setValue('public_address', user?.public_address)
        setValue('wallet_address', user?.wallet_address)
    }, [setValue, user])

    const navigate = useNavigate()

    const starArray = [0, 1, 2, 3, 4]
    return (
        <div>
            <div>
                <CompanyNav />
                <div className='bidderProfile' >
                    <div className='bidderProfileContainer' >
                        <div className='bidderProfileNav' >
                            <p onClick={() => navigate(-1)} className='alreadyText'><i className="ri-arrow-left-line"></i> Return</p>

                            <button className='editProfileBtn' onClick={() => navigate('/organization/edit-profile')} >

                                Edit Profile
                                <img src={userRegImage} alt='' />
                            </button>
                        </div>
                        <div className='profileBox' >
                            <div className='bidderProfileLeft' >
                                <div className='bidderProfileInfoContainer'>
                                    <h2 className='profileUsername' >{user?.name_of_organization}</h2>
                                    <p className='profileUserwork' >Promise for the future</p>
                                    <div className='profileImageContainer'>
                                        <img className='profileImage' src={userImage} alt='' />
                                    </div>
                                    <div className='starContainer profileRatingContainer ' >
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

                                </div>
                                <div className='profileDetailsContainer' >
                                    <p><span>First Name :</span><span>{user?.first_name}</span></p>
                                    <p><span>Last Name :</span><span>{user?.last_name}</span></p>
                                    <p><span>Contact Number :</span><span>{user?.contact_number}</span></p>
                                    <p><span>Job Title  :</span><span></span>{user?.job_title}</p>
                                    <p><span>Email :</span><span>{user?.email}</span></p>
                                </div>
                            </div>
                            <div className='bidderProfileRight' >
                                <div className='userAndCompanyDetails' >
                                    <h2 className='detailsHeader' >USER AND COMPANY DETAILS</h2>
                                    <div className='companyBox' >
                                        <div className='companyTypeInputContainer2'>
                                            <div className='typeInput' >
                                                <label className='profileLabel'>Full Name of Organization</label>
                                            </div>
                                            <input className='inputTypeInput' type='text' {...register('name_of_organization')} />
                                        </div>
                                        <div className='companyTypeInputContainer2'>
                                            <div className='typeInput' >
                                                <label>Organization Type</label>
                                            </div>
                                            <input className='inputTypeInput' type='text' {...register('organization_type')} />
                                        </div>
                                    </div>
                                    <div className='companyBox' >
                                        <div className='companyTypeInputContainer2'>
                                            <div className='typeInput' >
                                                <label className='profileLabel'>Registration No.</label>
                                            </div>
                                            <input className='inputTypeInput' type='text' {...register('registration_number')} />
                                        </div>
                                        <div className='companyTypeInputContainer2'>
                                            <div className='typeInput' >
                                                <label>No. of Employees</label>
                                            </div>
                                            <input className='inputTypeInput' type='text' {...register('no_of_employees')} />
                                        </div>
                                    </div>
                                    <div className='companyBox' >
                                        <div className='companyTypeInputContainer2'>
                                            <div className='typeInput' >
                                                <label className='profileLabel'>Organization Address</label>
                                            </div>
                                            <input className='inputTypeInput' type='text' {...register('address_one')} />
                                        </div>
                                        <div className='companyTypeInputContainer2'>
                                            <div className='typeInput' >
                                                <label>Organization Website </label>
                                            </div>
                                            <input className='inputTypeInput' type='text' {...register('organization_website')} />
                                        </div>
                                    </div>
                                    <div className='companyBox' >
                                        <div className='companyTypeInputContainer2'>
                                            <div className='typeInput' >
                                                <label className='profileLabel'>Postal Code</label>
                                            </div>
                                            <input className='inputTypeInput' type='text' {...register('postal_code')} />
                                        </div>
                                        <div className='companyTypeInputContainer2'>
                                            <div className='typeInput' >
                                                <label>State</label>
                                            </div>
                                            <input className='inputTypeInput' type='text' {...register('state')} />
                                        </div>
                                    </div>
                                    <div className='companyBox' >
                                        <div className='companyTypeInputContainer2'>
                                            <div className='typeInput' >
                                                <label className='profileLabel'>Public Address</label>
                                            </div>
                                            <input className='inputTypeInput' type='text' {...register('public_address')} />
                                        </div>
                                        <div className='companyTypeInputContainer2'>
                                            <div className='typeInput' >
                                                <label>Wallet Address</label>
                                            </div>
                                            <input className='inputTypeInput' type='text' {...register('wallet_address')} />
                                        </div>
                                    </div>

                                </div>
                                <div className='userAndCompanyDocuments' >
                                    <h2 className='detailsHeader' >DOCUMENTS</h2>
                                    <div className='documentList' >
                                        <a href={aadharCardLink} className='docContainer'>
                                            <img className='pdfImage' src={pdf} alt='pdf' />
                                            <p className='docName' >Aadhar card</p>

                                        </a>
                                        <a href={panCardLink} className='docContainer' >
                                            <img className='pdfImage' src={pdf} alt='pdf' />
                                            <p className='docName' >Pan card</p>

                                        </a>
                                        <a href={registrationCertLink} className='docContainer' >
                                            <img className='pdfImage' src={pdf} alt='pdf' />
                                            <p className='docName' >Registration Certificate</p>

                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default OrganizationProfile