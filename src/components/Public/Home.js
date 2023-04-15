import React from 'react';
import PublicDashboard from './Home/Dashboard';
import ProductView from './Home/Product_view';
import Login from './Login/Login';
import SignUp from './Login/signUp';
import ForgotPassword from './Login/forgotPassword';
import Error_page from './Home/Error_page'
import { Routes, Route } from 'react-router-dom';
const Home = () => {
  console.log('home');
  return (
    <div>
      <Routes>
        <Route path='/' element={<PublicDashboard />}></Route>
        <Route path='/publicHome' element={<PublicDashboard />}></Route>
        <Route path='/productView' element={<ProductView />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>
        <Route path='/forgotPsswrd' element={<ForgotPassword />}></Route>
        <Route path='/errorPage' element={<Error_page />}></Route>
      </Routes>

    </div>
  )
}

export default Home
