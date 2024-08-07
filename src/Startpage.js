import React from 'react';
import './components/Startpage/startpage.css';
import Footer from './components/footer/footer';
import StartFooter from './components/Startpage/startFooter';

const StartPage = () => {
  return (
    <>
      <div className="startnav">
        <div className="leftNav">
          <p className='better_heading'>
            Better
          </p>
          <p> Mortgage</p>
        </div>
        <div className="rightNav">
          <i class="fa-solid fa-phone"></i>
          <h5 class="css">Need help? Call (415) 523 8837</h5>
        </div>
      </div>
      <div className="page">
        <hr width="70%" className="footer_text1" size="2" />
        <main className="main-content">
          <p className='hibetty'>Hi, I'm Betty!</p>
          <p  className='hibetty'>What can I help you with?</p>
          <div className="options">
            <button className='startBtn'>Buying a home</button>
            <button className='startBtn'>Refinance my mortgage</button>
            <button className='startBtn'>Get cash from my home</button>
          </div>
          <div className="stats">
            <div className="stat">
              <h1>$100B</h1>
              <p className='dolar_text_below'>Loans backed by leading investors</p>
            </div>
            <div className="stat">
              <h1>400K</h1>
              <p  className='dolar_text_below'>Customers who've chosen Better Mortgage</p>
            </div>
          </div>
          <div className="offers">

            <p style={{"margin-top":"1rem"}}>After a few questions, you'll unlock:</p>
            <p> <i class="fa-solid fa-percent"></i>Custom mortgage rates</p>
            <p> <i class="fa-solid fa-dollar-sign"></i>Exclusive offers</p>
            <p style={{"margin-bottom":"1rem"}}> <i class="fa-solid fa-mobile-screen-button"></i>A personalized dashboard</p>
          </div>

        </main>
      </div>
      <StartFooter />

    </>

  );
};

export default StartPage;