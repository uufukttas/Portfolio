'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navbarItems = [
        { name: 'About', url: '/about' },
        { name: 'Blogs', url: '/blogs' },
        { name: 'Projects', url: '/projects' }
    ];

    return (
        <nav className="text-white p-4 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-lg font-bold hover:text-gray-300 transition-colors duration-200">UT</Link>
                <div className="hidden md:flex space-x-4">
                    {navbarItems.map(item => (
                        <Link key={item.url} href={item.url} className="text-white hover:text-gray-300 transition-colors duration-200">
                            {item.name}
                        </Link>
                    ))}
                </div>
                <button onClick={toggleMenu} className="md:hidden text-white outline-none">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
            {isOpen && (
                <div className="flex flex-col items-center p-4 md:hidden absolute w-full top-16 right-0 left-0 mt-4">
                    {navbarItems.map(item => (
                        <Link key={item.url} href={item.url} className="mt-2 text-white hover:text-gray-300 transition-colors duration-200">
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default MobileNavbar;
