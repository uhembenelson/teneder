import React from 'react'
import './Search.css'
import search from '../../assets/search.png'

const Search = ({ setSearchTerm, approve, setSearchType, seachType, searchTenders, searchTerm }) => {

    const submitForm = (e) => {
        e.preventDefault()
        searchTenders()

    }

    return (
        <form onSubmit={submitForm} className='searchContainer' >
            {approve ? <select placeholder='Keyword Search'
                onChange={e => setSearchType(e.target.value)}
                value={seachType}
            >
                <option value='keyword' >Select Keyword</option>
                <option>T-Number</option>
                <option value='orgName'>Organization</option>
                <option value='type'>Type</option>
                <option value='status'>Status</option>

            </select> :
                <select placeholder='Keyword Search'
                    onChange={e => setSearchType(e.target.value)}
                    value={seachType}
                >
                    <option value='keyword' >Select Keyword</option>
                    <option>T-Number</option>
                    <option value='date'>Due Date</option>
                    <option value='type'>Type</option>

                </select>}
            <div className='searchInputBox' >
                <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder='Type keyword eg-VALUE, DUE DATE etc.' />
                <button ><img src={search} alt='' /></button>
            </div>
        </form>
    )
}

export default Search