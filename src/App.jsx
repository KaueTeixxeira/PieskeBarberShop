import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { Home } from './pages/home';
import { About } from './pages/about';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* <div className="mx-auto bg-[#F3F2EE] min-h-screen flex flex-col font-sans"> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        {/* </div> */}
      </Routes>
      <Footer />
    </>
  );

}

export default App