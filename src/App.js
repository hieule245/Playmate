import logo from '../src/assets/2x/logo@2x.png';
import './App.css';
import Header from '../src/components/User/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/User/Home';
import Store from './views/User/Store';
import Tokens from './views/User/TokenCollection';
import Cart from './views/User/Cart';
import Detail from './views/User/DetailProduct';
import Purchase from './views/User/Purchase';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* First Step Routes */}
        <Route path="/signIn" element="#" />
        <Route path="/signUp" element="#" />
        <Route path="/reset-password" element="#" />
        <Route path="/send-email" element="#" />

        {/* User Routes */}
        <Route path="/store" element={<Store />} />
        <Route path="/store/tokens" element={<Tokens />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/store/tokens/:token_id" element={<Detail />} />
        <Route path="/purchase" element={<Purchase />} />

        {/* Admin Routes */}
        <Route path="/admin" element="#" />
        {/* Default Route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
