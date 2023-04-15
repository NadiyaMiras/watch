import React from 'react';
import Header from './Home/Header';
import CustomerDashboard from './Home/Dashboard';
import ProductView from './Home/Product_view';
import ProductOrder from './Home/Product_order';
import StatusView from './Home/Order_status_view';
import ErrorPage from './Home/Error_page';
import { Routes, Route } from 'react-router-dom';
const Home = () => {
  return (
    <>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<CustomerDashboard />}></Route>
          <Route path='/customerDashboard' element={<CustomerDashboard />}></Route>
          <Route path='/productView' element={<ProductView />}></Route>
          <Route path='/productOrder' element={<ProductOrder />}></Route>
          <Route path='/statusView' element={<StatusView />}></Route>
          <Route path='/errorPage' element={<ErrorPage />}></Route>
        </Routes>

      </div>
    </>
  )
}

export default Home
