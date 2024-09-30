import Navbar from './components/Navbar';
import About from './components/About';
import GlobalStyle from '../globalStyles';
import SectionCards from './components/SectionCards.jsx';;
import Sobre from './components/Sobre.jsx'
import FAQPage from './components/FAQPage.jsx';
GlobalStyle

const App = () => {
  return (
    <>
    <GlobalStyle/>
      <Navbar />
      <About />
      <SectionCards/>
      <Sobre/>
      <FAQPage/>
    </>
  );
};

export default App;
