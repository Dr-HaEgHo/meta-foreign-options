import './App.css';
import './queries.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Single from './pages/Single';
import FAQs from './pages/FAQs';
import LegalDocs from './pages/LegalDocs';
import Education from './pages/Education';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} /> 
      <Route path="/about-us" element={<AboutUs/>} /> 
      <Route path="/contact-us" element={<Contact />} /> 
      <Route path="/faqs" element={<FAQs />} /> 
      <Route path="/terms" element={<LegalDocs />} /> 
      <Route path="/education" element={<Education />} /> 
      <Route path="/forex" element={<Education />} /> 
      <Route path="/synthetic-indices" element={<Education />} /> 
      <Route path="/stock-indices" element={<Education />} /> 
      <Route path="/commodities" element={<Education />} /> 
      <Route path="dashboard" element={<Single/>} />
    </Routes>
  );
}

export default App;