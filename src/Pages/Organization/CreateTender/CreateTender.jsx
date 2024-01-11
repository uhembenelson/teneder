import React from 'react'
import './CreateTender.css'
import CompanyNav from '../../../components/OrganizationNav/OrganizationNav'
import UploadFile from '../../../components/UploadFile/UploadFile'
import CustomBtn from '../../../components/CustomBtn/CustomBtn'

const CreateTender = () => {
    return (
        <div>
            <CompanyNav />
            <div className='createNavContainer' >
                <h2>CREATE TENDER </h2>
                <form>
                    <div className='createTenderBox' >
                        <div className='labelContainer' >
                            <span>*</span><label>DESCRIPTION ABOUT THE TENDER </label>
                        </div>

                        <textarea placeholder='Ex : Facility Management And Maintenance At The Building Of The Ministry Of Communications  ' ></textarea>
                    </div>
                    <div className='createTenderBox' >
                        <div className='labelContainer' >
                            <span>*</span><label>TENDER MOTIVE</label>
                        </div>

                        <textarea placeholder='Ex : Bridge tender aims to unite cities, boost commerce, enhance transportation, and foster regional growth through connectivity' ></textarea>
                    </div>
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
                    <div className='companyContainer' >
                        <div className='companyBox' >
                            <div className='createTenderBox durationBox ' >
                                <div className='labelContainer' >
                                    <span>*</span><label>DURATION OF BIDDING PERIOD</label>
                                </div>

                                <input type='date' />
                            </div>
                            <div className='createTenderBox durationBox ' >
                                <div className='labelContainer' >
                                    <span>*</span><label>DURATION OF WORK PERIOD</label>
                                </div>

                                <input type='date' />
                            </div>
                        </div>



                    </div>
                    <div className='companyBox' >
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <h3>TYPE OF TENDER </h3>
                            </div>
                            <select className='inputTypeSelect'>
                                <option>-Please select-</option>
                            </select>
                        </div>
                        <div className='companyTypeInputContainer2'>
                            <div className='typeInput' >
                                <span>*</span>
                                <h3>APPENDICES</h3>
                            </div>
                            <UploadFile />
                        </div>
                    </div>
                    <div className='createTenderBox' >
                        <div className='labelContainer' >
                            <span>*</span><label>Materials Required</label>
                        </div>

                        <textarea  ></textarea>
                    </div>
                    <div className='createTenderBtn' >
                        <CustomBtn title='Publish the Tender' />
                    </div>
                </form>
            </div>
        </div>

    )
}

export default CreateTender