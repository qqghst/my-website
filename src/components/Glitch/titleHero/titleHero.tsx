import React from 'react'
import cl from './titleHero.module.css'

interface ITitleHero {
    children: React.ReactNode,
    className: string,
}

const titleHero: React.FC<ITitleHero> = ({children, className, ...props}) => {
    return (
        <div className='flex-1 flex flex-col justify-center'>
            <p className={`${cl.titleHero} text-whiteOppacity32 tracking-regularText mb-[16px] text-base`}> hello, i am doing</p>  
            <h1 className={`${cl.titleHero} text-whiteOppacity font-bold leading-[110%] tracking-bigText text-[40px] sm:text-[68.8px]`}> Frontend development <br /> and web design that will <br /> <span className='text-whiteOppacity32'>increase your profit.</span></h1>  
            {/* <div className='flex-1 flex flex-col justify-center'>
                <p className='text-whiteOppacity32 tracking-regularText mb-[16px] text-base'>hello, i am doing</p>
                <h1 className='text-whiteOppacity font-bold leading-[110%] tracking-bigText text-[40px] sm:text-[68.8px]'>Frontend development <br /> and web design that will <br /> <span className='text-whiteOppacity32'>increase your profit.</span></h1>
            </div> */}
        </div>
    )
}

export default titleHero