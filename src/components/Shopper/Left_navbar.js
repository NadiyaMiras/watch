import React from 'react'
import a1 from './left_navbar.module.css';
const Left_navbar = (props) => {
    const { hideLeftBar } = props;
    return (
        <div className={hideLeftBar ? `${a1.left_menu} ${a1.toggle}` : a1.left_menu}>
            <div className={a1.user}>
                <div>
                    <img src={require('../images/royal_shop.png')} className={a1.user_img} /></div>
                <div>
                    <h5>Royal</h5>
                    <p><span><img src={require('../images/online.gif')} className={a1.dot_img} /></span>Online</p>
                </div>
            </div>
            <div className={a1.mainMenuWrapper}>
                <div className={a1.admin_head}>
                    <h5>Shop</h5>
                </div>
                <div className={a1.main_menu}>
                    <ul>
                        <a href='shopDashboard'><h6>Dashboard overview</h6> </a>
                        <a href='orderView'><h6>View orders</h6></a>
                    </ul>
                </div>
            </div>
        </div >

    )
}

export default Left_navbar
