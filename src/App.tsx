import React from 'react';
import NavBar from './Pages/NavBar';
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import KeepInTouch from './Pages/KeepInTouch';
import Projects from './Pages/Projects';
import Text from './Pages/Text';
import { Routes, Route } from 'react-router-dom';
import RouteAbout from './Pages/RouteAbout';
import RouteProjects from './Pages/RouteProjects';


function App() {
    return (
        <div className='bg-background w-full overflow-hidden'>
            <Routes>
                <Route path='/about' element={ <RouteAbout /> }/>
                <Route path='/projects' element={ <RouteProjects /> }/>
            </Routes>
            <NavBar />
            <Hero />
            <About />
            <KeepInTouch />
            <Projects />
            <Text />
            <RouteAbout />
            <RouteProjects />
        </div>
    );
}

export default App;
