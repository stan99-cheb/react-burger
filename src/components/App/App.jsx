import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Forgot from '../Forgot/forgot';
import Header from '../Header/header';
import Constructor from '../Pages/constructor';
import Login from '../Pages/login';
import OrderFeed from '../Pages/order-feed';
import Register from '../Register/register';
import Reset from '../Reset/reset';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Constructor />} />
          <Route path='/constructor' element={<Constructor />} />
          <Route path='/feed' element={<OrderFeed />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgot' element={<Forgot />} />
          <Route path='/reset' element={<Reset />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
