import React from 'react';
import Navbar from './Components/Common/Navbar/Navbar'
import Footer from './Components/Common/Footer/Footer';
import Routes from './Components/Routes';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes />
            <Footer />
        </div>
    );
}

export default App;
