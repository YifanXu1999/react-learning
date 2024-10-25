import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import count from "../../components/Count";

const takewayStore = createSlice({
    name: 'foods', initialState: {
        foodList: [],
        activeIndex: 0,
        cartList: []
    }, reducers: {
        setFoodList: (state, action) => {
            state.foodList = action.payload
        },
        changeActiveIndex: (state, action) => {
            state.activeIndex = action.payload
        },
        addCart(state, action) {
            console.log('addCart', action.payload)
            const item = state.cartList.find(item => item.id === action.payload.id)
            if(item) {
                console.log('item', item)
                item.count++
                return
            }
            state.cartList.push({...action.payload, count:0})

        }
    }
})


const {setFoodList,changeActiveIndex,addCart} = takewayStore.actions

const fetchFoodList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/takeaway')
        dispatch(setFoodList(res.data))
    }
}
const takeawayReducer = takewayStore.reducer

export {fetchFoodList, changeActiveIndex, addCart}
export default takeawayReducer