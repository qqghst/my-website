import React, { useState, useEffect } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import NavBar from './Components/NavBar/NavBarrr';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RouteAbout from './Pages/RouteAbout';
import RouteProjects from './Pages/RouteProjects';
import Main from './Pages/Main';
import Loader from './Components/LoaderNew/Loader';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])

    return (
        <div className=''>
            {
                loading ?
                    // <ClipLoader
                    //     color={'#123abc'}
                    //     loading={loading}
                    //     // cssOverride={override}
                    //     size={150}
                    //     aria-label="Loading Spinner"
                    //     data-testid="loader"
                    // />
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
