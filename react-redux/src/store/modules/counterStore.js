import {createSlice} from "@reduxjs/toolkit";

const counterStore = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increment: (state) => {
            state.count += 1
        },
        decrement: (state) => {
            state.count -= 1
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
        }
    }
})

const {increment, decrement, incrementByAmount} = counterStore.actions

const counterReducer = counterStore.reducer

export {increment, decrement, incrementByAmount}

export default counterReducer