import React, { useEffect, useState } from 'react'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import img from '../../../assets/Startup life-pana 1.png'
import './OrganizationFeedback.css'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { CircularProgress } from '@mui/material'

const OrganizationFeedback = () => {
    const starArray = [1, 2, 3, 4, 5]
    const [clickedStar, setClickedStar] = useState(0)

    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()

    const user = useSelector(state => state.organization.user)

    const selectedTender = useSelector(state => state.organization.selectedTender)

    const { selectedBidder } = useSelector(state => state.organization)
    console.log(selectedBidder)


    const { token, organization_id } = user

    const schema = yup.object().shape({
        name_of_organization: yup.string().required('Company name is required'),
        tender_id: yup.string().required('tender id is required'),
        name_of_bidder: yup.string().required('Name of bidder is required'),
        ethereum_value: yup.string().required('Ethurium value is required'),

        comment: yup.string().required('Comment is required'),
    })
    const [name_of_organization, setName_of_organization] = useState()
    const [tender_id, setTender_id] = useState()
    const [name_of_bidder, setName_of_bidder] = useState()
    const [ethereum_value, setEthereum_value] = useState()
    const [comment, setComment] = useState('')


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
        setValue('name_of_organization', user.name_of_organization)
        setValue('tender_id', selectedTender.tender_id)
        setValue('name_of_bidder', selectedBidder?.name_of_company)
    }, [setValue, user, selectedTender])

    console.log("chcking here",selectedBidder)



    const selectStar = (id) => {
        setClickedStar(id)
        console.log(id)
    }

    const sendFeedback = async () => {
        // e.preventDefault()
        const formata = getValues()
        formata.rating = clickedStar
        const payload = {
            name_of_organization:user?.name_of_organization,
            tender_id:selectedTender.tender_id,
            name_of_bidder:selectedBidder?.name_of_bidder,
            ethereum_value:selectedBidder?.contract_worth,
            comment,
            rating: clickedStar,

        }

        console.log("testing payload",payload)


        try {
            setIsLoading(true)
            const res = await fetch('https://school-project-production-459d.up.railway.app/V5/feedback',{
                method: 'POST',
            headers: {
              'Authorization': `${token}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
            }
           )

            const data = await res.json()
            console.log("this is response",data.ok)
            // const data = await res.json();

            setIsLoading(false)
            if (res.ok) {
                toast.success('Feedback sent successfully', {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                    hideProgressBar: true,

                });
              navigate('/organization/home')
            }
        }
        catch (err) {
            setIsLoading(false)
            console.log(err)
        }

    }



    return (
        <div>
            <CompanyNav />
            <div className='feedback' >
                <div className='feedbackImageContainer' >
                    <img src={img} alt='' />
                </div>
                <div className='rightFeedbackContainer' >
                    <form onSubmit={handleSubmit(sendFeedback)}>
                        <div>
                            <h3>Name of the Organization</h3>
                            <div className='feedbackFormInputContainer' >
                                <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="21.3013" cy="16.565" r="6.313" fill="#59599B" />
                                    <ellipse cx="21.2998" cy="31.5583" rx="12.626" ry="7.10213" fill="#59599B" />
                                    <circle cx="21.3005" cy="21.2997" r="19.7281" stroke="#59599B" stroke-width="1.57825" />
                                </svg>
                                <input disabled={true} placeholder={user?.name_of_organization} type='text' />
                            </div>
                        </div>
                        <div>
                            <h3>Tender ID</h3>
                            <div className='feedbackFormInputContainer' >
                                <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="21.3013" cy="16.565" r="6.313" fill="#59599B" />
                                    <ellipse cx="21.2998" cy="31.5583" rx="12.626" ry="7.10213" fill="#59599B" />
                                    <circle cx="21.3005" cy="21.2997" r="19.7281" stroke="#59599B" stroke-width="1.57825" />
                                </svg>
                                <input disabled={true} placeholder={selectedTender?.tender_id} type='text' />
                            </div>
                        </div>
                        <div>
                            <h3>Name of the Bidder</h3>
                            <div className='feedbackFormInputContainer' >
                                <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="21.3013" cy="16.565" r="6.313" fill="#59599B" />
                                    <ellipse cx="21.2998" cy="31.5583" rx="12.626" ry="7.10213" fill="#59599B" />
                                    <circle cx="21.3005" cy="21.2997" r="19.7281" stroke="#59599B" stroke-width="1.57825" />
                                </svg>
                                <input disabled={true} placeholder={selectedBidder?.name_of_bidder} type='text' />
                            </div>
                        </div>
                        <div>
                            <h3>Etherium Value</h3>
                            <div className='feedbackFormInputContainer' >
                                <svg width="30" height="30" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="21.3013" cy="16.565" r="6.313" fill="#59599B" />
                                    <ellipse cx="21.2998" cy="31.5583" rx="12.626" ry="7.10213" fill="#59599B" />
                                    <circle cx="21.3005" cy="21.2997" r="19.7281" stroke="#59599B" stroke-width="1.57825" />
                                </svg>
                                <input disabled={true} placeholder={selectedBidder?.contract_worth} type='number' />
                            </div>
                        </div>
                        <h3 className='rateText' >Rate the overall work done by Bidder</h3>
                        <div className='ratingContainer' >
                            {
                                starArray.map((star) => {
                                    return (
                                        <svg onClick={() => selectStar(star)} key={star} width="28" height="26" viewBox="0 0 35 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2647 1.29994C17.4144 0.839288 18.0661 0.839288 18.2158 1.29994L21.5305 11.5016C21.7313 12.1196 22.3072 12.538 22.9571 12.538H33.6837C34.168 12.538 34.3694 13.1579 33.9776 13.4426L25.2996 19.7475C24.7738 20.1295 24.5538 20.8065 24.7546 21.4246L28.0694 31.6262C28.219 32.0868 27.6918 32.4699 27.2999 32.1852L18.6219 25.8802C18.0962 25.4983 17.3843 25.4983 16.8586 25.8802L8.18053 32.1852C7.78868 32.4699 7.26144 32.0868 7.41111 31.6262L10.7258 21.4246C10.9266 20.8065 10.7066 20.1295 10.1809 19.7475L1.5029 13.4426C1.11104 13.1579 1.31243 12.538 1.79679 12.538H12.5234C13.1733 12.538 13.7492 12.1196 13.95 11.5016L17.2647 1.29994Z" fill={star > clickedStar ? "white" : 'yellow'} stroke="#111" />
                                        </svg>

                                    )
                                })
                            }
                        </div>
                        <div className='feebackTextAreaContainer'>
                            <textarea
                            required
                            value={comment}
                             onChange={(e)=> setComment(e.target.value)}
                             className='feebackTextArea'  placeholder='Add your comments...' ></textarea>
                        </div>

                        <div className='feedBackBtnContainer' >
                            {/*<button className='closeBtn' >Cancel</button>*/}
                            <button 
                            onClick={sendFeedback} 
                            type='submit' className='submitFeedbackBtn' >{isLoading ? <CircularProgress color="primary" thickness={10} size={18} /> : 'Submit'}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OrganizationFeedback