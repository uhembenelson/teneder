import React from 'react'
import './CustomBtn.css'

const CustomBtn = ({ children, onClick }) => {
    return (
        <button onClick={onClick} type='submit' className='customBtnContainer' >{children}</button>
    )
}

export default CustomBtn