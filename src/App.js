import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import AdminHome from './components/Admin/home';
import PublicHome from './components/Public/Home';
import CustomerHome from './components/Customer/Home';
import ShopHome from './components/Shopper/Home';
function App() {
  const login = () => {
    let loginValues = localStorage.getItem('loginValue');
    loginValues = (loginValues == null) ? 'default' : loginValues;
    console.log(loginValues);
    switch (loginValues) {
      case 'public':
        return <PublicHome />;
      case 'admin':
        return <AdminHome />;
      case 'shop':
        return <ShopHome />;
      case 'customer':
        return <CustomerHome />;
      default:
        console.log(loginValues);
        return <PublicHome />;
    }
  }
  return (
    <div>
      {login()}
    </div>
  );
}

export default App;
