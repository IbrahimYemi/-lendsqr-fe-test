import React from 'react'

interface Props {
    info: {
        facebook: string;
        instagram: string;
        twitter: string;
    }
}

const SocialInfo: React.FC<Props> = ({ info }) => {
    return (
        <div className="section">
            <p className="title">Socials</p>
            <div className="section-body">
                <div className="section-item">
                    <span className="up">TWITTER</span>
                    <span className="down">{info.twitter}</span>
                </div>
                <div className="section-item">
                    <span className="up">FACEBOOK</span>
                    <span className="down">{info.facebook}</span>
                </div>
                <div className="section-item">
                    <span className="up">INSTAGRAM</span>
                    <span className="down">{info.instagram}</span>
                </div>
            </div>
        </div>
    )
}

export default SocialInfo