import React from 'react'
import './Search.css'
import search from '../../assets/search.png'

const Search = () => {
    return (
        <div className='searchContainer' >
            <select placeholder='Keyword Search' >
                <option>Select Keyword</option>
                <option>T-Number</option>
                <option>Due Date</option>
                <option>Type</option>
            </select>
            <div className='searchInputBox' >
                <input placeholder='Type keyword eg-VALUE, DUE DATE etc.' />
                <img src={search} alt='' />
            </div>
        </div>
    )
}

export default Search