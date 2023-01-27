import React from 'react'
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
    const navigate = useNavigate();

    return (
        <div className="center-item">
            <h1>Welcome!</h1><br />
            <small>Enter details to login</small>
            <form>
                <div className="input-card">
                    <input type="text" placeholder="Email" />
                </div>
                <div className="input-card">
                    <input type="password" placeholder="Password" />
                    <button className="show-password">SHOW</button>
                </div>
                <p><a href="#">FORGOT PASSWORD?</a></p>
                <button onClick={() => navigate('/users')} className='btn-form' type="button">LOG IN</button>
            </form>
        </div>
    )
}

export default Loginform