import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Footer from './components/Footer'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <>
      <Navbar />
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<Textform/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </div>
      <Footer />
    </>
  </Router>
  )
}

export default App
