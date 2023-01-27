import React from 'react'

interface Props {
    info : {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        avatar: string;
        gender: string;
        bvn: string;
        address: string;
        currency: string
    }
    email: string;
}

const PersonalInfo: React.FC<Props> = ({info, email}) => {
    return (
        <div className="section">
            <p className="title">Personal Information</p>
            <div className="section-body">
                <div className="section-item">
                    <span className="up">FIRST NAME</span>
                    <span className="down">  {info.firstName}  </span>
                </div>
                <div className="section-item">
                    <span className="up">LAST NAME</span>
                    <span className="down">{info.lastName}</span>
                </div>
                <div className="section-item">
                    <span className="up">PHONE NUMBER</span>
                    <span className="down"> {info.phoneNumber} </span>
                </div>
                <div className="section-item">
                    <span className="up">EMAIL ADDRESS</span>
                    <span className="down"> {email} </span>
                </div>
                <div className="section-item">
                    <span className="up">BVN</span>
                    <span className="down">{info.bvn}</span>
                </div>
                <div className="section-item">
                    <span className="up">GENDER</span>
                    <span className="down">{info.gender}</span>
                </div>
                <div className="section-item">
                    <span className="up">CURRENCY</span>
                    <span className="down">{info.currency}</span>
                </div>
                <div className="section-item">
                    <span className="up">TYPE OF RESIDENCE</span>
                    <span className="down">{info.address}</span>
                </div>
            </div>
        </div>
    )
}

export default PersonalInfo