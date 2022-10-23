import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SkillsDisplay from './pages/SkillsDisplay';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Experience from './pages/Experience';

function App() {
    return (
        <div className="App">
            <Router basename='/portfolio'>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/skills' element={<SkillsDisplay/>}/>
                    <Route path='/projects' element={<Projects/>}/>
                    <Route path='/project/:id' element={<ProjectDisplay/>}/>
                    <Route path='/experience' element={<Experience/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;