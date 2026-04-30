import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { HighlightCards } from './components/sections/HighlightCards';
import { KeyBrands } from './components/sections/KeyBrands';
import { FeaturedIndustries } from './components/sections/FeaturedIndustries';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

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
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
