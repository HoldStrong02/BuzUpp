import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const WeddingCeremony = lazy(() => import('./components/Services/WeddingCeremony'));
const WeddingEvent = lazy(() => import('./components/Services/WeddingEvent'));
const Gallery = lazy(() => import('./components/Gallery'));
const Blog = lazy(() => import('./components/Blog'));
const ContactForm = lazy(() => import('./components/ContactForm'));

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <div className='container'></div>
                    <Suspense fallback={<div>Зареждане...</div>}>
                        <main>
                            <Routes>
                                <Route path="/" element={<div className="section"><Home/></div>}/>
                                <Route path="/За мен" element={<div className="section"><About/></div>} />
                                <Route path="/Сватбена церемония" element={<div className="section"><WeddingCeremony/></div>} />
                                <Route path="/Сватбено събитие" element={<div className="section"><WeddingEvent/></div>} />
                                <Route path="/Галерия" element={<div className="section"><Gallery/></div>} />
                                <Route path="/Блог" element={<div className="section"><Blog/></div>} />
                                <Route path="/Контакти" element={<div className="section"><ContactForm/></div>} />
                            </Routes>
                        </main>
                    </Suspense>
                <div/>
            </Router>
            <Button />
            <Footer />
        </>
    );
}

export default App;
