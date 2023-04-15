import React, { useState, useEffect } from 'react';
import LeftAdmin from './Left_navbar';
import RightAdmin from './Admin_right';
import ShopDashboard from './Admin_dashboard_content';
import Orderview from './Order_view'
import { Routes, Route } from 'react-router-dom';
import './Home.css';
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
            <Route path='/' element={<ShopDashboard />}></Route>
            <Route path='/shopDashboard' element={<ShopDashboard />}></Route>
            <Route path='/orderView' element={<Orderview />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Home