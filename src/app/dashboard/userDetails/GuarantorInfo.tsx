import React from 'react'

interface Props {
    info: {
        firstName: string;
        lastName: string;
        phoneNumber: string;
        gender: string;
        address: string;
    }
}

const GuarantorInfo: React.FC<Props> = ({ info }) => {
    return (
        <div className="section2">
            <p className="title">Guarantor</p>
            <div className="section-body">
                <div className="section-item">
                    <span className="up">FULL NAME</span>
                    <span className="down">{info.firstName + " " + info.lastName} </span>
                </div>
                <div className="section-item">
                    <span className="up">PHONE NUMBER</span>
                    <span className="down">{info.phoneNumber}</span>
                </div>
                <div className="section-item">
                    <span className="up">GENDER</span>
                    <span className="down"> {info.gender} </span>
                </div>
                <div className="section-item">
                    <span className="up">ADDRESS</span>
                    <span className="down"> {info.address} </span>
                </div>
            </div>
        </div>
    )
}

export default GuarantorInfo