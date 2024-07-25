import headerNavLinks from '@/data/headerNavLinks';
import Link from './Link';
import React from 'react';

const Header = () => {
    return (
        <div className="hidden mt-4 lg:flex lg:justify-center lg:fixed lg:top-0 lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:bg-white lg:dark:bg-gray-800 lg:shadow-lg lg:rounded-3xl lg:p-3 lg:z-50">
            <div className="flex items-center space-x-4">
                {headerNavLinks.map(link => (
                    <Link key={link.title} href={link.href}>
                        <a className="p-2 font-medium text-gray-900 dark:text-gray-100">
                            {link.title}
                        </a>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Header;
