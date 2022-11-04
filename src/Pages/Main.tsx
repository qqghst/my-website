import React from 'react'
import Hero from './Hero';
import KeepInTouch from './Marquee/Marquee';
import Footer from './Footer';
import Projects from './Projects/Projects';

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