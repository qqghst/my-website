import React from 'react';
import Button from "../UI/Button";
import { leftImg } from "../../assets/imports";
import { readMoreBtn } from '../../assets/imports';

const About: React.FC = () => {
    return (
        <section className={`min-h-screen flex flex-col justify-center text-3xl md:text-4xl`}>
            <div className='container mx-auto flex justify-between items-center'>
                <img src={leftImg} alt="" />
                <div>
                    <p className='text-whiteOppacity text-[39.81px] leading-[140%] tracking-[-0.5px] max-w-xl mb-[48px]'>About me section, don't know what to write here now, loremm ipsum fishing.</p>
                    <Button>
                        read more
                        <img
                            className='mx-[16px] transition duration-100 ease-in hover:translate-x-3/4'
                            src={ readMoreBtn }
                            alt="button-right"
                        />
                    </Button>
                </div>
            </div>
        </section>
    )
};

export default About;