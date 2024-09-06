import React from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Welcome to the Restaurant</h1>
      <Menu />
    </div>
  );
};

export default Home;
