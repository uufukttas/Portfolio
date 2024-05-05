import React from 'react';
import Image from 'next/image';

const Summary: React.FC = () => {
    return (
        <div className={`summary-container flex justify-evenly items-center px-8 py-20`}>
            <div className={`summary-photo w-1/4`}>
                <Image
                    alt="image of me"
                    className={`rounded-full`}
                    height={400}
                    src="/profile_pic.jpeg"
                    width={400}
                />
            </div>
            <div className={`summary-text w-2/4`}>
                <p>
                    I am a software engineer with a passion for creating and developing web applications. I have experience in both front-end and back-end development, and I am always looking for new challenges to tackle. I am a quick learner and a team player, and I am always eager to learn new technologies and improve my skills.
                </p>
            </div>
        </div>
    );
};

export default Summary;
