import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    const navbarItems = [
        {
            name: 'UT',
            url: '/'
        },
        {
            name: 'About',
            url: '/About'
        },
        {
            name: 'Blogs',
            url: '/Blogs'
        },
        {
            name: 'Projects',
            url: '/Projects'
        }
    ];

    return (
        <div className={`navbar-container w-full flex justify-between items-center`}>
            <ul className={`navbar-list-container flex w-full justify-evenly items-center`}>
                {navbarItems.map((item, index) => (
                    <li key={index} className={`navbar-list-item`}>
                        <Link className={`border-b-4 `} href={item.url}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navbar;
