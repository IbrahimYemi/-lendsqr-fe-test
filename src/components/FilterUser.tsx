import React from 'react'
import { user } from '../store/singleUser'


interface Props {
    users: user[]
}

const FilterUser: React.FC<Props> = ({ users }) => {
    return (
        <div className='filter-card' >
            <div className='filter-input'>
                <span>ORGANIZATION  </span>
                <select name="organization">
                    {
                        users.map((user, i) => (<option value={user.orgName} key={i} > {user.orgName} </option>))
                    }
                </select>
            </div>

            <div className='filter-input'>
                <span>USERNAME </span>
                <input name="username" type="text" placeholder='Username' />
            </div>

            <div className='filter-input'>
                <span>EMAIL </span>
                <input name="email" type="email" placeholder='Email' />
            </div>

            <div className='filter-input'>
                <span>PHONE NUMBER </span>
                <input name="phoneNumber" type="text" placeholder='Phone Number' />
            </div>

            <div className='filter-input'>
                <span>DATE JOINED </span>
                <input
                    type="date"
                    placeholder=""
                />
            </div>

            <div className='filter-input'>
                <span>STATUS </span>
                <select className='paragraph' name="switchOrg">
                    <option value="Lendsqr">Status</option>
                    <option value="Lendsqr">Lendsqr</option>
                    <option value="Lendsqr">Lendsqr</option>
                    <option value="Lendsqr">Lendsqr</option>
                    <option value="Lendsqr">Lendsqr</option>
                </select>
            </div>

            <div className="btn-container">
                <button type="reset" className='reset'>RESET</button>
                <button type="submit" className='submit'>FILTER</button>
            </div>

        </div>
    )
}

export default FilterUser