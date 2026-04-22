import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import FounderPage from "./pages/FounderPage";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import ServicesPage from "./pages/ServicesPage";

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1F2937]">
      <a href="#main-content" className="sr-only focus:not-sr-only rounded bg-[#F97316] px-4 py-2 text-sm font-semibold text-white">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/founder" element={<FounderPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
