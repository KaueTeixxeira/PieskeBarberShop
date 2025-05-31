import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Home } from './pages/home';
import { Portfolio } from './pages/portfolio';
import { About } from './pages/about';

function App() {
  return (
    <>
      <Nav />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  );

}

export default App
