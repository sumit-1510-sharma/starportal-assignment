import CryptoCard from "./components/CryptoCard";
import Dictionary from "./components/Dictionary";
import Footer from "./components/Footer";
import Toggle from "./components/helpers/Toggle";
import Hero from "./components/Hero";
import IntractCertified from "./components/IntractCertified";
import Navbar from "./components/Navbar";
import TopCreators from "./components/TopCreators";
import crypto_1 from "../src/assets/cryptocard_1.png";
import crypto_2 from "../src/assets/cryptocard_2.png";
import intract_1 from "../src/assets/intractcertified_1.png";

function App() {
  return (
    <div className="bg-black -z-10">
      <Navbar />
      <Hero />
      <div className="opacity-95 bg-black">
        <CryptoCard leftToRight={true} img={crypto_1} />
        <div className="lg:hidden flex items-center justify-center mx-4 mt-56 mb-16">
          <IntractCertified img={intract_1} />
        </div>
        <CryptoCard leftToRight={false} img={crypto_2} />
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
