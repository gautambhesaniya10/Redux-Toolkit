import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice';

const Counter = () => {

    //   const [count, setCount] = useState(0);

    const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();

    return (
        <>
            <button className="button" aria-label="Increment value" onClick={() => { dispatch(increment()) }}> + </button>

            <span className="value" >Count: {count}</span>

            <button className="button" aria-label="Decrement value" onClick={() => { dispatch(decrement()) }}> - </button>
            <br />
            <button className="button" onClick={() => { dispatch(incrementByAmount(10)) }}> Increment by 10 </button>
        </>
    )
}

export default Counter