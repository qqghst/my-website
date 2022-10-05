import React from 'react';
import sphere from '../../assets/about/sphere.png'
import styles, { layout } from "../../styles";
import Button from "../UI/Button";
import {leftImg} from "../../assets/imports";
import { readMoreBtn } from '../../assets/imports';

const About: React.FC = () => {
    return (
        <>
        <div className='text-white'>
            asasasasasasaasasasasasasaasasasasasasaasasasasasasaasasasasasasaasasasasasasaasasasasasasaasasasasasasaasasasasasasaasasasasasasaasasasasasasaasasasasasasaasasasasasasa
        </div>
            <section id='about' className={layout.sectionReverse}>

                <div className={layout.sectionInfo}>
                    <p className='text-whiteOppacity text-[31.25px] leading-[130%] mb-[12px]'>my name is Dmitry. I started my carrier <br className='sm:block hidden'/> as an ux/ui designer.</p>
                    <p className='text-whiteOppacity text-[31.25px] leading-[130%] mb-[12px]'>then, after some time a tried html, css <br className='sm:block hidden'/> and this was mindblowing.</p>
                    <p className='text-whiteOppacity text-[31.25px] leading-[130%] mb-[12px]'>after learning html, css and doing some <br className='sm:block hidden'/> freelance i started learning javascript, <br className='sm:block hidden'/> then react, typescript etc...</p>
                    <p className='text-whiteOppacity text-[31.25px] leading-[130%]'>and... here i am</p>
                    <Button>
                        click here <img src={readMoreBtn} alt="" />
                    </Button>
                </div>
                <div className={layout.sectionInfo}>
                    <p className='text-whiteOppacity text-[31.25px] leading-[130%] mb-[12px]'>my name is Dmitry. I started my carrier <br className='sm:block hidden'/> as an ux/ui designer.</p>
                    <p className='text-whiteOppacity text-[31.25px] leading-[130%] mb-[12px]'>then, after some time a tried html, css <br className='sm:block hidden'/> and this was mindblowing.</p>
                    <p className='text-whiteOppacity text-[31.25px] leading-[130%] mb-[12px]'>after learning html, css and doing some <br className='sm:block hidden'/> freelance i started learning javascript, <br className='sm:block hidden'/> then react, typescript etc...</p>
                    <p className='text-whiteOppacity text-[31.25px] leading-[130%]'>and... here i am</p>
                    <Button>
                        click here <img src={readMoreBtn} alt="" />
                    </Button>
                </div>
            </section>
        </>
    );
};

export default About;