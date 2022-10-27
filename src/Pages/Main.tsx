import React from 'react'
import Hero from './Hero';
import KeepInTouch from './KeepInTouch';
import Footer from './Footer';
import Text from './Text'

interface IMain {}

const Main: React.FC<IMain> = () => {
    return (
        <div className='scroll-smooth'>
            <Hero />
            {/* <Text /> */}
            <KeepInTouch /> 
            <Footer />
        </div>
    )
}

export default Main;