import Navbar from './components/Navbar';
import About from './components/About.jsx';
import GlobalStyle from '../globalStyles';
import SectionCards from './components/SectionCards.jsx';;
import Sobre from './components/Sobre.jsx'
import FAQPage from './components/FAQPage.jsx';
import Footer from './components/Footer.jsx';
import Avaliations from './components/Avaliations.jsx'
import  CardSection from './components/CardsPlussSections.jsx';

GlobalStyle

const App = () => {
  return (
    <>
    
    <GlobalStyle/>
      <Navbar />
      <About />
      <CardSection />
      <SectionCards/>
      <Sobre/>
      <Avaliations />
      <FAQPage/>
      <Footer/>

    </>
  );
};

export default App;
