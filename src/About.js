import React from 'react'
import Navbar from './components/Nav/Navbar'
import Footer from './components/footer/footer'
import AbouMain from './components/aboutcomponent/AbouMain'
import StartFooter from './components/Startpage/startFooter'

export default function About () {
  return (
    <div className="main-div">

      <Navbar />
      <AbouMain/>
      <StartFooter />

    </div>
  )
}
