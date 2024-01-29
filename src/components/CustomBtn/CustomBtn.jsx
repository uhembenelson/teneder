import React from 'react'
import './CustomBtn.css'

const CustomBtn = ({ title }) => {
    return (
        <button type='submit' className='customBtnContainer' >{title}</button>
    )
}

export default CustomBtn