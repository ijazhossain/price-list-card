import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'About',
            path: '/about'
        },
        {
            id: 3,
            name: 'Contact',
            path: '/contact'
        },
        {
            id: 4,
            name: 'Products',
            path: '/products'
        },
        {
            id: 5,
            name: 'Services',
            path: '/services'
        }
    ];
    return (
        <nav >
            <div onClick={() => setOpen(!open)} className='md:hidden'>
                {open ? <span>
                    <XMarkIcon className="h-6 w-6 text-blue-500"></XMarkIcon>
                </span> :
                    <span>
                        <Bars3Icon className="h-6 w-6 text-blue-500" />
                    </span>
                }
            </div>
            <ul className={`md:flex duration-500 md:static absolute ${open ? 'top-6' : 'top-[-300px]'}  pl-8 py-2 bg-purple-400`}>
                {
                    routes.map(route => <Link
                        key={route.id}
                        route={route}
                    ></Link>)
                }
            </ul>
        </nav >
    );
};

export default Navbar;