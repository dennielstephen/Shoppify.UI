import './App.css'
import Footer from './components/common/Footer'
import Navbar from './components/common/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { About } from './pages/About';
import { Home } from './pages/Home';

function App() {
    return (
        <div className='flex flex-col h-screen justify-between bg-white'>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} /> */}
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App
