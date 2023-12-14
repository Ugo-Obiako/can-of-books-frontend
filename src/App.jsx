import Header from './Header';
import Footer from './Footer';
import About from './About';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



function App() {


  return (
    <>
      <BrowserRouter>

        <Header />

        <Routes>
          <Route exact path="/" element={<BestBooks />} />
          <Route exact path="/About" element={<About />} />
        </Routes>

        <Footer />

      </BrowserRouter>
    </>
  )
}

export default App;
