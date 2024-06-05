import React from 'react';
import '../styles/timeline.css';

const Timeline = () => {
    const events = [
        {
            date: "2019.09",
            details: "Conferred with a Bachelor of Science in Computer Engineering from the Balikesir University, Balikesir, Turkey",
            event: "Graduated from University",
            position: 'left'
        },
        {
            date: "2020.01",
            details: `Embarked on my professional journey as a JavaScript Developer at Insider Company, Istanbul, Turkey.
                Responsibilities included developing and maintaining frontend components for web applications utilizing HTML, CSS, and JavaScript.
                Additionally, using JavaScript, jQuery, HTML, and CSS, I produced growth-focused campaigns for partners and provided software support to them.`,
            event: "Started first job as Javascript Developer",
            position: 'right'
        },
        {
            date: "2020.03",
            details: `In addition to my role as a JavaScript developer, I increased the team’s technical know-how.
                I provided technical support to my teammates when needed, often working in pairs on challenging tasks.
                Furthermore, I guided my teammates in their personal development and assisted them with necessary technical advancements.`,
            event: "Technical Lead, Insider Company, Istanbul, Turkey",
            position: 'left'
        },
        {
            date: "2021.06",
            event: "Sofware Engineer, Insider Company, Istanbul, Turkey",
            details: `In my third professional mission as a Software Engineer at Insider Company,
                we architected and implemented cutting-edge features for existing products, enabling marketers to orchestrate bespoke, cross-channel experiences as a team.`,
            position: 'right'
        },
        {
            date: "2022.06",
            event: "Started Jotform Company as Frontend Developer, Istanbul, Turkey",
            details: `In my second professional mission at JotForm as a Software Engineer,
                I contributed to the development of analogous products, such as dynamic product tables, advanced PDF generators,
                and streamlined workflow automation tools, continuously integrating cutting-edge features.
                Additionally, I was responsible for troubleshooting and resolving complex issues in existing products,
                ensuring optimal performance and user satisfaction as a team`,
            position: 'left'
        },
        {
            date: "2024.01",
            event: "Started Sharz.net as Software Engineer",
            details: `In my third professional mission at Sharznet as a Software Engineer,
                I spearheaded the enhancement and optimization of existing systems by designing and implementing new interfaces and user panels.
                I engineered new components, libraries, and developed the architecture of design systems for widespread use within the company.
                My role also encompassed creating intricate dashboards and incorporating advanced visual effects to elevate the user experience.
                Additionally, I was responsible for designing the structural framework, implementing SEO strategies, and overseeing the publishing process.`,
            position: 'right'
        }
    ];

    return (
        <div className="timeline-container relative flex mb-20 lg:p-12">
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
                                <h2>{event.event}</h2>
                                <p>{event.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;
