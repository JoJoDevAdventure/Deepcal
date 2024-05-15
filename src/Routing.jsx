import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<ContactPage />} />
            </Routes>
        </Router>
    )
}