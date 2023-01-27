import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import back from '../images/dashboard/back.png'
import star from '../images/dashboard/Vector (3).png'
import stared from '../images/dashboard/Vector (2).png'
import PersonalInfo from '../app/dashboard/userDetails/PersonalInfo'
import EducationInfo from '../app/dashboard/userDetails/EducationInfo'
import SocialInfo from '../app/dashboard/userDetails/SocialInfo'
import GuarantorInfo from '../app/dashboard/userDetails/GuarantorInfo'
import { useAppSelector } from '../store/store'


const UserDetails:React.FC = () => {
    const navigate = useNavigate()
    const { user } = useAppSelector(state => state.user)


    const handleClickUser = () => {
        navigate('/users')
    }
    return (
        <div className='user-details' >
            <span onClick={handleClickUser} className='back-tick' >
                <img src={back} alt="back to home" />
                Back to Users
            </span>

            <div className="user-tab">
                <p>User Details</p>
                <div className="btn-group">
                    <button className='blacklist-btn' >BLACKLIST USER</button>
                    <button className='activate-btn' >ACTIVATE USER</button>
                </div>
            </div>

            <div className="head-details">

                <div className='upper-sect' >
                    <div className="avatar-div">
                        <img src={user.profile.avatar} alt="avatar" />
                        <div className="acc-details">
                            <span className="up"> {user.profile.firstName + " " + user.profile.lastName} </span>
                            <span className="down"> {user.accountNumber} </span>
                        </div>
                    </div>
                    <hr />
                    <div className="star-div">
                        <span className="up">User's tier</span>
                        <span className="down">
                            <img src={star} alt="tier star" />
                            <img src={stared} alt="tier star" />
                            <img src={stared} alt="tier star" />
                        </span>
                    </div>
                    <hr />
                    <div className="money-div">
                        <span className="up">₦{user.accountBalance} </span>
                        <span className="down"> {user.profile.bvn + " / " + user.profile.address} </span>
                    </div>
                </div>

                <div className="list-link">
                    <span className="active">General Details</span>
                    <span>Documents</span>
                    <span>Bank Details</span>
                    <span>Loans</span>
                    <span>Savings</span>
                    <span>App and System</span>
                </div>

            </div>

            <div className="details-body">

                <PersonalInfo info={user.profile} email={user.email} />
                <hr />

                <EducationInfo info={user.education} />
                <hr />

                <SocialInfo info={user.socials} />
                <hr />

                <GuarantorInfo info={user.guarantor} />

            </div>

        </div>
    )
}

export default UserDetails