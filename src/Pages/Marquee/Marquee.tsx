import React from 'react';
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
    )
}

export default ScrollHorizontal;
