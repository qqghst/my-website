import React from 'react'
import Hero from './Hero';
import KeepInTouch from './KeepInTouch';
import Text from './Text';
import Footer from './Footer'
import Loader from '../Components/LoaderNew/Loader';

interface IMain {}

const Main: React.FC<IMain> = () => {
    return (
        <div className='scroll-smooth'>
            <Hero />
            <KeepInTouch />
            <Text />
            <Footer />
            <Loader />
        </div>
    )
}

export default Main;