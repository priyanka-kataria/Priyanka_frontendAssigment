import React from 'react'
import "./ourproduct.css"
import home from "./first-home (3).webp"
import oneday from "./one-day-mortgage.webp"
// import rk from "./one-day-mortgage.webp"
import hello from "./better-heloc.webp"
import insure from "./insurance.webp"
import sk from "./image.png"

export default function OurProduct () {
  return (
    <>
      <div className='productFrist'>
        <div className='maincontainer'>
          <div className='productContainer'>
            <div className='ourProduct'>
              <p className='ourProduct_heading'>
                Buying your first home with Better
              </p>
              <div className='fa-arrow-right'><img src={ sk } alt="" className='fa-arrow' /></div>
              <img className="ourProduct_img" src={ home } />
            </div>
            <div className='productcontainer1'>
              <div className='ourProduct2'>
                <p className='ourProduct_heading2'>
                  One Day Mortgage
                </p>
                <p className='ourProduct_Text'>
                  Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.
                </p>
                <div className='fa-arrow-right'><img src={ sk } alt="" className='fa-arrow' /></div>
              </div>
              <img className="ourProduct_img2" src={ oneday } />
            </div>
          </div>
        </div>
        {/* hgjf */ }
        <div className='maincontainer'>
          <div className='productContainer'>

            <div className='productcontainer2'>
              <img className="ourProduct_img2" src={ hello } />
              <div className='ourProduct2'>
                <p className='ourProduct_heading2'>
                  Better HELOC
                </p>
                <p className='ourProduct_Text'>Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit </p>
                <div className='fa-arrow-right'><img src={ sk } alt="" className='fa-arrow' /></div>
              </div>

            </div>
            <div className='ourProduct'>
              <p className='ourProduct_heading'>
                Insurance
              </p>
              <div className='fa-arrow-right'><img src={ sk } alt="" className='fa-arrow' /></div>
              <img className="ourProduct_img" src={ insure } />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
