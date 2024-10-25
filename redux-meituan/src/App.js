import NavBar from './components/NavBar'
import Menu from './components/Menu'
import Cart from './components/Cart'
import FoodsCategory from './components/FoodsCategory'

import './App.scss'
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchFoodList} from "./store/modules/takeaway";


const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        // fetchFoodList()
        dispatch(fetchFoodList())
    }, [dispatch])
    const foodsList = useSelector(state => state.takeaway.foodList)
    console.log(foodsList)
    const activeIndex = useSelector(state => state.takeaway.activeIndex)
    console.log(activeIndex)
    return (<div className="home">
            {/* 导航 */}
            <NavBar/>

            {/* 内容 */}
            <div className="content-wrap">
                <div className="content">
                    <Menu/>

                    <div className="list-content">
                        <div className="goods-list">
                            {/* 外卖商品列表 */}
                            {foodsList.filter((item,index)=> index === activeIndex).map(item => {
                                return (<FoodsCategory
                                        key={item.tag}
                                        // 列表标题
                                        name={item.name}
                                        // 列表商品
                                        foods={item.foods}
                                    />)
                            })}
                        </div>
                    </div>
                </div>
            </div>
            {/* 购物车 */}
            {/* 购物车 */}
            {/* 购物车 */}
            <Cart/>
        </div>)
}

export default App
