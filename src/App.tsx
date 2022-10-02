import React from 'react';
import styles from './styles';
import NavBar from "./components/Pages/NavBar";
import Hero from "./components/Pages/Hero";
import About from "./components/Pages/About";
import GetInTouch from './components/Pages/GetInTouch';
import Text from './components/Pages/Text';

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
