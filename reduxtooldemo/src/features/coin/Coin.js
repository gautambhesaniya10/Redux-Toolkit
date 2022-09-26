import React from 'react'
import { useSelector } from 'react-redux';

const Coin = () => {
    const count = useSelector((state) => state.counter.count);
    const textColor = useSelector((state) => state.theme.color);

    return (
        <>
            <span className="value" style={{color : textColor}}> Coin: {count}</span>
        </>
    )
}

export default Coin