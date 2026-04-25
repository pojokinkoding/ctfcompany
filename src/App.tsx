import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurProduct from './pages/OurProduct';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="product" element={<OurProduct />} />
          <Route path="contact" element={<div className="min-h-[50vh] flex items-center justify-center pt-[150px]"><h1 className="text-4xl text-gray-500">Coming Soon</h1></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
