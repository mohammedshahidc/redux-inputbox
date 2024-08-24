import { createSlice } from "@reduxjs/toolkit";


const initialvalue = {
    name: "",
    age: ""
}
const formslice = createSlice(
    {
        name: "form",
        initialState:initialvalue,
        reducers: {
            submit: (state, action) => {
                state.name=action.payload.name
                state.age=action.payload.age
            }
        }
    }
)
export default formslice.reducer
export const { submit } = formslice.actions