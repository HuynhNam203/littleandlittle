import React, { FC } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import Event from './components/event/Event';
import Payment from './components/payment/Payment';
import PaySuc from './components/paymentsuccess/PaySuc';
import Contact from './components/contact/Contact';
import Background from "./assets/background.svg";
import EventDetail from './components/event/EventDetail';
import { db } from './config/fbconfig';



const App: FC = () => {
  return (
    <div>
      <img src={Background} alt="background" id="background" />
      

    <BrowserRouter>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Event' element={<Event />} />
      <Route path='/Event/Detail' element={<EventDetail />} />
      <Route path='/Payment' element={<Payment />} />
      <Route path='/PaySuc' element={<PaySuc />} />
      <Route path='/Contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
