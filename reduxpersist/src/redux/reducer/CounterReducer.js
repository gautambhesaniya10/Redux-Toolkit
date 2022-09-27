import { DECREMENT, INCREMENT } from "../Type";

const defaultState = {
    count: 0
}

const counterReducer = (state = defaultState, action) => {

    switch (action.type) {
        case INCREMENT:
            const Incvalue = state.count += action.payload;
            return {count : Incvalue}
            
        case DECREMENT:
            const decValue = state.count -= action.payload;
            return {count : decValue}
        default:
            return state;
    }

}
export default counterReducer