import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSliceStore";
import privacySlice from "./privacySliceStore";



const CounterStore = configureStore({reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer
}})

export default CounterStore;