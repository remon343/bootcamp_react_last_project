import About from "./components/About";
import Featured from "./components/Featured";
import Firehose from "./components/Firehose";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MainHeading from "./components/MainHeading";
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="pl-16 pr-16 pt-8">
      <MainHeading/>
      <hr className="mt-3"/>
      <Navbar/>
      <HeroSection/>
      <div className="flex justify-between items-center gap-3">
        <Featured/>
        <Featured/>
      </div>
      <div className="flex mt-8 gap-9 pb-20">
        <Firehose/>
        <About/>
  
      </div>
      <Footer/>
    </div>
  );
}

export default App;
