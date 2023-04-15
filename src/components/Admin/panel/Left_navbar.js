import React from 'react';
import a1 from './left_navbar.module.css';
const Left_navbar = (props) => {
    const { hideLeftBar } = props;
    return (
        <div className={hideLeftBar ? `${a1.left_menu} ${a1.toggle}` : a1.left_menu}>
            <div className={a1.user}>
                <div>
                    <img src={require('../../images/user.png')} className={a1.user_img} /></div>
                <div>
                    <h5>Nadiya</h5>
                    <p><span><img src={require('../../images/online.gif')} className={a1.dot_img} /></span>Online</p>
                </div>
            </div>
            <div className={a1.mainMenuWrapper}>
                <div className={a1.admin_head}>
                    <h5>Admin Panel</h5>
                </div>
                <div className={a1.main_menu}>
                    <a href='adminDashboard'><h6>Dashboard overview</h6></a>
                    <h6>Category</h6>
                    <ul>
                        <a href='addCateg'><li><span className={a1.icon_img}><img src={require('../../images/add_categ.png')} /></span>Add category</li></a>
                        <a href='viewCateg'><li><span className={a1.icon_img}><img src={require('../../images/view_categ.png')} /></span>View category</li></a>
                        <a href='editCateg'><li><span className={a1.icon_img}><img src={require('../../images/update_categ.png')} /></span>Edit category</li></a>
                        <a href='removeCateg'><li><span className={a1.icon_img}><img src={require('../../images/remove_categ.png')} /></span>Remove category</li></a>
                    </ul>
                    <h6>Product</h6>
                    <ul>
                        <a href='addPrdt'><li><span className={a1.icon_img}><img src={require('../../images/add_prdt.png')} /></span>Add product</li></a>
                        <a href='viewPrdt'><li><span className={a1.icon_img}><img src={require('../../images/view_prdt.png')} /></span>View product</li></a>
                        <a href='editPrdt'><li><span className={a1.icon_img}><img src={require('../../images/edit_prdt.png')} /></span>Edit product</li></a>
                        <a href='deletePrdt'><li><span className={a1.icon_img}><img src={require('../../images/remove_prdt.png')} /></span>Remove product</li></a>
                    </ul>
                    <h6>Shop</h6>
                    <ul>
                        <a href='addShop'><li><span className={a1.icon_img}><img src={require('../../images/add_shop.png')} /></span>Add shop</li></a>
                        <a href='deleteShop'><li><span className={a1.icon_img}><img src={require('../../images/remove_shop.png')} /></span>Remove shop</li></a>
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default Left_navbar;
