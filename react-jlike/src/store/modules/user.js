import {createSlice} from "@reduxjs/toolkit";
import {request, setToken as _setToken, getToken, removeToken} from "@/utils";

const userStore = createSlice(
    {
        name: 'user',
        initialState: {
            token: '',
            userInfo: {}
        },
        reducers: {
            setToken(state, action) {
                state.token = action.payload
                console.log('state.token', state.token)
                _setToken(state.token)
            },
            setUserInfo(state, action) {
                state.userInfo = action.payload
            },
            clearUserInfo(state) {
                state.token = ''
                state.userInfo = {}
                removeToken()
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

const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await request.get('/user/profile')
        dispatch(setUserInfo(res.data))
    }
}


const {setToken, setUserInfo, clearUserInfo} = userStore.actions
const userReducer = userStore.reducer

export {setToken, fetchLogin, fetchUserInfo, clearUserInfo}

export default userReducer