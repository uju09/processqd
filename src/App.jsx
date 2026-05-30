import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { HighlightCards } from './components/sections/HighlightCards';
import { KeyBrands } from './components/sections/KeyBrands';
import { FeaturedIndustries } from './components/sections/FeaturedIndustries';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Service } from './pages/Service';
import { Solutions } from './pages/Solutions';
import { Contact } from './pages/Contact';
import { Compliance } from './pages/Compliance';
import { Terms } from './pages/Terms';
import { Cookies } from './pages/Cookies';
import { GDPR } from './pages/GDPR';
import { SLA } from './pages/SLA';

function Home() {
  return (
    <>
      <Hero />
      <HighlightCards />
      <KeyBrands />
      <FeaturedIndustries />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/service/:serviceId" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/sla" element={<SLA />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
