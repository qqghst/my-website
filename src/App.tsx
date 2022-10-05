import React from 'react';
import styles from './styles';
import NavBar from "./components/pages/NavBar";
import Hero from "./components/pages/Hero";
import About from "./components/pages/About";
import GetInTouch from './components/pages/GetInTouch';
import Text from './components/pages/Text';

function App() {
    return (
        <div className='bg-primary w-full, overflow-hidden'>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <NavBar/>
                </div>
            </div>

            <div className={`bg-primary ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero/>
                </div>
            </div>

            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth}`}>
                    <About/>
                    <GetInTouch/>
                    <Text/>
                </div>
            </div>
        </div>
    );
}

export default App;
