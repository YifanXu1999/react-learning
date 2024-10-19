import {createSlice} from "@reduxjs/toolkit";

const takewayStore = createSlice(
    {
        name: 'takeaway',
        initialState: {
            takeawayList: []
        },
        reducers: {
            setTakeawayList: (state, action) => {
                state.takeawayList = action.payload
            }
        }
    }
)