import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Fargekart from './components/Fargekart'
import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './fonts.css';
import Font from "./components/Font";


function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/fargekart" element={<Fargekart />} />
                    <Route path="/font" element={<Font />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
