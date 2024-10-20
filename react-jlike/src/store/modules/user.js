import {createSlice} from "@reduxjs/toolkit";
import {request, setToken as _setToken, getToken, removeToken} from "@/utils";

const userStore = createSlice(
    {
        name: 'user',
        initialState: {
            token: '',
        },
        reducers: {
            setToken(state, action) {
                state.token = action.payload
                console.log('state.token', state.token)
                _setToken(state.token)
            }
        }
    }
)


const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations', loginForm)
        dispatch(setToken(res.data.token))
    }
}
const {setToken} = userStore.actions
const userReducer = userStore.reducer

export {setToken, fetchLogin}

export default userReducer