import React from 'react';
import Header from '../../components/Header';
import HomeBody from '../../components/HomeBody';
import Navbar from '../../components/Navbar';

const Home = () => {

  return (
    <div className='container' >

        <Navbar />

        <div className='dashboard'>
            <Header />
            <HomeBody />
        </div>

    </div>
  )
}

export default Home