import CryptoCard from "./components/CryptoCard";
import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";
import Toggle from "./components/helpers/Toggle";
import Hero from "./components/Hero";
import IntractCertified from "./components/IntractCertified";
import Navbar from "./components/Navbar";
import TopCreators from "./components/TopCreators";

function App() {
  return (
    <div className="bg-black -z-10">
      <Navbar />
      <Hero />
      <div className="opacity-95 bg-black">
        <CryptoCard leftToRight={true} />
        <div className="lg:hidden flex items-center justify-center mx-4 mt-56 mb-16">
          <IntractCertified />
        </div>
        <CryptoCard leftToRight={false} />
        {/* RewardCard */}
        <TopCreators />
        <Dictionary />
        <Toggle />
        <div className="relative">
          <hr className="border-t border-gray-700 shadow-md" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
