import { DECREMENT, INCREMENT } from "../Type";


export const counterInc = (data) => {
    return{
        type : INCREMENT,
        payload : data
    }
}
export const counterDec = (data) => {
    return{
        type : DECREMENT,
        payload : data

    }
}