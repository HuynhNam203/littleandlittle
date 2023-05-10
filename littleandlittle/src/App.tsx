import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Event from './components/event/Event';
import Payment from './components/payment/Payment';
import PaySuc from './components/paymentsuccess/PaySuc';
import Contact from './components/contact/Contact';


const App: FC = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Event' element={<Event />} />
      <Route path='/EventDetail' element={<Event />} />
      <Route path='/Payment' element={<Payment />} />
      <Route path='/PaySuc' element={<PaySuc />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
