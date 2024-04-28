import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

const Main: React.FC = () => {
    return (
        <div className={`main-container w-full h-full mx-20 flex flex-col justify-evenly items-center`}>
            <Navbar />
            <Home />
            <Footer />
        </div>
    );
};

export default Main;
