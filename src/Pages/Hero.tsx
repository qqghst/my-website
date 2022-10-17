import React, { useRef } from 'react';
import { arrow } from "../Assets/imports";
import Button from '../Components/UI/Button';

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
            <section id='hero' className='bg-background min-h-screen flex flex-col justify-center'>
                <div className='container mx-auto'>
                    <div className='flex-1 flex flex-col justify-center'>
                        <p className='text-whiteOppacity32 tracking-regularText mb-[16px] text-base'>hello, i am doing</p>
                        <h1 className='text-whiteOppacity font-bold leading-[110%] tracking-bigText text-[40px] sm:text-[68.8px]'>Frontend development <br /> and web design that will <br /> <span className='text-whiteOppacity32'>increase your profit.</span></h1>
                    </div>
                </div>
                <div className='container mx-auto'>
                    <div className='absolute bottom-[70px] flex'>
                        <Button onClick={handleClick} type='button'>
                            keep going?
                            <img
                                className='px-[16px] animate-bounce'
                                src={arrow}
                                alt="scroll down"
                            />
                        </Button>
                    </div>
                </div>
            </section>
            {/* <section ref={ref} className={`bg-background min-h-screen flex flex-col justify-center text-3xl md:text-4xl`}>
                <div className='container mx-auto flex justify-between items-center '>
                    <img  alt="" />
                    <div>
                        <p className='text-whiteOppacity text-[33.18px] font-light leading-[140%] tracking-[-0.5px] max-w-xl mb-[32px]'><strong>Work it, make it, do it.</strong> <br/ > Makes us harder, better, faster, stronger, stronger.</p>
                    </div>
                </div>
            </section> */}
        </>
    );
};

export default Hero;


// import React, { useState, useRef, useContext, useCallback } from 'react';
// import { arrow } from "../../assets/imports";
// import { ScrollContext } from '../../utils/scroll-observer';
// import Button from '../UI/Button';

// const Hero: React.FC = () => {
//     const refContainer = useRef<HTMLDivElement>(null)
//     const { scrollY } = useContext(ScrollContext)

//     let progress = 0

//     const { current: elContainer } = refContainer
//     if (elContainer) {
//         progress = Math.min(1, scrollY / elContainer.clientHeight)
//     }

//     return (
//         <section id='hero' ref={refContainer} className='min-h-screen flex flex-col justify-center sticky top-0 -z-10' style={{transform: `translateY(-${progress * 20}vh)`}}>
//             <div className='container mx-auto'>
//                 <div className='flex-1 flex flex-col justify-center'>
//                     <p className='text-whiteOppacity32 tracking-regularText mb-[16px] text-base'>hello, i am doing</p>
//                     <h1 className='text-whiteOppacity font-bold leading-[110%] tracking-bigText text-[40px] sm:text-[68.8px]'>Frontend development <br /> and web design that will <br /> <span className='text-whiteOppacity32'>increase your profit.</span></h1>
//                 </div>
//                 <div className=''>
//                     <Button>
//                         keep going?
//                         <img
//                             className='px-[16px]'
//                             src={arrow}
//                             alt="scroll down"
//                         />
//                     </Button>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;


