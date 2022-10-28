import React, { useRef } from 'react';
import About from './About/About';
import { arrow } from "../Assets/imports";
import Button from '../Components/UI/Button';
import TitleHero from '../Components/Glitch/titleHero/titleHero';

const Hero: React.FC = () => {
    //keep going button starts
    const ref = useRef<null | HTMLDivElement>(null)

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault()
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        console.log('button click event', event)
    }
    //keep going button ends

    return (
        <>
            <section id='hero' className='min-h-screen flex flex-col justify-center px-[32px]'>
                <div className='container mx-auto'>
                    <TitleHero className=''> </TitleHero>
                </div>
                <div className='container mx-auto'>
                    <div className='absolute bottom-[70px] '>
                        <Button onClick={handleClick} type='button' className='text-whiteOppacity font-light text-[16px] flex flex-row items-center'>
                            <span className='font-jetBrains hover:text-[#672BE5]'>keep going?</span>
                            <img
                                className='px-[16px] animate-bounce fill-white'
                                src={arrow}
                                alt="scroll down"
                            />
                        </Button>
                    </div>
                </div>
            </section>
            <hr className='opacity-20' />

            <div ref={ref}>
                <About />
            </div>
        </>
    );
};

export default Hero;