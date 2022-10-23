import React from 'react'
import Hero from './Hero';
import KeepInTouch from './KeepInTouch';
import Text from './Text';
import Footer from './Footer'

interface IMain {}

const Main: React.FC<IMain> = () => {
    return (
        <div className='scroll-smooth'>
            <Hero />
            <KeepInTouch />
            <Text />
            <Footer />
        </div>
    )
}

export default Main;