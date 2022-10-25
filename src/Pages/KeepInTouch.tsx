import React from 'react';
import Marquee from 'react-fast-marquee';
import { line } from "../Assets/imports";

const ScrollHorizontal: React.FC = () => {
    return (
        <>
            <img src={line} alt="" />
            <section className='flex flex-col justify-center'>
                <div className='flex flex-col justify-center items-center my-[80px]'>
                    <Marquee speed={90} gradient={false}>
                        <h1 className='text-whiteOppacity font-bold leading-[110%] tracking-[-1.5px] text-[40px] sm:text-[57.33px]'>theicesilver121@mail.ru / tg @qqghst / keep in touch</h1>
                    </Marquee>
                </div>
            </section>
            <img src={line} alt="" />
        </>
    )
}

export default ScrollHorizontal;
