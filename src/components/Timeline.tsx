import React from 'react';
import '../styles/timeline.css';

const Timeline = () => {

    const events = [
        {
            date: "2019.09",
            details: "Bachelor of Science in Computer Engineering, Balikesir University, Balikesir, Turkey",
            event: "Graduated from University",
            position: 'left'
        },
        {
            date: "2020.01",
            event: "Started first job as Javascript Developer",
            details: `Insider Company, Istanbul, Turkey.
                Responsibilities: Developed and maintained frontend components for web applications using HTML, CSS, and JavaScript.`,
            position: 'right'
        },
        {
            date: "2020.03",
            details: "Technical Lead, Insider Company, Istanbul, Turkey",
            event:   `Responsibilities: Developed and maintained frontend components for web applications using HTML, CSS, and JavaScript.`,
            position: 'left'
        },
        {
            date: "2021.06",
            event: "Sofware Engineer, Insider Company, Istanbul, Turkey",
            details: "Responsibilities: Developed and maintained frontend components for web applications using HTML, CSS, and JavaScript.",
            position: 'right'
        },
        {
            date: "2022.06",
            event: "Started Jotform Company as Frontend Developer, Istanbul, Turkey",
            details: "Responsibilities: Developed and maintained frontend components for web applications using HTML, CSS, and JavaScript.",
            position: 'left'
        },
        {
            date: "2024.01",
            event: "Started Sharz.net as Frontend Developer",
            details: "Responsibilities: Developed and maintained frontend components for web applications using HTML, CSS, and JavaScript.",
            position: 'right'
        }
    ];

    return (
        <div className="timeline-container relative flex mb-20">
            <div className="line bg-gray-300 w-[10px] h-full rounded-full absolute left-1/2"></div>
            <div className="timeline-items flex w-full">
                <div className="timeline-left flex flex-col w-1/2">
                    {events.map((event, index) => (
                        event.position === 'left' &&
                        <div key={index} className={`timeline-item pr-5 self-end ${index !== 0 ? 'pt-[80px]' : ''}`}>
                            <div className="timeline-date flex justify-end">{event.date}</div>
                            <div className='milestone'></div>
                            <div className="timeline-content">
                                <h3>{event.event}</h3>
                                <p>{event.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="timeline-right flex flex-col w-1/2">
                    {events.map((event, index) => (
                        event.position === 'right' &&
                        <div key={index} className={`timeline-item pl-5 self-end ${index !== 0 ? 'pt-[80px]' : ''}`}>
                            <div className="timeline-date flex justify-start">{event.date}</div>
                            <div className="timeline-content">
                                <h3>{event.event}</h3>
                                <p>{event.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Timeline