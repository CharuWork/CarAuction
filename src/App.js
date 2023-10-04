import "./App.css";
import HomePage from "./components/pages/HomePage.js";
import ProductPage from "./components/pages/ProductPage.js";
import { Routes, Route } from "react-router-dom";
import "./styles/layout.css";
import "./styles/animate.css";
import "./styles/productdetail.css";
import "./styles/listing.css";
import Header from "./components/layout/header.js";
import Footer from "./components/layout/footer.js";
import SocialHeader from "./components/layout/socialheader.js";
import PreviewHeader from "./components/layout/previewheader.js";
import ErrorBoundary from "./ErrorBoundary.js";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import ListingResults from "./components/pages/ListingResults";
import Headerr from "./components/layout/Headerr";
function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <SocialHeader />
        <PreviewHeader />
        <Headerr />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SeeAll" element={<ListingResults />} />

          <Route path="/vehicle" element={<ProductPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;
