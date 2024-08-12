import { HashRouter, Route, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import ContactPage from './pages/ContactPage';
import Home from './pages/Home';
import Industry from './pages/Industry';
import Post from './pages/Post';

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