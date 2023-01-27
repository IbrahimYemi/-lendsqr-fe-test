import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import UserDetails from '../../components/UserDetails';

const User = () => {

  return (
    <div className='container' >

        <Navbar />

        <div className='dashboard'>
            <Header />
            <UserDetails />
        </div>

    </div>
  )
}

export default User