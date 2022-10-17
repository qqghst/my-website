import React from 'react'
import Hero from './Hero';
import KeepInTouch from './KeepInTouch';
import Text from './Text';


interface IMain {}

const Main: React.FC<IMain> = () => {
    return (
        <div className='scroll-smooth'>
            <Hero />
            <KeepInTouch />
            <Text />
        </div>
    )
}

export default Main;