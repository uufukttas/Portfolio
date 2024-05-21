import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';

const Main: React.FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className={`main-container w-full h-full flex flex-col justify-between items-center p-12 overflow-scroll`}>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default Main;
