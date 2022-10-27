import React from 'react';
import Button from '../Components/UI/Button';
import { Link } from 'react-router-dom';
import KeepInTouch from './KeepInTouch';

const AboutNew: React.FC = () => {
    return (
        <section className='bg-white min-h-screen flex flex-col justify-center'>
            <div className='container mx-auto'>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-black text-[23.04px] sm:text-[33.18px] font-light leading-[150%] tracking-[-1.25px]'>My name is <span className='font-medium'>Dmitry</span>, I am twenty two years old. <br />Doing <span className='font-medium'>frontend</span> development and <span className='font-medium'>ux/ui</span> <span className='font-medium'>design</span>. <br />Currently, free for hiring :)</p>
                    </div>
                    <div>
                        <p className='text-black text-[16px] leading-[180%] mb-[80px] font-light'>My tech stack:<br />HTML, CSS, JavaScript, <br /> TypeScript, React, Redux, <br /> Tailwind, SCSS, Figma</p>
                        <button className='rounded-full bg-black w-[160px] h-[160px] text-white font-jetBrains'>
                            read more
                        </button>
                    </div>
                </div>
            </div>
            {/* <KeepInTouch /> */}
        </section>
    )
}

export default AboutNew