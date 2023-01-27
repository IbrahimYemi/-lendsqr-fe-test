import React from 'react'
import Loginform from '../../components/Loginform'
import logo from '../../images/navbar/Group.png'
import loginImage from '../../images/navbar/pablo-sign-in 1.png'

const Login: React.FC = () => {
  return (
    <div className='login-container' >
      <div className='img-div'>
        <span className='root-logo' >
          <img src={logo} alt="logo" />
        </span>
        <img className='login-image' src={loginImage} alt="design-png" />
      </div>
      <div className='login-form' >
        <Loginform />
      </div>
    </div>
  )
}

export default Login