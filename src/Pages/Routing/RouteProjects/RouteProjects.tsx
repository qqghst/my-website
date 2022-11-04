import React from 'react'
import style from '../RouteProjects/RouteProjects.module.scss';
import { motion } from 'framer-motion';

interface IRouteProjects { }

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

const RouteProjects: React.FC<IRouteProjects> = () => {
    return (
        <motion.section
            className='container mx-auto'
            initial='hidden'
            whileInView='visible'
            viewport={{ amount: 0.4, once: true }}
        >
            <div className={`flex flex-col py-[300px] gap-[250px] md:gap-[300px]`}>
                <motion.div className='flex flex-col justify-center items-center gap-0  md:gap-[140px] md:flex-row md:justify-end md:items-end' initial='hidden' whileInView='visible' viewport={{ amount: 0.4, once: true }}>
                    <motion.a href="/" variants={imgAnimation} custom={1}>
                        <figure className={`${style.figure} rotate-0 md:rotate-90`}>
                            <img className='h-[250px] w-[450px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </motion.a>
                    <motion.a href="/" className='translate-y-32' variants={imgAnimation} custom={2}>
                        <figure className={`${style.figure}`}>
                            <img className='h-[250px] w-[450px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </motion.a>
                </motion.div>

                <motion.div className='flex flex-col justify-center items-center gap-0 md:gap-[140px] md:flex-row md:justify-start md:items-start' initial='hidden' whileInView='visible' viewport={{ amount: 0.4, once: true }}>
                    <motion.a href="/" variants={imgAnimation} custom={1}>
                        <figure className={`${style.figure}`}>
                            <img className='h-[250px] w-[450px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </motion.a>
                    <motion.a href="/" className='translate-y-32' variants={imgAnimation} custom={2}>
                        <figure className={`${style.figure} rotate-0 md:rotate-90`}>
                            <img className='h-[250px] w-[450px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </motion.a>
                </motion.div>
            </div>
        </motion.section>
    )
}

export default RouteProjects;