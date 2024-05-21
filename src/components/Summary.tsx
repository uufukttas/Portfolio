import React from 'react';
import Image from 'next/image';

const Summary: React.FC = () => {
    return (
        <div className="summary-container flex justify-evenly items-center px-8 py-20">
            <div className="summary-photo w-1/4 relative">
                <div className="rounded-full overflow-hidden w-full h-0" style={{ paddingBottom: '100%' }}>
                    <Image
                        alt="image of me"
                        src="/profile_pic.jpeg"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
            <div className="summary-text w-2/4">
                <p>
                    I am a software engineer with extensive experience in developing dynamic interfaces, creating new components and libraries, and designing robust structural frameworks and architecture. My expertise includes troubleshooting complex issues, implementing SEO strategies, and enhancing user satisfaction while driving innovation and improving processes.
                </p>
            </div>
        </div>
    );
};

export default Summary;
