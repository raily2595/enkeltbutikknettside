import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Halsband from './components/Halsband';
import Band from './components/Band';
import Sele from './components/Sele';
import Leke from './components/Leke';
import Annet from './components/Annet';
import Footer from './components/Footer';
import Fargekart from './components/Fargekart';
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './fonts.css';
import Font from "./components/Font";
import Meny from "./components/Meny";
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
                    <Route path="/annet" element={<Annet />} />
                    <Route path="/fargekart" element={<Fargekart />} />
                    <Route path="/font" element={<Font />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
