import React, { useEffect, useRef, useState } from 'react';
import './Calculator.css';
import Navbar from '../Nav/Navbar';
import Footer from '../footer/footer';
import StartFooter from '../Startpage/startFooter';

function Calculator () {
  const [ progress, setProgress ] = useState( 4 );
  const [ text, setText ] = useState( 0 );
  const [ DownPayment, setDownpayment ] = useState( [] )
  const [ mystyle, setMystyle ] = useState( { "display": "none" } )
  const [ mystyle2, setMystyle2 ] = useState( { "display": "none" } )
  const [ mystyle3, setMystyle3 ] = useState( { "display": "none" } )
  const [ MonthlyPayment, setMonthlyPayment ] = useState( 0 )
  const [ DownInput, setDownInput ] = useState( 1 )
  const [ downRate, setDownRate ] = useState( 5 )
  const [ interestRate, setInterestRate ] = useState( 5 )


  const handleHomechange = ( event ) => {
    // console.log( event.target.value )
    setText( event.target.value )
  }


  const OnDownpayment = ( event ) => {
    setMystyle3( { "visibility": "visible" } )
    setDownInput( event.target.value )
    // setDownRate((DownInput*100)/text)
    // console.log(DownInput*100/text)
    console.log("downrate",downRate)
    console.log("text",text)
    console.log("downimput", DownInput)
  }
  const onchangeDownrate = ( event ) => {
    // setMystyle3( { "visibility": "visible" } )
    setDownRate( event.target.value )
    // setDownInput(text*downRate/100)
  }
  const OnChangeInterset = ( event ) => {
    setMystyle2( { "visibility": "visible" } )
    setInterestRate(event.target.value)

  }
  
  const OnChangeZipcode = () => {
    setMystyle( { "visibility": "visible" } )
  }
  useEffect( () => {
    setMonthlyPayment( text * ( interestRate / 1200 ) * Math.pow( ( 1 + interestRate / 1200 ), 360 ) / ( Math.pow( ( 1 + interestRate / 1200 ), 360 ) - 1 ) )
    // setDownRate((DownInput*100)/text)
    setDownInput(text*downRate/100)
  }, [ handleHomechange ],[DownPayment]);
  return (
    <>
    <Navbar/>
    <div className='caclyfd'>
      <div className="calculatorContainer">
        <p className='calHeading'>Mortgage Calculator</p>
        <p className='calcPara'>Use our mortgage calculator built directly into it! Get accurate estimates for your monthly mortgage <br />payments if you will be required to have private mortgage insurance (PMI). Also learn why</p>
        <div className='HomePayment'>
          <div className="homePrice" >
            <p className='calcPara1'>Home Price</p>
            <div className='HomepriceInput'>
              <div className='text_alin'>$</div>
              <input type="text" placeholder="" id="HomeInput1" className='HomeInput1' onChange={ handleHomechange } value={ text } />
            </div>
          </div>
          <div className="Monthly_payment">
            <p className='calcPara1'>Monthly Payment</p>
            <p className='HomeInput1'>$ { MonthlyPayment.toFixed( 0 ) }  /mon</p>
          </div>
          <button className='btn_calcy'>
            Read Vishal's Story
          </button>
        </div>
        <input type="range" name="" id="progressBar"></input>

        <div className="search_box">
          <div className='ZipCode'>
            <div className='text_alin_center' style={ mystyle }>Zip code</div>
            <input type="text" placeholder="Zip code" className='HomeInput' onChange={ OnChangeZipcode } />
          </div>

          <div className='ZipCode'>
            <div className='text_alin_center' style={ mystyle3 }>Down payment</div>
            <div style={{"display":'flex'}}>
              $<input type="text" placeholder="Down payment" id='Down_payment' value={ DownInput } className='HomeInput' onChange={ OnDownpayment } /> 
              <input type="text" placeholder="Down" id='Down_payment' value={ downRate }  className='HomeInput3' onChange={onchangeDownrate } />% 
            </div>
          </div>

          <div className='ZipCode'>
            <div className='text_alin_center' style={ mystyle2 }>Interest rate</div>
            <div>
              <input type="text" placeholder="Interest rate" className='HomeInput' value={ interestRate } onChange={ OnChangeInterset } />%
            </div>
          </div>
          <div className='ZipCode'>
            <div className='text_alin_center'>Length of loan</div>
            <div>
              <select name="" className='optnforloantype' id="option">
                <option>30 year</option>
                <option>20 year</option>
                <option>15 year</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
    <StartFooter/>
    </>
  );
}

export default Calculator;
