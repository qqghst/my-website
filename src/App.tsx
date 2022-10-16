import React from 'react';
import NavBar from './Pages/NavBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
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
