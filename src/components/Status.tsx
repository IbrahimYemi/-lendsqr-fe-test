import * as React from 'react';
import dropdown from '../images/dashboard/dropdown.png'
import Dropdown from './Dropdown';

interface Props {
    createdAt: string;
    userId
}

const UserStatus: React.FC<Props> = ({ createdAt, userId }) => {
    const [showPopup, setShowPopup] = React.useState(false)

    const handleClick = () => {
        setShowPopup(!showPopup)
    }
    const year = new Date(createdAt).getFullYear();

    let status: string;
    if (year < 2000) {
        status = 'inactive';
    } else if (year <= 2010) {
        status = 'pending';
    } else if (year <= 2050) {
        status = 'active';
    } else {
        status = 'blacklisted';
    }

    return (
        <span className={status} >
             {status} <img onClick={handleClick} src={dropdown} alt="dropdown" />
            {showPopup && <Dropdown userId={userId} />}
        </span>
    );
}

export default UserStatus;
