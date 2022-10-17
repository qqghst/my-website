import React from 'react';
import { leftImg, arrow, line } from "../Assets/imports";
import Button from '../Components/UI/Button';

const About: React.FC = () => {
    return (
        <>  
            <img src={line} alt="" />
            <section className={`bg-background min-h-screen flex flex-col justify-center text-3xl md:text-4xl`}>
                <div className='container mx-auto flex justify-between items-center '>
                    <img src={leftImg} alt="" />
                    <div>
                        <p className='text-whiteOppacity text-[33.18px] font-light leading-[140%] tracking-[-0.5px] max-w-xl mb-[32px]'><strong>Work it, make it, do it.</strong> <br/ > Makes us harder, better, faster, stronger, stronger.</p>
                        <Button type='button'>
                            read more
                            <img
                                className='px-[16px] animate-bounce'
                                src={arrow}
                                alt="scroll down"
                            />
                        </Button>
                        {/* <Button>
                            read more
                            <img
                                className='px-[16px] animate-bounce'
                                src={readMoreBtn}
                                alt="button-right"
                            />
                        </Button> */}
                    </div>
                </div>
            </section>
            <img src={line} alt="" />
        </>
    )
};

export default About;