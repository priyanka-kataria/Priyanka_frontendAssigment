import React from 'react'
import Navbar from './components/Nav/Navbar';
import Home from './components/main/Home';
import ThirdSec from './components/Thirdsec/ThirdSec';
import Products from './components/quesAndProducts/products';
import OurProduct from './components/ourproduct/OurProduct';
import Footer from './components/footer/footer';

export default function HomeMain() {
  return (
    <div className="main-div">

    <Navbar />
    <Home />
    <ThirdSec />
    <Products />
    <OurProduct />
    <Footer />

    </div>
  )
}
