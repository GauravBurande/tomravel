import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import DiscoverPlaces from './components/DiscoverPlaces';
import TravelGuide from './components/TravelGuide';
import Translations from './components/Translations';
import Cultures from './components/Cultures';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/discover' element={<DiscoverPlaces />} />
          <Route exact path='/travel-guide' element={<TravelGuide />} />
          <Route exact path='/translations' element={<Translations />} />
          <Route exact path='/cultures' element={<Cultures />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
