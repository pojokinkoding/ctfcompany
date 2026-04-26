import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurProduct from './pages/OurProduct';
import Sulawesi from './pages/Sulawesi';
import Bali from './pages/Bali';
import Sumatera from './pages/Sumatera';
import NorthSumatera from './pages/NorthSumatera';
import CentralJava from './pages/CentralJava';
import Contact from './pages/Contact';
import RegionDetail from './pages/RegionDetail';

export default function App() {
  return (
    <BrowserRouter basename="/ctfcompany/">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="product" element={<OurProduct />} />
          <Route path="product/sulawesi" element={<Sulawesi />} />
          <Route path="product/bali" element={<Bali />} />
          <Route path="product/sumatera" element={<Sumatera />} />
          <Route path="product/north-sumatera" element={<NorthSumatera />} />
          <Route path="product/central-java" element={<CentralJava />} />
          <Route path="product/:regionId" element={<RegionDetail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
