import { combineReducers } from 'redux';
import counterReducer from './CounterReducer';


const rootreducer = combineReducers(
    {
        counterReducer
    }
)

export default rootreducer