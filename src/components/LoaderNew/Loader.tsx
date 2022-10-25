import React from 'react';
import Typewriter from 'typewriter-effect';
import loaderStyle from '../LoaderNew/Loader.module.css'

const Loader: React.FC = () => {
    return (
        <section id='typewriter-cover' className='min-h-screen flex flex-col justify-center'>
            <div className={`${loaderStyle.cover}`}>
                <div className={loaderStyle.typewriter}>
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