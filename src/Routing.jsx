import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import Blog from './pages/Blog';
import Post from './pages/Post';

export const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<ContactPage />} />
                <Route path='/blog' element={<Blog/>} />
                <Route path="/:postid" element={<Post/>}/>
            </Routes>
        </Router>
    )
}