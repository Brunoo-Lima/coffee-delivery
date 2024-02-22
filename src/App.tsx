import Header from './components/Header';
import SectionHero from './components/SectionHero';
import Products from './components/Product/Products';

const App = () => {
  return (
    <div className="font-primary">
      <Header />
      <main>
        <SectionHero />
        <Products />
      </main>
    </div>
  );
};

export default App;
