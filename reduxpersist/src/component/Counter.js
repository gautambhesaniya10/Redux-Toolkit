import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counterDec, counterInc } from '../redux/action/CounterAction';

const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector(state => state.counterReducer.count);

    return (
        <>
            <div>
                <button onClick={() => dispatch(counterInc(1))}>+</button>
                <div><h3>Count : {count}</h3></div>
                <button onClick={() => dispatch(counterDec(1))}>-</button>
            </div>
        </>
    )
}

export default Counter