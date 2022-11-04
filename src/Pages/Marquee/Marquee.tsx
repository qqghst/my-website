import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import style from './Marquee.module.scss';

const marqueeVariants = {
    animate: {
        x: [0, -1035],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 8,
                ease: "linear",
            },
        },
    },
};

const ScrollHorizontal: React.FC = () => {
    return (
        <>
            {/* <section className='flex flex-col justify-center'>
                <div className='flex flex-col justify-center items-center my-[40px]'>
                    <Marquee speed={90} gradient={false}>
                        <ul className={`flex  text-whiteOppacity32 font-bold tracking-bigText text-[40px] sm:text-[57.33px] transition-opacity`}>
                            <li className=''>
                                <Link className='hover:text-whiteOppacity' to='#'>keep in touch&nbsp;/</Link>
                            </li>
                            <li className=''>
                                <Link className='hover:text-whiteOppacity' to='#'>&nbsp;theicesilver121@mail&nbsp;/</Link>
                            </li>
                            <li className=''>
                                <Link className='hover:text-whiteOppacity' to='#'>&nbsp;tg @qqghst</Link>
                            </li>
                        </ul>
                    </Marquee>
                </div>
            </section> */}
            <div>
                <div className={`${style.marquee}`}>
                    <motion.div
                        className={`${style.track}`}
                        variants={marqueeVariants}
                        animate="animate"
                    >
                        <h1>
                            keep in touch / theicesilver121@mail / tg @qqghst / keep in touch / theicesilver121@mail / tg @qqghst / keep in touch / theicesilver121@mail / tg @qqghst / keep in touch / theicesilver121@mail / tg @qqghst / 
                        </h1>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default ScrollHorizontal;
