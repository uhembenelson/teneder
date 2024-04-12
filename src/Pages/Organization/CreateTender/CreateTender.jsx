import React, { useState, useEffect } from 'react'
import DatePicker from 'react-date-picker';
import './CreateTender.css'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import UploadFile from '../../../components/UploadFile/UploadFile'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { CircularProgress } from "@mui/material";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

const CreateTender = () => {

    const [duration_of_bidding_start, setDuration_of_bidding_start] = useState(null)
    const [duration_of_bidding_end, setDuration_of_bidding_end] = useState(null)

    const [duration_of_work_start, setDuration_of_work_start] = useState(null)
    const [duration_of_work_end, setDuration_of_work_end] = useState(null)

    const [bidStartErr, setBidStartErr] = useState(false)
    const [bidEndErr, setBidEndErr] = useState(false)
    const [workStartErr, setWorkStartErr] = useState(false)
    const [workEndErr, setWorkEndErr] = useState(false)

    const [value, onChange] = useState(new Date())

    // 

    const navigate = useNavigate()

    // Schema for creating request
    const schema = yup.object().shape({
        description_tender: yup.string().required('Description is required'),
        tender_motive: yup.string().required('Motive is required'),
        address_one: yup.string().required('Address one is required'),
        state: yup.string().required('State is required'),
        city: yup.string().required('City is required'),
        // duration_of_bidding_start: yup.string().required('Duration of bidding start is required'),
        // duration_of_bidding_end: yup.string().required('Duration of bidding end is required'),
        // duration_of_work_start: yup.string().required('Duration of work start is required'),
        // duration_of_work_end: yup.string().required('Duration of work end is required'),
        postal_code: yup.string().required('Postal Code is required'),
        material_required: yup.string().required('Materials is required')
    })

    const [appendices, setFile] = useState(null)

    const [err, setErr] = useState(null)

    const [states, setStates] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [type_of_tender, setCompanyType] = useState('Private')

    const [hasFileBeenSelected, setHasFileBeenSelected] = useState(false)


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
        fetch('https://countriesnow.space/api/v0.1/countries/')
            .then(res => res.json()).
            then(data => setStates(data.data))
    }, [])

    const user = useSelector(state => state.organization.user)






    useEffect(() => {

        setValue('address_one', user?.address_one)
        setValue('address_two', user?.address_two)
        setValue('address_three', user?.address_three)
        setValue('postal_code', user?.postal_code)
        setValue('state', user?.state)
        setValue('city', user?.city)

    }, [setValue, user])

    const formData = new FormData();

    const createTender = async () => {

        const data = getValues()

        console.log(data)

        formData.append('description_tender', data?.description_tender)
        formData.append('tender_motive', data?.tender_motive)
        formData.append('organization_id', user?.organization_id)
        formData.append('address_one', data?.address_one)
        formData.append('address_three', data?.address_three)
        formData.append('address_two', data?.address_two)
        formData.append('state', data?.state)
        formData.append('city', data?.city)
        formData.append('postal_code', data?.postal_code)
        formData.append('duration_of_bidding_start', duration_of_bidding_start)
        formData.append('duration_of_bidding_end', duration_of_bidding_end)
        formData.append('duration_of_work_start', duration_of_work_start)
        formData.append('duration_of_work_end', duration_of_work_end)
        formData.append('type_of_tender', type_of_tender)
        formData.append('appendices', appendices)
        formData.append('material_required', data?.material_required)

        if (!appendices || !duration_of_bidding_start || !duration_of_bidding_end || !duration_of_work_start || !duration_of_work_end) {
            setErr('Required')
            setHasFileBeenSelected(true)
            setBidStartErr(true)
            setBidEndErr(true)
            setWorkStartErr(true)
            setWorkEndErr(true)
            return
        }



        else {
            setErr(null)
            setHasFileBeenSelected(false)
            setBidStartErr(false)
            setBidEndErr(false)
            setWorkStartErr(false)
            setWorkEndErr(false)
            try {
                setIsLoading(true)
                const res = await fetch('https://school-project-production-459d.up.railway.app/v4/tender/tender',
                    {
                        method: "POST",
                        headers: {
                            Authorization: `${user?.token}`,
                        },
                        body: formData,
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
                    navigate('/organization/manage-tender')
                }
            }
            catch (err) {
                setIsLoading(false)
                console.log(err)
            }
        }



    }



    return (
        <div>
            <CompanyNav />
            <div className='createNavContainer' >
                <h2>CREATE TENDER </h2>
                <form onSubmit={handleSubmit(createTender)} >
                    <div className='createTenderBox' >
                        <div className='labelContainer' >
                            <span>*</span><label>DESCRIPTION ABOUT THE TENDER </label>
                        </div>

                        <textarea style={{ borderColor: errors?.description_tender?.message ? 'red' : '#000' }} placeholder='Ex : Facility Management And Maintenance At The Building Of The Ministry Of Communications  ' {...register('description_tender')} ></textarea>
                    </div>
                    <div className='createTenderBox' >
                        <div className='labelContainer' >
                            <span>*</span><label>TENDER MOTIVE</label>
                        </div>

                        <textarea style={{ borderColor: errors?.tender_motive?.message ? 'red' : '#000' }} placeholder='Ex : Bridge tender aims to unite cities, boost commerce, enhance transportation, and foster regional growth through connectivity' {...register('tender_motive')} ></textarea>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2' style={{ borderBottomColor: errors?.address_one?.message ? 'red' : '#ccc' }}>
                            <div className='typeInput ' >
                                <span>*</span>
                                <label className='address' >Address Line 1</label>
                            </div>
                            <input className='inputTypeInput' type='text' {...register('address_one')} />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label className='address'>Address Line 2</label>
                            </div>
                            <input className='inputTypeInput' type='text' {...register('address_two')} />
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >

                                <label className='address'>Address Line 3</label>
                            </div>
                            <input className='inputTypeInput' type='text' {...register('address_three')} />
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput labelContainer' >
                                <span>*</span>
                                <label className='address'>City</label>
                            </div>
                            <input className='inputTypeInput' type='text'{...register('city')} />
                        </div>
                    </div>
                    <div className='companyContainer' >
                        <div className='companyBox' >
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput labelContainer' >
                                    <span>*</span>
                                    <label className='address'>Country</label>
                                </div>
                                <select className='inputTypeSelect' {...register('state')}>
                                    {
                                        states?.map((state, id) => (
                                            <option value={state?.country} key={id} >{state?.country}</option>
                                        ))
                                    }
                                </select>

                            </div>
                            <div className='companyTypeInputContainer2'>
                                <div className=' labelContainer'  >
                                    <span>*</span>
                                    <label className='address'>Postal Code</label>
                                </div>
                                <input className='inputTypeInput' type='number' {...register('postal_code')} />
                            </div>
                        </div>

                    </div>
                    <div className='companyContainer' >
                        <div className='companyBox' >


                            <div style={{
                                border: bidStartErr ? '1px solid red' : '1px solid #ccc'
                            }} className='createTenderBox durationBox ' >
                                <div className='labelContainer' >
                                    <span>*</span><label className='address'>START DURATION OF BIDDING PERIOD</label>
                                </div>


                                <DatePicker minDate={new Date()} onChange={setDuration_of_bidding_start} value={duration_of_bidding_start} />
                            </div>
                            <div style={{
                                border: bidEndErr ? '1px solid red' : '1px solid #ccc'
                            }} className='createTenderBox durationBox ' >
                                <div className='labelContainer'>
                                    < span >*</span><label className='address'>END DURATION OF BIDDING PERIOD</label>
                                </div>
                                <DatePicker minDate={new Date() && duration_of_bidding_start} onChange={setDuration_of_bidding_end} value={duration_of_bidding_end} />
                            </div>
                        </div>
                    </div >
                    <div className='companyContainer' style={{ marginTop: '2rem' }} >
                        <div className='companyBox' >

                            <div style={{
                                border: workStartErr ? '1px solid red' : '1px solid #ccc'
                            }} className='createTenderBox durationBox ' >
                                <div className='labelContainer' >
                                    <span>*</span><label className='address'>START DURATION OF WORK PERIOD</label>
                                </div>

                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={duration_of_work_start}
                                    onChange={(e) => setDuration_of_work_start(e.target.value)}

                                />
                            </div>

                            <div style={{
                                border: workEndErr ? '1px solid red' : '1px solid #ccc'
                            }} className='createTenderBox durationBox ' >
                                <div className='labelContainer'>
                                    < span >*</span><label className='address'>END DURATION OF WORK PERIOD</label>
                                </div>

                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={duration_of_work_end}
                                    onChange={(e) => setDuration_of_work_end(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <h3>TYPE OF TENDER </h3>
                            </div>
                            <select className='inputTypeSelect'
                                onChange={(event) => setCompanyType(event.target.value)}
                            >
                                <option value='Private' >Private</option>
                                <option value='Government' >Government</option>
                            </select>
                        </div>
                        <div style={{
                            border: hasFileBeenSelected && '1px solid red'
                        }} className='companyTypeInputContainer2'>

                            <div className='typeInput'>
                                < span >*</span>
                                <h3>APPENDICES</h3>
                            </div>
                            <UploadFile setFile={setFile} />
                            {appendices && <p className='fileName'>{appendices?.name}</p>}

                        </div>

                    </div >

                    <div className='createTenderBox' >
                        <div className='labelContainer' >
                            <span>*</span><label>Materials Required</label>
                        </div>

                        <textarea style={{ borderColor: errors?.material_required?.message ? 'red' : '#000' }} {...register('material_required')}></textarea>
                    </div>
                    <div className='createTenderBtn' >
                        <CustomBtn >
                            {isLoading ? <CircularProgress color="primary" thickness={10} size={18} /> : 'Publish the Tender'}
                        </CustomBtn>
                    </div>
                </form >
            </div >
        </div >

    )
}

export default CreateTender