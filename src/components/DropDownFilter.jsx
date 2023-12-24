import React from 'react'
import { IoMdArrowDropdown } from "react-icons/io"

const DropDownFilter = ({ dropDownFilterOptions, setSelectedOption }) => {
    const handleChange = (e) => setSelectedOption(e.target.value)
    return (
        <div className='relative flex flex-row'>
            <select className='input dropDownArrow ' onChange={(e) => handleChange(e)} name="" id="dropDownList">
                <option value="all">All</option>
                {
                    dropDownFilterOptions.filter((ele, i, ar) => ar.indexOf(ele) === i).map((options, key) => {
                        return <option key={key} value={options}>{options}</option>
                    })
                }
            </select>
            <label htmlFor="dropDownList">
                <IoMdArrowDropdown className='absolute right-0 top-3 text-blue text-3xl' />
            </label>
        </div>
    )
}

export default DropDownFilter
