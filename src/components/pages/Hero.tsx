import React from 'react';
import styles from "../../styles";
import { arrow, giphy, gif } from "../../assets/imports";
import Button from '../UI/Button';


const Hero: React.FC = () => {
    return (
        <section id='hero' className='min-h-screen w-full h-full'>
            {/* // <section className={`flex md:flex-row flex-col ${styles.paddingY}`}> */}
            {/* <div className={`flex-1 flex justify-center items-start flex-col xl:px-0 sm:px-16 px-6`}> */}
            <div className='flex flex-col xl:px-0 sm:px-16 px-6'>
                {/* <div className='flex flex-col w-full mt-[80px]'> */}
                <div className='relative top-[24%] translate-y-[24%]'>
                    <p className='mb-[16px] text-[16px] text-whiteOppacity24 '>hello, i am doing</p>
                    <h1 className={`${styles.h1}`}>Frontend development <br className='sm:block hidden' /> and web design that will <br className='sm:block hidden' /> <span className='text-whiteOppacity24'>increase your profit.</span></h1>
                </div>
                <div className='w-full my-[200px]'>
                    <Button>keep going? <img className='px-[16px]' src={arrow} alt="arrow" /></Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
