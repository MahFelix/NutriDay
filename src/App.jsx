import Navbar from './components/Navbar';
import About from './components/About.jsx';
import GlobalStyle from '../globalStyles';
import SectionCards from './components/SectionCards.jsx';;
import Sobre from './components/Sobre.jsx'
import FAQPage from './components/FAQPage.jsx';
import Footer from './components/Footer.jsx';
import IMC from './components/IMC.jsx'
GlobalStyle

const App = () => {
  return (
    <>
    
    <GlobalStyle/>
      <Navbar />
      <About />
      <SectionCards/>
      <IMC />
      <Sobre/>
      <FAQPage/>
      <Footer/>

    </>
  );
};

export default App;
