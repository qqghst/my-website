import React from 'react'
import Hero from './Hero';
import KeepInTouch from './KeepInTouch';
import Text from './Text';
// import GlitchNew from '../Components/GlitchNew/glitch'


interface IMain {}

const Main: React.FC<IMain> = () => {
    return (
        <div className='scroll-smooth'>
                        {/* <GlitchNew /> */}
            <Hero />
            <KeepInTouch />
            <Text />

        </div>
    )
}

export default Main;