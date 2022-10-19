import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDisplay from './pages/ProjectDisplay';
import Experience from './pages/Experience'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/micro-app-portfolio/' element={<Home/>} />
                    <Route path='/micro-app-portfolio/projects' element={<Projects/>} />
                    <Route path='/micro-app-portfolio/project/:id' element={<ProjectDisplay/>} />
                    <Route path='/micro-app-portfolio/experience' element={<Experience/>} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;