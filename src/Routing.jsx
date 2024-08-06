import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import Blog from './pages/Blog';
import Post from './pages/Post';
import { HashRouter } from 'react-router-dom';
import Industry from './pages/Industry';

export const Routing = () => {
    return (
        <HashRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='blog' element={<Blog/>} />
                <Route path="/:postid" element={<Post/>}/>
                <Route path='industry-news' element={<Industry/>} />
            </Routes>
        </HashRouter>
    )
}