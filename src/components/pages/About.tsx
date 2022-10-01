import React from 'react';
import sphere from '../../assets/about/sphere.png'
import styles, { layout } from "../../styles";
import Button from "../Button";
import {leftImg} from "../../assets";

const About = () => {
    return (
        <>
            <section id='about' className={layout.sectionReverse}>
                <div className={layout.sectionImgReverse}>
                    <img src={leftImg} alt="sphere" className='w-[100%] h-[100%] relative z-[5]'/>
                </div>

                <div className={layout.sectionInfo}>
                    <p className='text-whiteOppacity text-[31.25px] leading-[130%] mb-[12px]'>my name is Dmitry. I started my carrier <br className='sm:block hidden'/> as an ux/ui designer.</p>
                    <p className='text-whiteOppacity text-[31.25px] leading-[130%] mb-[12px]'>then, after some time a tried html, css <br className='sm:block hidden'/> and this was mindblowing.</p>
                    <p className='text-whiteOppacity text-[31.25px] leading-[130%] mb-[12px]'>after learning html, css and doing some <br className='sm:block hidden'/> freelance i started learning javascript, <br className='sm:block hidden'/> then react, typescript etc...</p>
                    <p className='text-whiteOppacity text-[31.25px] leading-[130%]'>and... here i am</p>
                    <button className='text-whiteOppacity text-[16px] mt-[56px]'>read more</button>
                    <Button/>
                </div>
            </section>

            <section>
                <h1 className={styles.stroke}>THEICESILVER121@MAIL.RU / TG @QQGHST / GET IN TOUCH</h1>
            </section>

        </>



/*        <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
                <img src={sphere} alt="sphere" className='w-[100%] h-[100%] relative z-[5]'/>
            </div>

            <div className=''>
                <p className='text-whiteOppacity text-[31.25px] leading-[130%] mb-[12px]'>my name is Dmitry. I started my carrier <br/> as an ux/ui designer.</p>
                <p className='text-whiteOppacity text-[31.25px] leading-[130%] mb-[12px]'>then, after some time a tried html, css <br/> and this was mindblowing.</p>
                <p className='text-whiteOppacity text-[31.25px] leading-[130%] mb-[12px]'>after learning html, css and doing some <br/> freelance i started learning javascript, <br/> then react, typescript etc...</p>
                <p className='text-whiteOppacity text-[31.25px] leading-[130%]'>and... here i am</p>
                <button className='text-whiteOppacity text-[16px] mt-[56px]'>read more</button>
            </div>
        </section>*/
    );
};

export default About;