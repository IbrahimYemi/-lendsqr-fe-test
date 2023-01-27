import axios from 'axios';
import React from 'react';
import { useAppDispatch } from '../store/store';
import { setUser } from '../store/singleUser';
import activate from '../images/dashboard/Vector (1).png'
import blacklist from '../images/dashboard/Vector.png'
import eye from '../images/dashboard/Group.png'
import { useNavigate } from 'react-router-dom'


interface Props {
    userId: string;
}
const Dropdown: React.FC<Props> = ({ userId }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    const handleClick = async () => {
        try {
            await axios.get(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${userId}`)
                .then((res) => {
                    dispatch(setUser(res.data))
                }
                )
            navigate('/user/details')
        } catch (e) {
            if (e instanceof Error) console.error(e.message);
        }
    }

    return (
        <div className="item-container">
            <div className='item'
            onClick={handleClick} 
            >
                <img className="icon" src={eye} alt="icon" />
                <div className="text">View Details</div>
            </div>
            <div className='item'>
                <img className="icon" src={blacklist} alt="icon" />
                <div className="text">Blacklist User</div>
            </div>
            <div className='item'>
                <img className="icon" src={activate} alt="icon" />
                <div className="text">Activate User</div>
            </div>
        </div>
    );
};

export default Dropdown;
