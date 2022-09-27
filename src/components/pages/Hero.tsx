import React from 'react';
import styles from "../../styles";
import { arrow, giphy, gif } from "../../assets";
const Hero = () => {
    return (
        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
                <div className='flex flex-col w-full mt-[80px]'>
                    <p className='flex flex-col py-[6px] mb-2 text-[16px] text-whiteOppacity32 '>hello, i am doing</p>
                    <h1 className='flex-1 font-inter font-bold ss:text-[57.33px] text-[47.78px] text-whiteOppacity ss:leading-[110%] leading-[80%] tracking-[-0.5px] '>Frontend development <br className='sm:block hidden'/> and web design that will <br className='sm:block hidden'/> <span className='text-whiteOppacity32'>increase your profit.</span></h1>
                </div>
                <p className='flex flex-row items-center py-[6px] mb-2 mt-[130px] text-whiteOppacity'>Keep going? <img src={arrow} alt="arrow"/></p>
            </div>
            <div>
                {/*<img src={gif} alt="gif" className='w-[100%] h-[100%] relative z-[5]'/>*/}
            </div>

        </section>
    );
};

export default Hero;

// import React from 'react';
// import styles from "../../styles";
// import {arrow} from "../../assets";
// const Hero = () => {
//     return (
//         <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
//             <div className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
//                 <p className='flex flex-row items-center py-[6px] mb-2 text-[16px] text-whiteOppacity32 '>hello, i am doing</p>
//                 <div className='flex flex-row justify-between items-center w-full mt-[80px]'>
//                     <h1 className='flex-1 font-inter font-bold ss:text-[68.8px] text-[47.78px] text-whiteOppacity ss:leading-[110%] leading-[80%] tracking-[-0.5px] '>Frontend development <br className='sm:block hidden'/> and web design that will <br className='sm:block hidden'/> <span className='text-whiteOppacity32'>increase your profit.</span></h1>
//                 </div>
//                 <p className='flex flex-row items-center py-[6px] mb-2 mt-[100px] text-whiteOppacity'>Keep going? <img src={arrow} alt="arrow"/></p>
//             </div>
//
//         </section>
//     );
// };
//
// export default Hero;