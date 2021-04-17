import React from 'react';
import '../../App.css';
import Cards from '../paner-form/Cards';
import Footer from '../paner-form/Footer';
import addCards from '../paner-form/addCards';

function Home() {
  return (
    <>
      <Cards />
      <addCards/>
    </>
  );
}

export default Home;
