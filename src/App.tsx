import React from 'react';
import NavBar from "./components/pages/NavBar";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import KeepInTouch from './components/pages/KeepInTouch';
import Projects from './components/pages/Projects';
import Text from './components/pages/Text';

function App() {
    return (
        <div className='bg-background w-full overflow-hidden'>
            {/* <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar />
                </div>
            </div> */}

            {/* <div className={`bg-background flex justify-center items-start`}>
                <div className={`xl:max-w-[1280px] w-full`}>
                    <Hero/>
                </div>
            </div> */}
            <Hero />
            <About />
            <KeepInTouch />
            <Projects />
            <Text />

            {/* 
            <div className={`bg-background ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <About />
                    <ScrollHorizontal />
                    <Projects />
                    <Text />
                </div>
            </div> */}
        </div>
    );
}

export default App;
