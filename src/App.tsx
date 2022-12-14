import React, { useState, useEffect } from 'react';
import NavBar from './Components/NavBar/NavBarrr';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RouteAbout from './Pages/Routing/RouteAbout';
import RouteProjects from './Pages/Routing/RouteProjects/RouteProjects';
import Main from './Pages/Main';
import Loader from './Components/LoaderNew/Loader';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return (
        <div className=''>
            {
                loading ?
                    <Loader />
                    :
                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route path='/' element={< Main />} />
                            <Route path='/hero' element={< Main />} />
                            <Route path='/about' element={< RouteAbout />} />
                            <Route path='/projects' element={< RouteProjects />} />
                        </Routes>
                    </BrowserRouter>
            }
        </div>
    );
}

export default App;
