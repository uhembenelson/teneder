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
                <option className='optionsSearch' value='keyword' >Select Keyword</option>
                {/*<option className='optionsSearch'>T-Number</option>*/}
                <option className='optionsSearch' value='orgName'>Organization</option>
                <option className='optionsSearch' value='type'>Type</option>
                <option className='optionsSearch' value='status'>Status</option>

            </select> :
                <select placeholder='Keyword Search'
                    onChange={e => setSearchType(e.target.value)}
                    value={seachType}
                >
                    <option className='optionsSearch' value='keyword' >Select Keyword</option>
                    {/*<option className='optionsSearch'>T-Number</option>*/}
                    <option className='optionsSearch' value='date'>Due Date</option>
                    <option className='optionsSearch' value='type'>Type</option>

                </select>}
            <div className='searchInputBox' >
                <input value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder='Type keyword eg-VALUE, DUE DATE etc.' />
                <button ><img src={search} alt='' /></button>
            </div>
        </form>
    )
}

export default Search