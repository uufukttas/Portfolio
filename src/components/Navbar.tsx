import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <div className={`navbar-container w-full flex justify-between items-center`}>
            <ul className={`navbar-list-container flex w-full justify-evenly items-center`}>
                <li>
                    <Link href={`/about`}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href={`/blogs`}>
                        Blogs
                    </Link>
                </li>
                <li>
                    <Link href={`/projects`}>
                        Projects
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
