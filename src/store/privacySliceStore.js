import { createSlice } from "@reduxjs/toolkit"

const privacySlice = createSlice({
    name: "privacy",
    initialState: {privacyVal: true},
    reducers: {
        toggle: (state)=>{
            state.privacyVal = !state.privacyVal
        }
    }
})


export const PrivacyAction = privacySlice.actions
export default privacySlice