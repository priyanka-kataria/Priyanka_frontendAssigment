
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nav/Navbar';
// import Home from './components/main/Home';
// import ThirdSec from './components/Thirdsec/ThirdSec';
// import Products from './components/quesAndProducts/products';
// import OurProduct from './components/ourproduct/OurProduct';
// import Footer from './components/footer/footer';
import About from './About';
import Calculator from './components/Calcy/Calculator';
import HomeMain from './HomeMain';
import StartPage from './Startpage';


function App () {
  return (
    <>

      <BrowserRouter>
      {/* <div className="main-div">

        <Navbar />
        <Home />
        <ThirdSec />
        <Products />
        <OurProduct />
        <Footer /> */}
          {/* <HomeMain/> */}
        
        <Routes>
          <Route path='/' element={ <HomeMain /> } />
          <Route path='/about' element={ <About /> } />
          <Route path='/startpage' element={ <StartPage /> } />
          <Route path='/calculator' element={ < Calculator /> } />
        </Routes>
       
      </BrowserRouter>

    </>
  );
}

export default App;
