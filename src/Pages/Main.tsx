import React from 'react'
import Hero from './Hero';
import KeepInTouch from './KeepInTouch';
import Footer from './Footer';
import Projects from './Projects';

interface IMain {}

const Main: React.FC<IMain> = () => {
    return (
        <div className='scroll-smooth'>
            <Hero />
            <KeepInTouch /> 
            <Projects />
            <Footer />
        </div>
    )
}

export default Main;