import React from 'react';
import Typewriter from 'typewriter-effect';
import loaderStyle from '../LoaderNew/Loader.module.css'

const Loader: React.FC = () => {
    return (
        <section id='typewriter-cover' className='min-h-screen flex flex-col justify-center'>
            <div className={`${loaderStyle.cover}`}>
                <div className={`${loaderStyle.typewriter} text-[33.18px] sm:text-[47.78px] lg:text-[68.8px]`}>
                    <Typewriter 
                        options={{
                            strings: ['/good <br /> design <br /> can speak.'],
                            autoStart: true,
                            delay: 55,
                        }}
                    />
                </div>
            </div>
        </section>
    )
}

export default Loader