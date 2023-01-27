import React from 'react';
import { GrFormSearch } from 'react-icons/gr';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaRegBell } from 'react-icons/fa';

const Header = () => {
    return (
        <div className='header' >
            <div className="search-card">
                <input type="search" placeholder="search input" />
                <span className='search-btn' ><GrFormSearch /></span>
            </div>
            <div className='header-profile' >
                <span><a href="#">Doc</a></span>
                <FaRegBell/>
                <span className='profile-image' >
                    <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80' alt="logo" />
                </span>
                <p>Adedeji <IoMdArrowDropdown/> </p>
            </div>
        </div>
    )
}

export default Header