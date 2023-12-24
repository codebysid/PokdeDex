import React from 'react'
import { CiSearch } from "react-icons/ci"

const SearchBar = ({ searchQuery, setSearchQuery }) => {
    return (
        <div className='flex flex-row items-center p-2 rounded-2xl bg-lightBlack outline-none gap-2'>
            <label htmlFor='searchBar'><CiSearch className='text-2xl text-blue' />

            </label>
            <input id='searchBar' type="text" placeholder='search by pokemon name' className='input'
                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        </div>
    )
}

export default SearchBar
