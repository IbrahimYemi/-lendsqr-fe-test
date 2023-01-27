import React from 'react'

interface Props {
    info: {
        level: string;
        employmentStatus: string;
        sector: string;
        duration: string;
        officeEmail: string;
        monthlyIncome: string[];
        loanRepayment: string;
    }
}

const EducationInfo: React.FC<Props> = ({ info }) => {
    return (
        <div className="section2">
            <p className="title">Education and Employment</p>
            <div className="section-body">
                <div className="section-item">
                    <span className="up">LEVEL OF EDUCATION</span>
                    <span className="down"> {info.level} </span>
                </div>
                <div className="section-item">
                    <span className="up">EMPLOYMENT STATUS</span>
                    <span className="down">{info.employmentStatus}</span>
                </div>
                <div className="section-item">
                    <span className="up">SECTOR OF EMPLOYMENT</span>
                    <span className="down">{info.employmentStatus}</span>
                </div>
                <div className="section-item">
                    <span className="up">DURATION OF EMPLOYMENT</span>
                    <span className="down">{info.duration}</span>
                </div>
                <div className="section-item">
                    <span className="up">OFFICE EMAIL</span>
                    <span className="down">{info.officeEmail}</span>
                </div>
                <div className="section-item">
                    <span className="up">MONTHLY INCOME</span>
                    <span className="down">{'₦'+info.monthlyIncome[0]+ " - ₦" +info.monthlyIncome[1]}</span>
                </div>
                <div className="section-item">
                    <span className="up">LOAN REPAYMENT</span>
                    <span className="down">{info.loanRepayment}</span>
                </div>
            </div>
        </div>
    )
}

export default EducationInfo