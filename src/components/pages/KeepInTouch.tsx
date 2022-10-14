import React from 'react';
import Marquee from 'react-fast-marquee';
import { line } from "../../assets/imports";

const ScrollHorizontal: React.FC = () => {
    return (
        <>
            <section className='flex flex-col justify-center my-[80px]'>
                <div className='flex flex-col justify-center items-center'>
                    <Marquee speed={90} gradient={false}>
                        <h1 className='text-whiteOppacity font-bold leading-[110%] tracking-[0.5px] text-[40px] sm:text-[68.8px]'> THEICESILVER121@MAIL.RU / TG @QQGHST / KEEP IN TOUCH / </h1>
                    </Marquee>
                </div>
            </section>
            <img src={line} alt="" />
        </>
    )
}

export default ScrollHorizontal;
