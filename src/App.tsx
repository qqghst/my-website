import React, { useEffect, useState } from 'react';
import NavBar from './Pages/NavBar';
import Hero from "./Pages/Hero";
import About from "./Pages/About";
import KeepInTouch from './Pages/KeepInTouch';
import Projects from './Pages/Projects';
import Text from './Pages/Text';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import RouteAbout from './Pages/RouteAbout';
import RouteProjects from './Pages/RouteProjects';
import Main from './Pages/Main';


function App() {
    return (
        <div className=''>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={< Main />} />
                    <Route path='/hero' element={< Main />} />
                    <Route path='/about' element={< RouteAbout />} />
                    <Route path='/projects' element={< RouteProjects />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
