import * as React from "react";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Home } from './pages/Home/Home'
import { Cart } from './pages/Cart/Cart'
import { ContactInfo } from './pages/ContactInfo/ContactInfo.jsx'
import { ShipmentInfo } from './pages/Shipment/ShipmentPage'
import { BaseLayout } from './pages/BaseLayout/BaseLayout'
import { CheckoutLayout } from './pages/CheckoutLayout/CheckoutLayout'
import { Submit } from './pages/Submit/Submit.jsx'

import {
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routes>
      <Route path="/" element={<BaseLayout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<CheckoutLayout />}>
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact-info" element={<ContactInfo />} />
            <Route path="/shipment-info" element={<ShipmentInfo />} />
            <Route path="/submit" element={<Submit />} />
          </Route>
        </Route>
      </Routes>
    </Provider>
     
  );
}

export default App;
