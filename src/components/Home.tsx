import React from 'react';
import Typewriter from './Typewriter';

const Home: React.FC = () => {
    return (
        <div className={`home-container text-6xl`}>
            <Typewriter
                words={['Engineer', 'Developer', 'Programmer', 'Coder', 'Photographer','Drummist']}
                typingDelay={200}
                erasingDelay={100}
                newWordDelay={1000}
            />
        </div>
    );
};

export default Home;
