import React from 'react';

const Link = ({ route }) => {
    return (
        <li className='mr-12 hover:bg-purple-900 hover:text-white p-2'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;