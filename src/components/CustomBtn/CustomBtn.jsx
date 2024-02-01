import React from 'react'
import './CustomBtn.css'

const CustomBtn = ({ children }) => {
    return (
        <button type='submit' className='customBtnContainer' >{children}</button>
    )
}

export default CustomBtn