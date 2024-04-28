'use client';

import React, { useEffect, useState } from 'react';

interface ITypewriterProps {
    words: string[];
    typingDelay: number;
    erasingDelay: number;
    newWordDelay: number;
};

const Typewriter: React.FC<ITypewriterProps> = ({
    words,
    typingDelay = 200,
    erasingDelay = 100,
    newWordDelay = 1000
}) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setBlink(!blink);
        }, 500);
        return () => clearTimeout(timeout);
    }, [blink]);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            setTimeout(() => {
                setSubIndex((prev) => prev - 1);
            }, newWordDelay);
            return;
        };

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        };

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? erasingDelay : typingDelay);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, typingDelay, erasingDelay, newWordDelay, words]);

    return (
        <h1 className='text-6xl h-[60px]'>
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
        </h1>
    );
};

export default Typewriter;
