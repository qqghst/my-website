import React from 'react';
import Typewriter from 'typewriter-effect';
import ss from '../LoaderNew/Loader.module.css'
// import { loaderBg } from '../../Assets/imports';

const Loader: React.FC = () => {
    return (
        <section id='typewriter' className='min-h-screen flex flex-col justify-center'>
            <div className='container mx-auto'>
                <div className={ss.typewriter}>
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