import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const ScrollHorizontal: React.FC = () => {
    return (
        <>
            <hr className='opacity-20' />
            <section className='flex flex-col justify-center'>
                <div className='flex flex-col justify-center items-center my-[40px]'>
                    <Marquee speed={90} gradient={false}>
                        {/* <h1 className='text-whiteOppacity32 font-bold tracking-bigText text-[40px] sm:text-[57.33px]'><span className='hover:text-whiteOppacity'>theicesilver121@mail.ru </span> / <span className='hover:text-whiteOppacity'>tg @qqghst</span> / <span className='hover:text-whiteOppacity'>keep in touch</span> /&nbsp;</h1> */}
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
            </section>
            <hr className='opacity-20' />
        </>
    )
}

export default ScrollHorizontal;
