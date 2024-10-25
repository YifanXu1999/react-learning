import classNames from 'classnames'
import './index.scss'
import {useDispatch, useSelector} from "react-redux";
import {changeActiveIndex} from "../../store/modules/takeaway";

const Menu = () => {
    const foodsList = useSelector(state => state.takeaway.foodList)
    const dispatch = useDispatch()
    const menus = foodsList.map(item => ({tag: item.tag, name: item.name}))
    const activeIndex = useSelector(state => state.takeaway.activeIndex)
    return (<nav className="list-menu">
        {/* 添加active类名会变成激活状态 */}
        {menus.map((item, index) => {
            return (<div
                onClick={() => dispatch(changeActiveIndex(index))}
                key={item.tag}
                className={classNames('list-menu-item', activeIndex == index &&'active')}
                c
            >
                {item.name}
            </div>)
        })}
    </nav>)
}

export default Menu
