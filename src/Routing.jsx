import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path='/Deepcall/' element={<Home />} />
                <Route path='/Deepcall/contact' element={<ContactPage />} />
            </Routes>
        </Router>
    )
}