import { createStore } from "redux";

const Initial_Value = {
    counter: 10
}

const CounterReducer = (store = Initial_Value, action) => {
    if (action.type === "INCREMENT") {
        return {counter: store.counter + 1}
    } else if (action.type === "DECREMENT") {
        return {counter: store.counter - 1}
    } else if (action.type === "DECREMENTBYVALUE") {
        return {counter: store.counter - Number(action.payload.num)}
    } else if (action.type === "INCREMENTBYVALUE") {
        return {counter: store.counter + Number(action.payload.num)}
    }
    return store
}

const CounterStore = createStore(CounterReducer)

export default CounterStore;