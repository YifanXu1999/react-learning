import {createSlice} from "@reduxjs/toolkit";
import {request, setToken as _setToken, getToken, removeToken} from "@/utils";
import {useNavigate} from "react-router-dom";
import router from "@/router";
import {getProfileAPI, loginAPI} from "@/apis/user";

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
        const res = await loginAPI(loginForm)
        dispatch(setToken(res.data.token))
        router.navigate('/')
        window.location.reload()

    }
}

const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await getProfileAPI()
        dispatch(setUserInfo(res.data))
    }
}


const {setToken, setUserInfo, clearUserInfo} = userStore.actions
const userReducer = userStore.reducer

export {setToken, fetchLogin, fetchUserInfo, clearUserInfo}

export default userReducer