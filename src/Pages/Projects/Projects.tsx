import React from 'react';
import Button from '../../Components/UI/Button';
import { Link } from 'react-router-dom';
import styles from './Projects.module.scss'
import { motion } from 'framer-motion';
import { smt, tenderPlay, notReady } from '../../Assets/imports';

const imgAnimation = {
    hidden: {
        y: -200,
        opacity: 0,
    },
    visible: (custom: any) => ({
        y: 0,
        opacity: 1,
        ease: "linear",
        transition: { delay: custom * 0.2 },
    })
}

const Projects: React.FC = () => {
    return (
        <motion.section
            className='min-h-screen flex flex-col justify-center pt-[180px]'
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.4, once: true }}
        >
            <div className='container mx-auto'>
                <div className='flex flex-col gap-[180px] mb-[180px] flex-wrap px-[32px] md:px-0'>
                    <motion.div className='flex justify-center' initial='hidden' whileInView='visible' viewport={{ amount: 0.4, once: true }}>
                        <motion.a href="/" variants={imgAnimation} custom={1}>
                            <figure>
                                <img className='h-[500px] w-[1000px]' src={smt} alt="/" />
                                <div className='mt-[8px]'>
                                    <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                    <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                                </div>
                            </figure>
                        </motion.a>
                    </motion.div>

                    <motion.div className='flex flex-col gap-[180px] items-end md:flex-row md:gap-0 justify-evenly' initial='hidden' whileInView='visible' viewport={{ amount: 0.4, once: true }}>
                        <motion.a href="/" variants={imgAnimation} custom={3}>
                            <figure>
                                <img className='h-[300px] w-[600px]' src={tenderPlay} alt="/" />
                                <div className='mt-[8px]'>
                                    <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Tender Play</figcaption>
                                    <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                                </div>
                            </figure>
                        </motion.a>
                        <motion.a href="/" className='translate-y-[-160px]' variants={imgAnimation} custom={2}>
                            <figure>
                                <img className='h-[200px] w-[400px]' src={notReady} alt="/" />
                                <div className='mt-[8px]'>
                                    <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Lorem ipsum</figcaption>
                                    <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                                </div>
                            </figure>
                        </motion.a>
                    </motion.div>
                </div>

                <div className='flex flex-col gap-[180px] mb-[180px] flex-wrap px-[32px] md:px-0'>
                    <motion.div className='flex justify-end' initial='hidden' whileInView='visible' viewport={{ amount: 0.4, once: true }}>
                        <motion.a href="/" variants={imgAnimation} custom={1}>
                            <figure>
                                <img className='h-[500px] w-[1000px]' src={tenderPlay} alt="/" />
                                <div className='mt-[8px]'>
                                    <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Lorem ipsum</figcaption>
                                    <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                                </div>
                            </figure>
                        </motion.a>
                    </motion.div>

                    <motion.div className='flex flex-col gap-[180px] items-end md:flex-row md:gap-0 justify-evenly' initial='hidden' whileInView='visible' viewport={{ amount: 0.4, once: true }}>
                        <motion.a href="/" className='translate-y-[-160px]' variants={imgAnimation} custom={2}>
                            <figure>
                                <img className='h-[200px] w-[400px]' src={notReady} alt="/" />
                                <div className='mt-[8px]'>
                                    <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Lorem ipsum</figcaption>
                                    <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                                </div>
                            </figure>
                        </motion.a>
                        <motion.a href="/" variants={imgAnimation} custom={3}>
                            <figure>
                                <img className='h-[300px] w-[600px]' src={notReady} alt="/" />
                                <div className='mt-[8px]'>
                                    <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Lorem ipsum</figcaption>
                                    <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                                </div>
                            </figure>
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            <div className='flex justify-center items-center'>
                <Link to='/projects' className=''>
                    <Button type='button' className='rounded-full bg-whiteOppacity w-[160px] h-[160px] text-black'>
                        <span className='font-jetBrains'>view all</span>
                    </Button>
                </Link>
            </div>
        </motion.section>

    )
}

export default Projects