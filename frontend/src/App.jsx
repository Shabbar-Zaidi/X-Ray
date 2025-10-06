import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";
import OurProducts from "./pages/OurProducts";
import Insights from "./components/Insights";
import Experience from "./components/Experience";
import Services from "./components/Services";
const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <InfoSection />
      <Services />
      <Insights />
      <OurProducts />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
