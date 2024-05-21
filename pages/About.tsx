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
        <div className={`${montserrat.className} about-page-container flex h-full bg-black text-white"`}>
            <Main>
                <Summary />
                <Timeline />
            </Main>
        </div>
    );
};

export default About;
