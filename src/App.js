import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Global/Header';
import MainContent from './components/Global/MainContent';
import Halsband from './components/Halsband/Halsband';
import Band from './components/Band/Band';
import Sele from './components/Sele/Sele';
import Leke from './components/Leke/Leke';
import Footer from './components/Global/Footer';
import Fargekart from './components/tilleggsmoduler/Fargekart';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './fonts.css';
import Font from "./components/tilleggsmoduler/Font";
import Meny from "./components/Global/Meny";
import Leieband from "./components/Band/Leieband";
import Kasse from "./components/Bestilling/Kasse";
import Bekreftelse from "./components/Bestilling/Bekreftelse";
import Klipsband from "./components/Halsband/Klipsband";
import Handlekurv from "./components/Bestilling/Handlekurv";
{/* import Banner from "./components/Banner";*/ }


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Meny />
                {/* <Banner /> */}
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/halsband" element={<Halsband />} />
                    <Route path="/band" element={<Band />} />
                    <Route path="/sele" element={<Sele />} />
                    <Route path="/leke" element={<Leke />} />
                    <Route path="/fargekart" element={<Fargekart />} />
                    <Route path="/font" element={<Font />} />
                    <Route path="/band/leieband" element={<Leieband />} />
                    <Route path="/kasse" element={<Kasse />} />
                    <Route path="/bekreftelse" element={< Bekreftelse />} />
                    <Route path="/halsband/klipsband" element={<Klipsband />} />
                    <Route path="/handlekurv" element={<Handlekurv />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
