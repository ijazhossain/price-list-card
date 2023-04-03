import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [price, setPrice] = useState([])
    useEffect(() => {
        fetch('pricing.json')
            .then(res => res.json())
            .then(data => setPrice(data))
    }, [])
    return (
        <div className='grid md:grid-cols-3 gap-3'>
            {
                price.map(price => <PriceCard
                    key={price.id}
                    price={price}
                ></PriceCard>)
            }
        </div>
    );
};

export default PriceList;