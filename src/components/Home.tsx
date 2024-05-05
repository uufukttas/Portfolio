import React from 'react';
import Typewriter from './Typewriter';

const Home: React.FC = () => {
    return (
        <div className={`home-container w-full text-6xl flex items-center flex-col`}>
            <Typewriter
                words={['Engineer', 'Developer', 'Programmer', 'Coder', 'Photographer', 'Drummist']}
                typingDelay={100}
                erasingDelay={100}
                newWordDelay={500}
            />
            <h1>UFUK TAS</h1>
        </div>
    );
};

export default Home;
