import React from 'react';
import '../../App.css';
import Cards from '../paner-form/Cards';
//import Footer from '../paner-form/Footer';
//import AddCards from '../paner-form/addCards';
import Navbar from '../paner-form/Navbar';

function Home() {
  return (
    <>
      <Navbar/>
      <Cards />
      {/* <AddCards/> */}
      {/* <Footer/> */}
    </>
  );
}

export default Home;
