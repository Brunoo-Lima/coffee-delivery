import Header from './components/Header';
import SectionHero from './components/SectionHero';
import Products from './components/Product/Products';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="font-font-baloo2 bg-base_background">
      <Header />
      <main>
        <SectionHero />
        <Products />
      </main>
      <Footer />
    </div>
  );
};

export default App;
