/* eslint-disable react/prop-types */
import Navbar from "./components/Navbar";
import About from "./components/About";
import GlobalStyle from "../globalStyles";
import SectionCards from "./components/SectionCards";
import Sobre from "./components/Sobre";
import FAQPage from "./components/FAQPage";
import Footer from "./components/Footer";
import Avaliations from "./components/Avaliations";
import CardSection from "./components/CardsPlussSections";




const App = () => {


  return (
    <>

      <GlobalStyle />
      <Navbar />
      <About />
      <CardSection />
      <SectionCards />
      <Sobre />
      <Avaliations />
   
      <FAQPage />

      <Footer />
    </>
  );
};

export default App;
