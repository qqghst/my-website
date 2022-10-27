import React, { useRef } from 'react';
import About from './About';
import Text from './Text';
import { arrow } from "../Assets/imports";
// import Button from '../Components/UI/Button';
import Button from '../Components/UI/Button';
import TitleHero from '../Components/Glitch/titleHero/titleHero';
// import AboutNew from './AboutNew';

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
            <section id='hero' className='min-h-screen flex flex-col justify-center'>
                <div className='container mx-auto'>
                    <TitleHero className=''> </TitleHero>
                    {/* <div className='flex-1 flex flex-col justify-center'>
                        <p className='text-whiteOppacity32 tracking-regularText mb-[16px] text-base'>hello, i am doing</p>
                        <h1 className='text-whiteOppacity font-bold leading-[110%] tracking-bigText text-[40px] sm:text-[68.8px]'>Frontend development <br /> and web design that will <br /> <span className='text-whiteOppacity32'>increase your profit.</span></h1>
                    </div> */}
                </div>
                <div className='container mx-auto'>
                    <div className='absolute bottom-[70px] '>
                        <Button onClick={handleClick} type='button'>
                            {/* <span className='font-jetBrains bg-gradient-to-r bg-clip-text text-transparent from-whiteOppacity to-whiteOppacity hover:from-[#672BE5] hover:to-[#672BE5]'>keep going?</span> */}
                            <span className='font-jetBrains hover:text-[#672BE5]'>keep going?</span>
                            <img
                                className='px-[16px] animate-bounce'
                                src={arrow}
                                alt="scroll down"
                            />
                        </Button>
                    </div>
                </div>
            </section>
            <hr className='opacity-20'/>

            <div ref={ref}>
                <Text />
                {/* <AboutNew/> */}
            </div>
        </>
    );
};

export default Hero;