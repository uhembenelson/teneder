import React, { useEffect, useState } from 'react'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import './SmartContract.css'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useSelector } from 'react-redux'
import icons from '../../../assets/Icons.png'
import bitCoin from '../../../assets/Money Bag Bitcoin.png'
import verified from '../../../assets/ID Verified.png'
import stats from '../../../assets/Statistics Report.png'
import timer from '../../../assets/Sand Timer.png'
import { toast } from 'react-toastify'
import { CircularProgress } from '@mui/material'

const SmartContract = () => {

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
        percentage: yup.string().required('Percentage value is required'),
        interval_of_payment: yup.string().required('Interval of payment is required'),

    })


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





    return (
        <div>
            <CompanyNav />
            <div className='smartContractContainer' >
                <h1 className='smartContractHeading' >Welcome to Smart Contract Take a step forward into the virtual world</h1>
                <div className='smartContractInputHolder' >
                    <div className='smartContractInputBox' >
                        <label htmlFor='orgName' >Name of the Organization</label>
                        <div className='smartContractInputContainer' >
                            <img className='smartContractIcons' src={icons} alt='' />
                            <input {...register('name_of_organization')} className='smartContractInput' id='orgName' />
                        </div>
                    </div>
                    <div className='smartContractInputBox' >
                        <label htmlFor='orgName' >Ethereum Total Value </label>
                        <div className='smartContractInputContainer' >
                            <img className='smartContractIcons' src={bitCoin} alt='' />
                            <input {...register('ethereum_value')} className='smartContractInput' id='orgName' />
                        </div>
                    </div>
                </div>
                <div className='smartContractInputHolder' >
                    <div className='smartContractInputBox' >
                        <label htmlFor='orgName' >Tender ID</label>
                        <div className='smartContractInputContainer' >
                            <img className='smartContractIcons' src={verified} alt='' />
                            <input {...register('tender_id')} className='smartContractInput' id='orgName' />
                        </div>
                    </div>
                    <div className='smartContractInputBox' >
                        <label htmlFor='orgName' >Percentage for Transaction </label>
                        <div className='smartContractInputContainer' >
                            <img className='smartContractIcons' src={stats} alt='' />
                            <input {...register('percentage')} className='smartContractInput' id='orgName' />
                        </div>
                    </div>
                </div>
                <div className='smartContractInputHolder' >
                    <div className='smartContractInputBox' >
                        <label htmlFor='orgName' >Name of the Bidder</label>
                        <div className='smartContractInputContainer' >
                            <img className='smartContractIcons' src={icons} alt='' />
                            <input {...register('name_of_bidder')} className='smartContractInput' id='orgName' />
                        </div>
                    </div>
                    <div className='smartContractInputBox' >
                        <label htmlFor='orgName' >Interval of Payment </label>
                        <div className='smartContractInputContainer' >
                            <img className='smartContractIcons' src={timer} alt='' />
                            <input {...register('interval_of_payment')} className='smartContractInput' id='orgName' />
                        </div>
                    </div>
                </div>
                <div className='smartContractBtnContainer' >
                    <button className='evalButton' > Initiate smart contract</button>
                </div>

            </div>
        </div>
    )
}

export default SmartContract