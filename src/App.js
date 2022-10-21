import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SkillsDisplay from './pages/SkillsDisplay';
import Projects from './pages/Projects';
import ProjectDisplay from './pages/ProjectDisplay';
import Experience from './pages/Experience';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/micro-app-portfolio/' element={<Home/>}/>
                    <Route path='/micro-app-portfolio/skills' element={<SkillsDisplay/>}/>
                    <Route path='/micro-app-portfolio/projects' element={<Projects/>}/>
                    <Route path='/micro-app-portfolio/project/:id' element={<ProjectDisplay/>}/>
                    <Route path='/micro-app-portfolio/experience' element={<Experience/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;