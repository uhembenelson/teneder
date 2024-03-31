import React, { useState, useEffect } from 'react'
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

const CreateTender = () => {

    const navigate = useNavigate()

    // Schema for creating request
    const schema = yup.object().shape({
        description_tender: yup.string().required('Description is required'),
        tender_motive: yup.string().required('Motive is required'),
        address_one: yup.string().required('Address one is required'),
        state: yup.string().required('State is required'),
        city: yup.string().required('City is required'),
        duration_of_bidding_start: yup.string().required('City is required'),
        duration_of_bidding_end: yup.string().required('City is required'),
        duration_of_work_start: yup.string().required('City is required'),
        duration_of_work_end: yup.string().required('City is required'),
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

    console.log(type_of_tender)

    const createTender = async () => {


        const data = getValues()

        formData.append('description_tender', data?.description_tender)
        formData.append('tender_motive', data?.tender_motive)
        formData.append('organization_id', user?.organization_id)
        formData.append('address_one', data?.address_one)
        formData.append('address_three', data?.address_three)
        formData.append('address_two', data?.address_two)
        formData.append('state', data?.state)
        formData.append('city', data?.city)
        formData.append('postal_code', data?.postal_code)
        formData.append('duration_of_bidding_start', data?.duration_of_bidding_start)
        formData.append('duration_of_bidding_end', data?.duration_of_bidding_end)
        formData.append('duration_of_work_start', data?.duration_of_work_start)
        formData.append('duration_of_work_end', data?.duration_of_work_end)
        formData.append('type_of_tender', type_of_tender)
        formData.append('appendices', appendices)
        formData.append('material_required', data?.material_required)

        if (!appendices) {
            setErr('Required')
            setHasFileBeenSelected(true)
            return
        }

        else {
            setErr(null)
            setHasFileBeenSelected(false)
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

    // Handle hiding of previous date

    const [minDate, setMinDate] = useState('');

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split('T')[0];

    // Handler function to update the minimum selectable date
    const handleDateChange = (event) => {
        setMinDate(event.target.value);
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
                            <input className='inputTypeInput' type='text'{...register('city')} />
                        </div>
                    </div>
                    <div className='companyContainer' >
                        <div className='companyBox' >
                            <div className='companyTypeInputContainer2'>
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Country</label>
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
                                <div className='typeInput' >
                                    <span>*</span>
                                    <label>Postal Code</label>
                                </div>
                                <input className='inputTypeInput' type='number' {...register('postal_code')} />
                            </div>
                        </div>

                    </div>
                    <div className='companyContainer' >
                        <div className='companyBox' >

                            <div style={{
                                border: errors?.duration_of_bidding_end ? '1px solid red' : '1px solid #ccc'
                            }} className='createTenderBox durationBox ' >
                                <div className='labelContainer'>
                                    < span >*</span><label>END DURATION OF BIDDING PERIOD</label>
                                </div>

                                <input type='date' {...register('duration_of_bidding_end')}

                                    id="date"
                                    name="date"
                                    min={minDate || today}  // Set min attribute dynamically
                                    onChange={handleDateChange}
                                />
                            </div>
                            <div style={{
                                border: errors?.duration_of_bidding_start ? '1px solid red' : '1px solid #ccc'
                            }} className='createTenderBox durationBox ' >
                                <div className='labelContainer' >
                                    <span>*</span><label>START DURATION OF BIDDING PERIOD</label>
                                </div>

                                <input {...register('duration_of_bidding_start')}
                                    type="date"
                                    id="date"
                                    name="date"
                                    min={minDate || today}  // Set min attribute dynamically
                                    onChange={handleDateChange}
                                />
                            </div>
                        </div>
                    </div >
                    <div className='companyContainer' style={{ marginTop: '2rem' }} >
                        <div className='companyBox' >

                            <div style={{
                                border: errors?.duration_of_work_end ? '1px solid red' : '1px solid #ccc'
                            }} className='createTenderBox durationBox ' >
                                <div className='labelContainer'>
                                    < span >*</span><label>END DURATION OF WORK PERIOD</label>
                                </div>

                                <input  {...register('duration_of_work_end')}
                                    type="date"
                                    id="date"
                                    name="date"
                                    min={minDate || today}  // Set min attribute dynamically
                                    onChange={handleDateChange}
                                />
                            </div>
                            <div style={{
                                border: errors?.duration_of_work_start ? '1px solid red' : '1px solid #ccc'
                            }} className='createTenderBox durationBox ' >
                                <div className='labelContainer' >
                                    <span>*</span><label>START DURATION OF WORK PERIOD</label>
                                </div>

                                <input  {...register('duration_of_work_start')}
                                    type="date"
                                    id="date"
                                    name="date"
                                    min={minDate || today}  // Set min attribute dynamically
                                    onChange={handleDateChange}
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
                                {...register('type_of_tender')}>
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