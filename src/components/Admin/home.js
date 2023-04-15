import React, { useState, useEffect } from 'react';
import AdminDashboard from './panel/Admin_dashboard_content';
import Category from './category/Category';
import CategoryView from './category/Category_view';
import CategoryRemove from './category/Category_remove';
import CategoryEdit from './category/Category_edit';
import CategoryEditForm from './category/Category_edit_form';
import Product from './product/Product';
import ProductView from './product/Product_view';
import ProductEdit from './product/Product_edit';
import ProductEditForm from './product/Product_edit_form';
import ProductDelete from './product/Product_delete';
import Shop from './shop/Shop';
import ShopDelete from './shop/Shop_delete';
import { Routes, Route } from 'react-router-dom';
import LeftAdmin from './panel/Left_navbar';
import RightAdmin from './panel/Admin_right';
import './home.css';
const Home = () => {
  const [hideLeftBar, setHideLeftBar] = useState(false);
  const hideSideBar = () => {
    setHideLeftBar(!hideLeftBar);
  }
  const mouseUpHide = () => {
    if (window.innerWidth < 1199) {
      setHideLeftBar(false);
    }
  }
  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", mouseUpHide)
  })
  return (
    <div className={`all_div ${hideLeftBar ? "" : "responsive_bg"}`}>
      <div style={{ display: 'flex' }} >
        <LeftAdmin hideLeftBar={hideLeftBar} />
        <RightAdmin hideLeftBar={hideLeftBar} setHideLeftBar={setHideLeftBar} />
        <div className={`admin-right-content ${hideLeftBar ? "" : "responsive_bg"}`} onClick={mouseUpHide}>
          <Routes>
            <Route path='/' element={<AdminDashboard />}></Route>
            <Route path='/adminDashboard' element={<AdminDashboard />}></Route>
            <Route path='/addCateg' element={<Category />}></Route>
            <Route path='/viewCateg' element={<CategoryView />}></Route>
            <Route path='/removeCateg' element={<CategoryRemove />}></Route>
            <Route path='/editCateg' element={<CategoryEdit />}></Route>
            <Route path='/editFormCateg' element={<CategoryEditForm />}></Route>
            <Route path='/addPrdt' element={<Product />}></Route>
            <Route path='/viewPrdt' element={<ProductView />}></Route>
            <Route path='/editPrdt' element={<ProductEdit />}></Route>
            <Route path='/editFormPrdt' element={<ProductEditForm />}></Route>
            <Route path='/deletePrdt' element={<ProductDelete />}></Route>
            <Route path='/addShop' element={<Shop />}></Route>
            <Route path='/deleteShop' element={<ShopDelete />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home