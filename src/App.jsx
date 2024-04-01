import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  
  return (
    <Router basename='/Deepcall'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
