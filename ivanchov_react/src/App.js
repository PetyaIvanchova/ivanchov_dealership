import './App.css';
import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BestComponent from './components/BestComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import IntroComponent from './components/IntroComponent';
import OffersComponent from './components/OffersComponent';
import HomeComponent from './pages/HomeComponent';
import ContactComponent from './pages/ContactComponent';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route element={<HomeComponent />} path='/'></Route>
        <Route element={<ContactComponent />} path='contact'></Route>
      </Routes>
    </Router>
    
    {/*<HeaderComponent />*/}
    {/*<IntroComponent />*/}
    {/*<OffersComponent />*/}
    {/*<BestComponent />*/}
    {/*<FooterComponent />*/}
    </>
  );
}

export default App;
