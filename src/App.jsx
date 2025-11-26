import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MainSection from './pages/Homepage/MainSection'
import AboutPage from './pages/about/AboutPage'
import DestinationsPage from './pages/Destinations/DestinationsPage'
import PackagesPage from './pages/packages/PackagesPage'
import ServicesPage from './pages/services/ServicesPage'
import ContactPage from './pages/contact/ContactPage'
import PackageDetails from './components/Packages/PackagesDetail'  
import ScrollToTop from './components/scroll//ScrollToTop' 

function App() {
  return (
    <Router>
       <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        {/* Header on all pages */}
        <Header />

        {/* Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<MainSection />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/destination" element={<DestinationsPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* ✅ NEW ROUTE FOR DETAILS PAGE */}
            <Route path="/package/:id" element={<PackageDetails />} />

          </Routes>
        </div>

        {/* Footer on all pages */}
        <Footer />
      </div>
    </Router>
  )
}

export default App
