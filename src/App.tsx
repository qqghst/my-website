// import React, { useState, useEffect, CSSProperties } from 'react';
// import ClipLoader from "react-spinners/ClipLoader";
import NavBar from './Pages/NavBar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import RouteAbout from './Pages/RouteAbout';
import RouteProjects from './Pages/RouteProjects';
import Main from './Pages/Main';
// import Loader from './Components/Loader/loader';

// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "blue",
// };

function App() {
    // const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //     setLoading(false);
    //     setTimeout(() => {
    //         setLoading(false)
    //     }, 4000)
    // }, [])
    return (
        <div className=''>
            {/* {
                loading ?

                    <Loader/>

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
            } */}
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
