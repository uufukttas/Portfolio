import React from 'react';
import { Montserrat } from "next/font/google";
import Main from "@/src/components/Main";
import Summary from "@/src/components/Summary";
import Timeline from "@/src/components/Timeline";
import "../app/globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    display: "swap",
});

const About: React.FC = () => {
    return (
        <div className={`${montserrat.className} about-page-container h-full flex flex-col bg-[#F5F5F5] text-[#003366]`}>
            <Main>
                <Summary />
                <Timeline />
            </Main>
        </div>
    );
};

export default About;
