import logo from '../src/assets/2x/logo@2x.png';
import './App.css';
import Header from '../src/components/User/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './views/User/Home';
import Store from './views/User/Store';
import headNav from './components/User/BreadcrumbComponent';
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
        <Route path="/nav" element={<headNav />} />

        {/* Admin Routes */}
        <Route path="/admin" element="#" />
        {/* Default Route */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
