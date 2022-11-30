import React from 'react'
import zz from './titleHero.module.css'

interface ITitleHero {
    children?: React.ReactNode,
    className?: string,
}

const titleHero: React.FC<ITitleHero> = ({ children, className, ...props }) => {
    return (
        <div className='flex-1 flex flex-col justify-center'>
            <p className='text-whiteOppacity32 tracking-regularText mb-[16px] text-base'>hello, i am doing</p>
                <div className={zz.stack}>
                    <span className={`${zz.stack1} text-whiteOppacity font-bold leading-[110%] tracking-bigText text-[33.18px] sm:text-[47.78px] lg:text-[68.8px] `}>Frontend developmentasa <br /> and web design that will <br /> <p className='text-whiteOppacity32'>increase your profit.</p></span>
                    <span className={`${zz.stack2} text-whiteOppacity font-bold leading-[110%] tracking-bigText text-[33.18px] sm:text-[47.78px] lg:text-[68.8px] `}>Frontend developmentasa <br /> and web design that will <br /> <p className='text-whiteOppacity32'>increase your profit.</p></span>
                    <span className={`${zz.stack3} text-whiteOppacity font-bold leading-[110%] tracking-bigText text-[33.18px] sm:text-[47.78px] lg:text-[68.8px] `}>Frontend developmentasa <br /> and web design that will <br /> <p className='text-whiteOppacity32'>increase your profit.</p></span>
                </div>
        </div>
    )
}

export default titleHero